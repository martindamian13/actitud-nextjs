'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { contactFormSchema, type ContactFormData } from '@/lib/validations';

export default function Contact() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onBlur',
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
    <section id="contacto" className="py-24 lg:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="mb-4">CONTACTANOS</h2>
          <p className="text-lg text-dark-gray max-w-xl mx-auto">
            Dejanos tus datos y un asesor se comunicará con vos a la brevedad
          </p>
        </motion.div>

        <motion.form
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-6 md:p-10 rounded-xl shadow-lg"
        >
          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <div>
              <label htmlFor="nombre" className="block text-sm font-semibold text-dark-gray mb-2">
                Nombre completo <span className="text-red-500">*</span>
              </label>
              <input
                id="nombre"
                type="text"
                placeholder="Ingresa tu nombre completo"
                {...register('nombre')}
                className="w-full px-4 py-3 border border-light-gray rounded-lg focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none transition-all"
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
                className="w-full px-4 py-3 border border-light-gray rounded-lg focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none transition-all"
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

          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <div>
              <label htmlFor="telefono" className="block text-sm font-semibold text-dark-gray mb-2">
                Teléfono <span className="text-red-500">*</span>
              </label>
              <input
                id="telefono"
                type="tel"
                placeholder="+595 XXX XXX XXX"
                {...register('telefono')}
                className="w-full px-4 py-3 border border-light-gray rounded-lg focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none transition-all"
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
                className="w-full px-4 py-3 border border-light-gray rounded-lg focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none transition-all"
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
              rows={4}
              {...register('mensaje')}
              className="w-full px-4 py-3 border border-light-gray rounded-lg focus:border-primary-blue focus:ring-1 focus:ring-primary-blue outline-none transition-all resize-y"
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
            className="w-full bg-primary-blue text-white px-6 py-4 text-base md:text-lg font-semibold rounded-lg hover:bg-primary-dark-blue transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
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
        </motion.form>
      </div>
    </section>
  );
}
