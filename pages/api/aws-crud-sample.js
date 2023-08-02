import { S3Client, GetObjectAclCommand, PutObjectCommand, ListObjectsV2Command, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export const s3Client = new S3Client({
    region: process.env.REGION,
    credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY,
        secretAccessKey: process.env.S3_SECRET_KEY,
    }
});

async function getObjectUrl(key) {
    const command = new GetObjectAclCommand({
        Bucket: process.env.S3_BUCKET_NAME,
        Key: key
    })
    const url = getSignedUrl(s3Client, command);
    return url;
}
async function putObject(fileName, contentType) {
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
async function deleteObject() {
    const command = new DeleteObjectCommand({
        Bucket: process.env.S3_BUCKET_NAME,
        Key: `uploads/hospital/10/2023/07/image-1689705179024.jpeg`
    })
    return await s3Client.send(command);
}
export default async function handler(req, res) {

    // const getobject = await getObjectUrl('38622f86-7de7-4fe9-b019-f0572d3692c0.image,png');
    const putobj = await putObject(`image-${Date.now()}.pdf`, "application/pdf");
    // const list = await listObject();
    // const delres = await deleteObject();
    console.log(putobj);
    res.status(200).json({ name: 'John Doe' })
}


// https://aws.amazon.com/blogs/developer/generate-presigned-url-modular-aws-sdk-javascript/