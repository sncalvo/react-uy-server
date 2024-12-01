"use client";

import createPresenter from "@/actions/createPresenter";
import Alert from "@/components/atoms/Alert";
import Button from "@/components/atoms/Button";
import { createPresenterSchema } from "@/schemas/presenter";
import { useRef, useState } from "react";

import type z from "zod";

function useForm(
  schema: z.ZodSchema,
  submitter: (data: z.infer<typeof schema>) => Promise<unknown>,
) {
  const formRef = useRef<HTMLFormElement>(null);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    try {
      setLoading(true);

      const data = Object.fromEntries(formData.entries());

      await submitter(schema.parse(data));

      setSuccess(true);

      formRef.current?.reset();
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const onClear = () => {
    setError(false);
    setSuccess(false);
  };

  return {
    formRef,
    error,
    success,
    loading,
    handleSubmit,
    onClear,
  };
}

const PresenterSection = () => {
  const { formRef, error, success, loading, handleSubmit, onClear } = useForm(
    createPresenterSchema,
    createPresenter,
  );

  return (
    <div
      className="isolate px-6 py-24 sm:py-32 lg:px-8 relative"
      id="become-speaker"
    >
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-react-200 to-react-800 opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          ¿Quieres ser un speaker?
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Comparte tus conocimientos con la comunidad React Uruguay, envíanos tu
          propuesta de charla
        </p>
      </div>
      <div className="mx-auto max-w-2xl mt-8">
        <Alert
          variant={error ? "error" : success ? "success" : false}
          onDismiss={() => onClear()}
          title={
            error ? "Error al crear solicitud" : "Solicitud creada con éxito"
          }
          description={
            error
              ? "Por favor, revise los datos e intente de nuevo"
              : "Estaremos en contacto apenas podamos para charlar sobre su presentación. Muchas gracias!"
          }
        />
      </div>
      <form
        ref={formRef}
        action={handleSubmit}
        className="mx-auto mt-8 max-w-xl sm:mt-12"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Nombre
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="firstName"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-react-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Apellido
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="lastName"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-react-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="company"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Empresa
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="companyName"
                id="company"
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-react-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-react-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Descripción de la charla
            </label>
            <div className="mt-2.5">
              <textarea
                name="presentationDescription"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-react-600 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Button type="submit" loading={loading}>
            Enviar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PresenterSection;
