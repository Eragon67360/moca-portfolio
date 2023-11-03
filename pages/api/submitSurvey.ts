import { NextApiRequest, NextApiResponse } from "next";
import { IncomingForm } from "formidable";
import * as nodemailer from "nodemailer";

export const config = {
  api: {
    bodyParser: false, // Disabling Next.js' default body parser
  },
};

interface FileDetail {
  size: number;
  filepath: string;
  newFilename: string;
  mimetype: string;
  mtime: string;
  originalFilename: string;
}

interface FilesObject {
  [key: string]: FileDetail[];
}

export default async function submitFormHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const form = new IncomingForm();
    let emailContent = "";
    let emailContentToClient: string[] | undefined = [""];
    let attachments: any[] = [];

    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.log("Error parsing the files");
        return res.status(400).json({
          status: "Fail",
          message: "There was an error parsing the files",
          error: err,
        });
      }

      console.log(JSON.stringify(files, null, 2));

      for (let key in files) {
        let file = files[key]?.[0];
        attachments.push({
          filename: file?.originalFilename,
          path: file?.filepath,
        });
      }

      console.log(attachments);

      emailContent = `
      Full Name: ${fields.fullname}
      Email: ${fields.email}
      Company: ${fields.company}
      Website type: ${fields.websiteType}
      If other: ${fields.other_website}
      Sales amount: ${fields.sales}
      Demographics?: ${fields.demographics}
      Demo age: ${fields.demographicsAge}
      Demo gender: ${fields.demographicsGender}
      Demo Education: ${fields.demographicsEducation}
      Demo family status: ${fields.demographicsFamilyStatus}
      Overall look: ${fields.overall_look}
      Links: ${fields.links}
      Pages: ${fields.pages}
      Language?: ${fields.language}
      Languages: ${fields.languages}
      Features: ${fields.features}
      Other feature?: ${fields.other_feature}
      Logo: ${fields.logo}
      Date: ${fields.date}
      Comments: ${fields.comments}


      Attachements: ${attachments.length}
    `;
      emailContentToClient = fields.email;
    });

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
      subject: "New survey submission with attachments",
      text: emailContent,
      attachments: attachments,
    };

    const mailToClient = {
      from: user,
      to: emailContentToClient,
      subject: "Successful survey",
      text: "Your survey has been successfully sent to UX MOCA, thanks for your participation!",
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

    await new Promise((resolve, reject) => {
      // send mail
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
