// pages/api/sendEmail.ts
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, firstname, email, phone, company, country, message } = req.body;

  const user = process.env.MAIL_USER;
  const password = process.env.MAIL_PASSWORD;

  const data = {
    name,
    firstname,
    email,
    phone,
    company,
    country,
    message,
  };

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
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

  const mailToClient = await transporter.sendMail({
    from: user,
    to: email,
    replyTo: email,
    subject: `[UXMOCA Team] We have received your contact request!`,
    html: `<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 0;
            }
            .email-container {
                max-width: 600px;
                margin: 40px auto;
                padding: 20px;
                background-color: #ffffff;
                border-radius: 10px;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            }
            .header {
                text-align: center;
                margin-bottom: 20px;
            }
            .header img {
                max-width: 150px;
            }
            .content {
                padding: 20px;
                line-height: 1.5;
            }
            .footer {
                text-align: center;
                margin-top: 30px;
                color: #888888;
                font-size: 12px;
            }
            .button {
                display: block;
                width: 200px;
                height: 40px;
                margin: 20px auto;
                background-color: #742119;
                text-align: center;
                border-radius: 5px;
                color: white;
                font-weight: bold;
                line-height: 40px;
                text-decoration: none;
            }
        </style>
    </head>
    <body>
        <div class="email-container">
            <div class="header">
                <!-- You can replace 'logo.png' with your logo's filename. Ensure you have the image hosted and use the absolute URL in 'src' -->
                <img src="../public/logo_mail.png" alt="UXMOCA Logo">
            </div>
            <div class="content">
                <h2>Hello ${firstname} ${name},</h2>
                <p>
                    Thank you for reaching out to us! We've received your message and are thrilled to hear from you.
                </p>
                <p>
                    Here's a quick recap of what you shared with us:
                </p>
                <blockquote style="background-color: #f4f4f4; padding: 10px; border-left: 5px solid #742119;">
                  ${message}
                </blockquote>
                <p>
                    A member of our team will review your message and get back to you shortly. In the meantime, feel free to check out our latest offerings or FAQ for more information.
                </p>
                <a href="https://www.uxmoca.com" class="button">View Our Offerings</a>
            </div>
            <div class="footer">
                Best Regards,<br>
                The UXMOCA Team
            </div>
        </div>
    </body>
    </html>`,
  });

  const mailToUs = await transporter.sendMail({
    from: user,
    to: "uxmoca@gmail.com",
    replyTo: email,
    subject: `Contact form submission from ${name} ${firstname}`,
    html: `<p>Name: ${name}</p>
        <p>First name: ${firstname}</p>
        <p>Company: ${company}</p>
        <p>Country: ${company}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
    `,
  });

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailToUs, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });

    transporter.sendMail(mailToClient, (err, info) => {
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
