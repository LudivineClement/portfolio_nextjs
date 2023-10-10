import nodemailer from "nodemailer"

export default async function contactAPI(req, res) {
  const { name, email, tel, subject, message } = req.body
  const user = process.env.EMAIL_USER;

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 587,
    secure: false,
    auth: {
      user: user,
      pass: process.env.EMAIL_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false
  }
  });

  try {
    const mail = await transporter.sendMail({
      from: email,
      to: user,
      replyTo: email,
      subject: `Nouveau message de ${name}`,
      html: `
      <p> Objet: ${subject} <p>
      <p> Nom: ${name} <p>
      <p> tel: ${tel} <p>
      <p> email: ${email} <p>
      <p> Message: ${message} <p>
      `
    })
    console.log("message sent:", mail.messageId);

    return res.status(200).json({ message: "success" })
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "erreur dans l'envoi de l'email" })
  }

}