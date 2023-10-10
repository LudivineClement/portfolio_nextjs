import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const mailOptions = {
  from: '',
  to: '',
  subject: 'Test d\'envoi d\'email',
  text: 'Ceci est un test d\'envoi d\'email.',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Erreur lors de l\'envoi de l\'email :', error);
  } else {
    console.log('Email envoyé avec succès :', info.response);
  }
});
