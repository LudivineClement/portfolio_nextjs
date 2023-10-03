import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const request = await req.json();

  const transporter: nodemailer.Transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  const mailOptions: nodemailer.SendMailOptions = {
    from: request.email, // adresse de l'expéditeur
    to: process.env.EMAIL_USER, // liste des destinataires
    subject: request.subject, // objet du message
    text: `Téléphone: ${request.tel}\n\n${request.message}`, // corps du message en texte brut
    html: `<div>Téléphone: ${request.tel}</div><div>${request.message}</div>` // corps du message au format HTML
  };
  

  return await transporter
    .sendMail(mailOptions)
    .then((response: nodemailer.SentMessageInfo) => {
      return NextResponse.json(
        { error: false, emailSent: true, errors: [], response },
        { status: 200 }
      );
    })
    .catch((error: nodemailer.SentMessageInfo) => {
      return NextResponse.json(
        { error: true, emailSent: false, errors: [error] },
        { status: 500 }
      );
    });
}