'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { contactFormSchema, type ContactFormData } from '@/lib/validations';

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onBlur', // Validate on blur for better UX
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
        // Auto-hide success message after 10 seconds
        setTimeout(() => setSubmitStatus('idle'), 10000);
      } else {
        const errorData = await response.json();
        setSubmitStatus('error');
        setErrorMessage(errorData.error || 'Hubo un error al enviar el mensaje');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      setErrorMessage('Error de conexión. Por favor verifica tu internet e intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="relative py-24 lg:py-32 bg-gradient-beige overflow-hidden">
      {/* Accent Stripes */}
      <div className="absolute right-0 top-0 bottom-0 w-12 md:w-16 lg:w-24 flex">
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

        <div className="text-center mb-12 flex justify-center">
          <Image
            src="/logo-actitud-black.png"
            alt="Actitud"
            width={300}
            height={90}
            className="h-16 w-auto md:h-20"
          />
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 lg:p-12 rounded shadow-2xl">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="nombre" className="block text-sm font-semibold text-dark-gray mb-2">
                Nombre completo <span className="text-red-500">*</span>
              </label>
              <input
                id="nombre"
                type="text"
                placeholder="Ingresa tu nombre completo"
                {...register('nombre')}
                className="w-full px-5 py-4 border-2 border-light-gray rounded focus:border-primary-blue outline-none transition-colors"
                aria-invalid={errors.nombre ? 'true' : 'false'}
                aria-describedby={errors.nombre ? 'nombre-error' : undefined}
              />
              {errors.nombre && (
                <p id="nombre-error" className="text-red-500 text-sm mt-1" role="alert">
                  {errors.nombre.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-dark-gray mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="tu@email.com"
                {...register('email')}
                className="w-full px-5 py-4 border-2 border-light-gray rounded focus:border-primary-blue outline-none transition-colors"
                aria-invalid={errors.email ? 'true' : 'false'}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p id="email-error" className="text-red-500 text-sm mt-1" role="alert">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="telefono" className="block text-sm font-semibold text-dark-gray mb-2">
                Teléfono <span className="text-red-500">*</span>
              </label>
              <input
                id="telefono"
                type="tel"
                placeholder="+595 XXX XXX XXX"
                {...register('telefono')}
                className="w-full px-5 py-4 border-2 border-light-gray rounded focus:border-primary-blue outline-none transition-colors"
                aria-invalid={errors.telefono ? 'true' : 'false'}
                aria-describedby={errors.telefono ? 'telefono-error' : undefined}
              />
              {errors.telefono && (
                <p id="telefono-error" className="text-red-500 text-sm mt-1" role="alert">
                  {errors.telefono.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="empresa" className="block text-sm font-semibold text-dark-gray mb-2">
                Empresa <span className="text-gray-400 text-xs">(opcional)</span>
              </label>
              <input
                id="empresa"
                type="text"
                placeholder="Nombre de tu empresa"
                {...register('empresa')}
                className="w-full px-5 py-4 border-2 border-light-gray rounded focus:border-primary-blue outline-none transition-colors"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="mensaje" className="block text-sm font-semibold text-dark-gray mb-2">
              Mensaje <span className="text-red-500">*</span>
            </label>
            <textarea
              id="mensaje"
              placeholder="Cuéntanos sobre tu proyecto o consulta..."
              rows={5}
              {...register('mensaje')}
              className="w-full px-5 py-4 border-2 border-light-gray rounded focus:border-primary-blue outline-none transition-colors resize-y"
              aria-invalid={errors.mensaje ? 'true' : 'false'}
              aria-describedby={errors.mensaje ? 'mensaje-error' : undefined}
            />
            {errors.mensaje && (
              <p id="mensaje-error" className="text-red-500 text-sm mt-1" role="alert">
                {errors.mensaje.message}
              </p>
            )}
          </div>

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
              {errorMessage || 'Hubo un error al enviar el mensaje. Por favor intenta nuevamente.'}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
