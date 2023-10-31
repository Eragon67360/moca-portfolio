import { NextApiRequest, NextApiResponse } from 'next';
import multer from 'multer';
import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/') // specify the directory to save files
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname) // specify the filename, here it's prefixed with a timestamp for uniqueness
  }
});

interface MulterRequest extends NextApiRequest {
  file: any;
}

const upload = multer({ storage: storage });

const uploadHandler = async (req: MulterRequest, res: NextApiResponse) => {
  upload.single('file')(req as any, res as any, async (err) => { // assuming single file upload
    if (err) {
      return res.status(500).send(err.message);
    }

    // Once file is saved, save its metadata to database
    const fileData = {
      filename: req.file.filename,
      path: req.file.path,
      mimetype: req.file.mimetype,
      size: req.file.size
    };

    try {
      const savedFile = await prisma.file.create({
        data: fileData
      });
      res.status(200).json(savedFile);
    } catch (error) {
      res.status(500).send("Error saving to database: " + err.message);
    }
  });
};

export default uploadHandler;
