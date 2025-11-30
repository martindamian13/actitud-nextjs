'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
  nombre: string;
  email: string;
  telefono: string;
  empresa: string;
  mensaje: string;
};

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="relative py-24 lg:py-32 bg-gradient-beige overflow-hidden">
      {/* Accent Stripes */}
      <div className="absolute right-0 top-0 bottom-0 w-24 flex">
        <div className="flex-1 bg-accent-blue"></div>
        <div className="flex-1 bg-accent-green"></div>
        <div className="flex-1 bg-accent-orange"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <h2 className="text-center mb-12">
          TU FUTURO CORPORATIVO<br />
          COMIENZA ACÁ, CON<br />
          ACTITUD Y VISIÓN.
        </h2>

        <div className="text-center mb-12">
          <div className="text-4xl font-black text-deep-blue-black inline-block">
            Actitud
            <span className="ml-2 text-accent-green">✓</span>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 lg:p-12 rounded shadow-2xl">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <input
                type="text"
                placeholder="Nombre completo"
                {...register('nombre', { required: 'Este campo es requerido' })}
                className="w-full px-5 py-4 border-2 border-light-gray rounded focus:border-primary-blue outline-none transition-colors"
              />
              {errors.nombre && <p className="text-red-500 text-sm mt-1">{errors.nombre.message}</p>}
            </div>

            <div>
              <input
                type="email"
                placeholder="Email"
                {...register('email', {
                  required: 'Este campo es requerido',
                  pattern: { value: /^\S+@\S+$/i, message: 'Email inválido' }
                })}
                className="w-full px-5 py-4 border-2 border-light-gray rounded focus:border-primary-blue outline-none transition-colors"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <input
                type="tel"
                placeholder="Teléfono"
                {...register('telefono', { required: 'Este campo es requerido' })}
                className="w-full px-5 py-4 border-2 border-light-gray rounded focus:border-primary-blue outline-none transition-colors"
              />
              {errors.telefono && <p className="text-red-500 text-sm mt-1">{errors.telefono.message}</p>}
            </div>

            <input
              type="text"
              placeholder="Empresa"
              {...register('empresa')}
              className="w-full px-5 py-4 border-2 border-light-gray rounded focus:border-primary-blue outline-none transition-colors"
            />
          </div>

          <textarea
            placeholder="Mensaje"
            rows={5}
            {...register('mensaje', { required: 'Este campo es requerido' })}
            className="w-full px-5 py-4 border-2 border-light-gray rounded focus:border-primary-blue outline-none transition-colors mb-6"
          />
          {errors.mensaje && <p className="text-red-500 text-sm mt-1">{errors.mensaje.message}</p>}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary-blue text-white px-8 py-5 text-lg font-semibold rounded hover:bg-primary-dark-blue transition-all duration-300 hover:-translate-y-1 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Enviando...' : 'Enviar consulta'}
          </button>

          {submitStatus === 'success' && (
            <p className="text-accent-green text-center mt-4 font-semibold">
              ¡Mensaje enviado exitosamente! Nos contactaremos contigo pronto.
            </p>
          )}

          {submitStatus === 'error' && (
            <p className="text-red-500 text-center mt-4">
              Hubo un error al enviar el mensaje. Por favor intenta nuevamente.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
