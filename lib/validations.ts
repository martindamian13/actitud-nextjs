import { z } from 'zod';

/**
 * Contact form validation schema
 * Valida los campos del formulario de contacto con reglas estrictas
 */
export const contactFormSchema = z.object({
  nombre: z
    .string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(100, 'El nombre es demasiado largo')
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, 'El nombre solo puede contener letras'),

  email: z
    .string()
    .min(1, 'El email es requerido')
    .email('Formato de email inválido')
    .max(255, 'El email es demasiado largo')
    .toLowerCase(),

  telefono: z
    .string()
    .min(7, 'El teléfono debe tener al menos 7 dígitos')
    .max(20, 'El teléfono es demasiado largo')
    .regex(/^[0-9+\s()-]+$/, 'Formato de teléfono inválido'),

  empresa: z
    .string()
    .max(100, 'El nombre de la empresa es demasiado largo')
    .optional()
    .or(z.literal('')),

  mensaje: z
    .string()
    .min(10, 'El mensaje debe tener al menos 10 caracteres')
    .max(1000, 'El mensaje es demasiado largo'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
