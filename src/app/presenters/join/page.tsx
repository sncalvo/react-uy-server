'use client'
import createPresenter from '@/actions/createPresenter';
import Button from '@/components/atoms/Button';
import { createPresenterSchema } from '@/schemas/presenter';
import { useRef, useState } from 'react';
import { z } from 'zod';

function useForm(schema: z.ZodSchema, submitter: (data: z.infer<typeof schema>) => Promise<unknown>) {
  const formRef = useRef<HTMLFormElement>(null);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    try {
      const data = Object.fromEntries(formData.entries());

      setLoading(true);
      await submitter(schema.parse(data));

      setSuccess(true);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return {
    formRef,
    error,
    success,
    loading,
    handleSubmit
  }
}

export default function Join() {
  const { formRef, error, success, loading, handleSubmit } = useForm(createPresenterSchema, createPresenter);

  return (
    <form
      action={handleSubmit}
      className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
      ref={formRef}
    >
      <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-white">
              Nombre
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="firstName"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-white">
              Apellido
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="lastName"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="subject" className="block text-sm font-semibold leading-6 text-white">
              Tema
            </label>
            <div className="mt-2.5">
              <textarea
                name="subject"
                id="subject"
                rows={4}
                className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-end">
          <Button type="submit" loading={loading}>
            Enviar
          </Button>
        </div>
      </div>
    </form>
  )
}
