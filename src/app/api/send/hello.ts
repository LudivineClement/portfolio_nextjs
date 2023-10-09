import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type ResponseData = {
  message: string
}

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {

    const transporter: nodemailer.Transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
      user: 'ludivine.clement0985@gmail.com',
      pass: 'erp1erp2hob0'
      }});

    const mailOptions: nodemailer.SendMailOptions = {
      from: 'ludivine.clement0985@gmail.com',
      to: 'ludivine.clement0985@gmail.com',
      subject: 'hello world',
      text: `tel 0123456789`,
      html: `<div> message envoyé à partir de NextJS </div>`
    };

    return await transporter
    .sendMail(mailOptions)
    .then ((response: nodemailer.SentMessageInfo) => {
    return res.status(200).json ({message: 'message envoyé'})
    })
    .catch ((error: nodemailer.SentMessageInfo) => {
    return res.status(500).json ({message: error.message})
    });

}