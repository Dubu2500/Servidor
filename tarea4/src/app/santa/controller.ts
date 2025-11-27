import { Request, Response } from 'express';
import { mailer } from './model';
import { Options } from 'nodemailer/lib/mailer';

export function showForm(req: Request, res: Response) {
  res.render('santa-form');
}

export function sendLetter(req: Request, res: Response) {
  const { correoSanta, carta } = req.body as {
    correoSanta?: string;
    carta?: string;
  };

  if (!correoSanta || !carta) {
    return res.status(400).render('santa-form', {
      error: 'Todos los campos son obligatorios',
      correoSanta,
      carta,
    });
  }

  const today = new Date().toLocaleDateString('es-MX');

  const htmlTemplate = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8" />
      <title>Carta para Profe Santa</title>
      <style>
        body {
          margin: 0;
          padding: 24px 0;
          background-color: #f0f6ff;
          font-family: "Courier New", "Lucida Console", Monaco, monospace;
        }
        .page {
          max-width: 700px;
          margin: 0 auto;
          padding: 40px 50px;
          background: #fdf6e3;
          border: 1px solid #e0d3b8;
          line-height: 1.6;
        }
        h1 {
          margin-top: 0;
          margin-bottom: 24px;
          text-align: center;
        }
        .date {
          text-align: right;
          margin-bottom: 16px;
        }
        .body-text {
          margin-top: 16px;
        }
        .body-text p {
          margin: 0 0 12px 0;
        }
        .signature {
          margin-top: 32px;
        }
      </style>
    </head>
    <body>
      <div class="page">
        <div class="date">${today}</div>
        <h1>Carta para Profe Santa</h1>
        <div class="body-text">
          <p><strong>Querido Profe Santa,</strong></p>
          <p>${carta.replace(/\n/g, '<br>')}</p>
        </div>
        <div class="signature">
          <p><em>Atentamente,</em></p>
          <p><em>Vicky</em></p>
        </div>
      </div>
    </body>
    </html>
  `;

  const mailOptions: Options = {
    from: process.env.EMAIL_USER || '',
    to: correoSanta,
    subject: 'Carta para Profe Santa',
    html: htmlTemplate,
  };

  mailer
    .sendMail(mailOptions)
    .then(() => {
      res.render('santa-form', {
        success: 'La carta se envio correctamente.',
        correoSanta,
        carta,
      });
    })
    .catch((error) => {
      console.error('Error al enviar correo:', error);
      res.status(500).render('santa-form', {
        error: 'Hubo un problema al enviar la carta. Intenta de nuevo.',
        correoSanta,
        carta,
      });
    });
}
