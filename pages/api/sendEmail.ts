// pages/api/sendEmail.ts
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { name, firstname, email, phone, company, country, subject, message } =
      req.body;

    const user = process.env.MAIL_USER;
    const password = process.env.MAIL_PASSWORD;

    const data = {
      name,
      firstname,
      email,
      phone,
      company,
      country,
      subject,
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

    const emailTemplatePath = path.join(
      process.cwd(),
      "templates",
      "emailTemplate.html"
    );
    var htmlcontent = fs.readFileSync(emailTemplatePath, "utf8");
    htmlcontent = htmlcontent.replace("${firstname}", firstname);
    htmlcontent = htmlcontent.replace("${name}", name);
    htmlcontent = htmlcontent.replace("${message}", message);
    htmlcontent = htmlcontent.replace("${subject}", subject);
    htmlcontent = htmlcontent.replace("null", "No subject specified"); //if subject is missing
    htmlcontent = htmlcontent.replace("undefined", "No subject specified"); //if subject is missing

    const mailToClient = {
      from: user,
      to: email,
      replyTo: email,
      subject: `[UXMOCA Team] We have received your contact request!`,
      html: htmlcontent,
    };

    const mailToUs = {
      from: user,
      to: "uxmoca@gmail.com",
      replyTo: email,
      subject: `Contact form submission from ${name} ${firstname}`,
      html: `<p>Name: ${name}</p>
        <p>First name: ${firstname}</p>
        <p>Company: ${company}</p>
        <p>Country: ${company}</p>
        <p>Email: ${email}</p>
        <p>Subject: ${subject}</p>
        <p>Message: ${message}</p>
    `,
    };

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
    });
    await new Promise((resolve, reject) => {
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
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ status: "Error", message: "Internal Server Error" });
  }
}
