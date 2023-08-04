import { S3Client, GetObjectAclCommand, PutObjectCommand, ListObjectsV2Command, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
const s3Client = new S3Client({
    region: process.env.REGION,
    credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY,
        secretAccessKey: process.env.S3_SECRET_KEY,
    }
});
export async function getObjectUrlByKey(key) {
    const command = new GetObjectAclCommand({
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
export async function listObject() {
    const command = new ListObjectsV2Command({
        Bucket: process.env.S3_BUCKET_NAME,
        Key: `/`
    });
    const res = await s3Client.send(command);
    return res;
}
export async function deleteObject() {
    const command = new DeleteObjectCommand({
        Bucket: process.env.S3_BUCKET_NAME,
        Key: `uploads/hospital/10/2023/07/image-1689705179024.jpeg`
    })
    return await s3Client.send(command);
}
/* export default async function handler(req, res) {
    const { action } = req.query;
    if (action === 'single-img') {
        const getobject = await getObjectUrlByKey('38622f86-7de7-4fe9-b019-f0572d3692c0.image.png');
        return getobject;
    } else if (action === 'send-img') {
        const putobj = await putObject(`image-${Date.now()}.pdf`, "application/pdf");
        return putobj;
    } else if (action = 'list-img') {
        const list = await listObject();
        return list;
    } else if (action = 'delete') {
        const delres = await deleteObject();
        return delres;
    }
    // switch (action) {
    //     case 'single-img':
    //         const getobject = await getObjectUrl('38622f86-7de7-4fe9-b019-f0572d3692c0.image,png');
    //         return getobject;
    //     case 'send-img':
    // }
} */
// https://www.telerik.com/blogs/nextjs-api-routes-what-need-know
// https://stackoverflow.com/questions/66339330/aws-s3-update-image-using-pre-signed-url-axios-put-request