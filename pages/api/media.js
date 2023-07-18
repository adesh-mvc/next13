// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


import { randomUUID } from 'crypto'
// import { S3Client } from "@aws-sdk/client-s3"
import { S3 } from "aws-sdk";

export const s3 = new S3({
    apiVersion: '2006-03-01',
    accessKeyId: process.env.S3_ACCESS_KEY,
    secretAccessKey: process.env.S3_SECRET_KEY,
    region: process.env.REGION,
    signatureVersion: 'v4'

});

export default async function handler(req, res) {
    const ext = req.query.fileType.split('/'[0]);
    const Key = `${randomUUID()}.${ext}`;
    const s3params = {
        Bucket: process.env.S3_BUCKET_NAME,
        Key,
        Expires: 60,
        ContentType: `image/${ext}`
    }

    const uploadUrl = await s3.getSignedUrl('putObject', s3params)
    res.status(200).json({ uploadUrl, key: Key })
}