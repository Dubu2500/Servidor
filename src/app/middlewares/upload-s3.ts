import { Request } from "express";
import multer, { FileFilterCallback } from "multer";
import multerS3 from 'multer-s3';
import { S3Client } from "@aws-sdk/client-s3";

const s3 = new S3Client ({
    region: process.env.S3_REGION,
    credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY || '',
        secretAccessKey: process.env.S3_SECRET_KEY || ''
    }
});

const storage = multerS3({
    s3,
    bucket: 'ITESO',
    metadata: (req, file, callback) => {
        callback(null, {...file})
    },
    acl: 'public-read',// puede ser public-read si quieres que se muestren en cualquier lugar
    // se recomienda tener 2 buckets uno para recursos privados y otro para recursos publicos
    key: (req, file, callback) => {
        callback(null, file.originalname)
    }
});

const fileFilter = (req: Request, file: Express.Multer.File, callback: FileFilterCallback) => {    
    callback(null, file.mimetype.startsWith('image/'));
}

export const uploadS3 = multer({
    storage,
    fileFilter
})