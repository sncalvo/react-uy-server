'use client'
import createPresenter from '@/actions/createPresenter';
import Button from '@/components/atoms/Button';
import { createPresenterSchema } from '@/schemas/presenter';
import { useRef, useState } from 'react';

export default function Join() {
  const formRef = useRef<HTMLFormElement>(null);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  return (
    <div className="p-52 flex items-center justify-center">
      <form
        ref={formRef}
        className="p-4 py-8 text-center items-center justify-center rounded dark:bg-slate-700 bg-slate-200 flex flex-col gap-4 w-96"
        action={
          async (data) => {
            try {
              const presenterData = {
                name: data.get('name'),
                email: data.get('email'),
              };
              const presenter = createPresenterSchema.parse(presenterData);

              formRef.current?.reset();

              await createPresenter(presenter);

              setError(false);
              setSuccess(true);
            } catch (error) {
              setError(true);
            }
          }
        }
      >
        <h2 className="text-3xl font-bold mb-5">Se un presentador</h2>

        {error && <span className="bg-red-500 p-3 rounded">Error inesperado, por favor intente mas tarde</span>}
        {success && <span className="bg-green-500 p-3 rounded">Solicitud enviada con exito</span>}

        <div className="grid grid-cols-10 gap-3 items-center w-full justify-between">
          <label htmlFor="Email" className="col-span-2">
            Email
          </label>
          <input name="email" type="email" id="Email" className="w-full p-3 rounded text-black col-span-8" />
        </div>

        <div className="grid grid-cols-10 gap-3 items-center w-full justify-between">
          <label htmlFor="Name" className="col-span-2">
            Name
          </label>
          <input name="name" type="name" id="Name" className="w-full p-3 rounded text-black col-span-8" />
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  )
}
