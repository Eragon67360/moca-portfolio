// pages/api/sendEmail.ts
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from 'nodemailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, firstname, email, company, message } = req.body;

  const user = process.env.MAIL_USER;
  const password = process.env.MAIL_PASSWORD;

  const data = {
    name,
    firstname,
    email,
    company,
    message,
  };

  const transporter = nodemailer.createTransport({
    host: "smtp.orange.fr",
    port: 587,
    secure: false,
    auth: {
      user: user,
      pass: password,
    },
  });

  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
  });
 
  const mail = await transporter.sendMail({
    from: user,
    to: "thomas-moser@orange.fr",
    replyTo: email,
    subject: `Contact form submission from ${name} ${firstname}`,
    html: `<p>Name: ${name}</p>
        <p>First name: ${firstname}</p>
        <p>Company: ${company}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
    `,
  });
  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mail, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });

  res.status(200).json({ status: "OK" });
}
