import { NextApiRequest, NextApiResponse } from "next";
import multer from "multer";
import nodemailer from "nodemailer";

// Configure multer for memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage: storage }).array("files");

interface MulterRequest extends NextApiRequest {
  files: any[];
}

export default async function submitFormHandler(
  req: MulterRequest,
  res: NextApiResponse
) {
  try {
    upload(req as any, res as any, async (err) => {
      if (err instanceof multer.MulterError) {
        console.log("ERRR 1 ");
        return res.status(500).send(err.message);
      } else if (err) {
        console.log("ERRR 2 ");
        return res.status(500).send(err.message);
      }

      // All files are available in req.files
      // Other form data is available in req.body

      const user = process.env.MAIL_USER;
      const password = process.env.MAIL_PASSWORD;

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

      // Create email data with attachments
      const mailOptions = {
        from: user,
        to: "uxmoca@gmail.com",
        subject: "New form submission with attachments",
        text: "Here are the attachments:",
        attachments: req.files.map((file) => ({
          filename: file.originalname,
          content: file.buffer,
        })),
      };

      await new Promise((resolve, reject) => {
        // send mail
        transporter.sendMail(mailOptions, (err, info) => {
          if (err) {
            console.error(err);
            reject(err);
          } else {
            console.log(info);
            resolve(info);
          }
        });
      });
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ status: "Error", message: "Internal Server Error" });
  }
}
