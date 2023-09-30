import nodemailer from 'nodemailer';

const route = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const { name, email, subject, message } = req.body;

      const transporter = nodemailer.createTransport({
        service: 'Gmail', 
        auth: {
          user: process.env.EMAIL_USER, 
          pass: process.env.EMAIL_PASSWORD, 
        },
      });

      await transporter.sendMail({
        from: name,
        to: email, 
        subject,
        text: message,
      });

      res.status(200).json({ message: 'Message envoyé avec succès !' });
    } catch (error) {
      console.error('Une erreur s\'est produite lors de l\'envoi du courrier électronique :', error);
      res.status(500).json({ message: 'Une erreur s\'est produite lors de l\'envoi du message.' });
    }
  } else {
    res.status(405).json({ message: 'Méthode non autorisée' });
  }
};

export default route;
