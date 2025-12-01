import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { nombre, email, telefono, empresa, mensaje } = await request.json();

    // Validate required fields
    if (!nombre || !email || !telefono || !mensaje) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

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
      to: process.env.SMTP_TO_EMAIL,
      replyTo: email,
      subject: `Nueva consulta de ${nombre} - Actitud Edificio Corporativo`,
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
              <p style="margin: 10px 0;"><strong style="color: #1F3A5A;">Nombre:</strong> ${nombre}</p>
              <p style="margin: 10px 0;"><strong style="color: #1F3A5A;">Email:</strong> ${email}</p>
              <p style="margin: 10px 0;"><strong style="color: #1F3A5A;">Teléfono:</strong> ${telefono}</p>
              ${empresa ? `<p style="margin: 10px 0;"><strong style="color: #1F3A5A;">Empresa:</strong> ${empresa}</p>` : ''}

              <div style="margin-top: 20px; padding-top: 20px; border-top: 2px solid #E6E8EB;">
                <strong style="color: #1F3A5A;">Mensaje:</strong>
                <p style="margin: 10px 0; line-height: 1.6;">${mensaje}</p>
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
            <h2 style="color: #0A1A2F;">¡Gracias por tu interés, ${nombre}!</h2>

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
    return NextResponse.json(
      { error: 'Error al enviar el email' },
      { status: 500 }
    );
  }
}
