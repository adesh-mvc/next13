const fs = require('fs');
import { S3Client, GetObjectCommand, PutObjectCommand, ListObjectsV2Command, DeleteObjectC, GetObjectCommandommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export const s3Client = new S3Client({
    region: process.env.REGION,
    credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY,
        secretAccessKey: process.env.S3_SECRET_KEY,
    }
});

async function getObjectUrl(key) {
    const command = new GetObjectCommand({
        Bucket: process.env.S3_BUCKET_NAME,
        Key: key
    })
    const url = getSignedUrl(s3Client, command);
    return url;
}
export async function putObject(fileName, contentType) {
    const command = new PutObjectCommand({
        Bucket: process.env.S3_BUCKET_NAME,
        Key: `abc/10/2023/07/${fileName}`,
        ContentType: contentType
    });
    const url = await getSignedUrl(s3Client, command); //{ expiresIn: 60 }
    return url;
}
async function listObject() {
    const command = new ListObjectsV2Command({
        Bucket: process.env.S3_BUCKET_NAME,
        Key: `/`
    });
    const res = await s3Client.send(command);
    return res;
}
const upload_file = async () => {
    const fileContent = fs.readFileSync("upload/merge.pdf");
    const command = new PutObjectCommand({
        Bucket: process.env.S3_BUCKET_NAME,
        Key: 'f1.pdf',
        Body: fileContent,
    });

    try {
        const response = await s3Client.send(command);
        // console.log(response);
        return response;
    } catch (err) {
        console.error(err);
    }
};
async function deleteObject() {
    const command = new DeleteObjectCommand({
        Bucket: process.env.S3_BUCKET_NAME,
        Key: `uploads/hospital/10/2023/07/image-1689705179024.jpeg`
    })
    return await s3Client.send(command);
}
export default async function handler(req, res) {

    const getobject = await getObjectUrl('hospital/6410b3138572d8a327b5d6e5/2023/10/image-1696142997809.pdf');
    //     const putobj = await putObject(`image-${Date.now()}.pdf`, "application/pdf");
    // const list = await listObject();
    //     // const delres = await deleteObject();
    // const putobj = await upload_file();
    console.log(getobject);
    res.status(200).json({ name: 'John Doe', url: getobject })
}


// https://aws.amazon.com/blogs/developer/generate-presigned-url-modular-aws-sdk-javascript/