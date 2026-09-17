import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { encode } from 'html-entities';
import { contactFormSchema } from '@/lib/validations';
import { ZodError } from 'zod';
import { checkBotId } from 'botid/server';
import { isRateLimited } from '@/lib/rateLimit';

const CONTACT_EMAIL = 'contacto@edificioactitud.com.py';

export async function POST(request: NextRequest) {
  try {
    // Block automated requests (Vercel BotID)
    const verification = await checkBotId();
    if (verification.isBot) {
      return NextResponse.json(
        { error: 'No pudimos verificar el envío. Por favor intenta nuevamente o escribinos por WhatsApp.' },
        { status: 403 }
      );
    }

    // Limit repeated submissions from the same IP
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown';
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Recibimos varias consultas seguidas. Por favor espera unos minutos o escribinos por WhatsApp.' },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Honeypot: real users never fill the hidden "website" field.
    // Pretend success so bots don't learn they were filtered.
    if (typeof body?.website === 'string' && body.website.trim() !== '') {
      return NextResponse.json(
        { message: 'Email sent successfully' },
        { status: 200 }
      );
    }

    // Validate with Zod schema
    const validatedData = contactFormSchema.parse(body);
    const { nombre, email, telefono, empresa, mensaje } = validatedData;

    // Sanitize all inputs to prevent XSS
    const sanitizedNombre = encode(nombre);
    const sanitizedEmail = encode(email);
    const sanitizedTelefono = encode(telefono);
    const sanitizedEmpresa = empresa ? encode(empresa) : '';
    const sanitizedMensaje = encode(mensaje);

    // Create transporter with SMTP configuration
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email to company
    const mailOptionsToCompany = {
      from: `"${process.env.SMTP_FROM_NAME || 'Actitud Web'}" <${process.env.SMTP_FROM_EMAIL}>`,
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `Nueva consulta de ${sanitizedNombre} - Actitud Edificio Corporativo`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #1F3A5A 0%, #0A1A2F 100%); padding: 40px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 32px; font-weight: 900;">
              Actitud <span style="color: #3CD278;">✓</span>
            </h1>
          </div>

          <div style="background: #f5f5f5; padding: 40px;">
            <h2 style="color: #0A1A2F; margin-top: 0;">Nueva Consulta desde el Sitio Web</h2>

            <div style="background: white; padding: 30px; border-radius: 8px; margin-top: 20px;">
              <p style="margin: 10px 0;"><strong style="color: #1F3A5A;">Nombre:</strong> ${sanitizedNombre}</p>
              <p style="margin: 10px 0;"><strong style="color: #1F3A5A;">Email:</strong> ${sanitizedEmail}</p>
              <p style="margin: 10px 0;"><strong style="color: #1F3A5A;">Teléfono:</strong> ${sanitizedTelefono}</p>
              ${sanitizedEmpresa ? `<p style="margin: 10px 0;"><strong style="color: #1F3A5A;">Empresa:</strong> ${sanitizedEmpresa}</p>` : ''}

              <div style="margin-top: 20px; padding-top: 20px; border-top: 2px solid #E6E8EB;">
                <strong style="color: #1F3A5A;">Mensaje:</strong>
                <p style="margin: 10px 0; line-height: 1.6; white-space: pre-wrap;">${sanitizedMensaje}</p>
              </div>
            </div>
          </div>

          <div style="background: #0A1A2F; padding: 20px; text-align: center;">
            <p style="color: #8C9097; margin: 0; font-size: 14px;">
              Actitud - Edificio Corporativo
            </p>
          </div>
        </div>
      `,
    };

    // Email confirmation to client
    const mailOptionsToClient = {
      from: `"${process.env.SMTP_FROM_NAME || 'Actitud'}" <${process.env.SMTP_FROM_EMAIL}>`,
      to: email,
      subject: 'Gracias por contactar a Actitud - Edificio Corporativo',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #D6CBB8 0%, #E8DED0 100%); padding: 40px; text-align: center;">
            <h1 style="color: #0A1A2F; margin: 0; font-size: 32px; font-weight: 900;">
              Actitud <span style="color: #3CD278;">✓</span>
            </h1>
          </div>

          <div style="background: #f5f5f5; padding: 40px;">
            <h2 style="color: #0A1A2F;">¡Gracias por tu interés, ${sanitizedNombre}!</h2>

            <div style="background: white; padding: 30px; border-radius: 8px; margin-top: 20px;">
              <p style="line-height: 1.8; color: #4A4F57;">
                Hemos recibido tu consulta sobre nuestro <strong>Edificio Corporativo Actitud</strong>.
                Nuestro equipo revisará tu mensaje y se pondrá en contacto contigo a la brevedad.
              </p>

              <p style="line-height: 1.8; color: #4A4F57; margin-top: 20px;">
                Donde la productividad y el bienestar se encuentran.
              </p>

              <div style="margin-top: 30px; padding: 20px; background: #E6E8EB; border-left: 4px solid #3CD278; border-radius: 4px;">
                <p style="margin: 0; color: #1F3A5A; font-weight: 600;">
                  📞 ¿Necesitas contactarnos de inmediato?
                </p>
                <p style="margin: 10px 0 0 0; color: #4A4F57;">
                  Llámanos o envíanos un WhatsApp
                </p>
              </div>
            </div>
          </div>

          <div style="background: #0A1A2F; padding: 30px; text-align: center;">
            <p style="color: white; margin: 0 0 10px 0; font-size: 18px; font-weight: 600;">
              Tu futuro corporativo comienza acá, con Actitud y Visión.
            </p>
            <p style="color: #8C9097; margin: 0; font-size: 14px;">
              Actitud - Edificio Corporativo
            </p>
          </div>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(mailOptionsToCompany);
    await transporter.sendMail(mailOptionsToClient);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);

    // Handle Zod validation errors
    if (error instanceof ZodError) {
      const fieldErrors = error.issues.map(err => ({
        field: err.path.join('.'),
        message: err.message,
      }));

      return NextResponse.json(
        {
          error: 'Datos inválidos',
          details: fieldErrors
        },
        { status: 400 }
      );
    }

    // Handle other errors
    return NextResponse.json(
      { error: 'Error al enviar el email. Por favor intenta nuevamente.' },
      { status: 500 }
    );
  }
}
