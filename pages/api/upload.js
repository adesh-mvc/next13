// https://www.mtechzilla.com/blogs/how-to-upload-images-and-videos-to-amazon-s3-with-next-js-and-aws-sdk-v3
// https://www.adamrichardson.dev/blog/next-js-image-upload-
// https://next-s3-upload.codingvalue.com/presigned-uploads
// https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingAWSSDK.html
// https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-aws-javascript.html
// https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-s3-presigned-post/Variable/createPresignedPost/
import { randomUUID } from 'crypto'
import https from "https";
import { PutObjectCommand, S3Client, HeadObjectCommand, CreateBucketCommand } from "@aws-sdk/client-s3";
import { fromIni } from "@aws-sdk/credential-providers";
import { HttpRequest } from "@aws-sdk/protocol-http";
import {
    getSignedUrl,
    S3RequestPresigner,
} from "@aws-sdk/s3-request-presigner";
import { parseUrl } from "@aws-sdk/url-parser";
import { formatUrl } from "@aws-sdk/util-format-url";
import { Hash } from "@aws-sdk/hash-node";


export const s3Client = new S3Client({
    region: process.env.REGION,
    credentials: {
        accessKeyId: process.env.ACCESS_KEY_ID,
        secretAccessKey: process.env.SECRET_ACCESS_KEY,
    }
});

export const checkIfFileExist = async (BucketName, KeyName) => {
    try {
        const response = await s3Client.send(
            new HeadObjectCommand({
                Bucket: BucketName,
                Key: KeyName
            })
        );
        return true;
    } catch (error) {
        if (error.httpStatusCode === 404) return false;
    }
};
// https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/getting-started-nodejs.html
export default async function (req, res) {
    console.log("NextApiRequest:", req.body.key)
    const params = {
        Bucket: 'cd-sample-101', // The name of the bucket. For example, 'sample-bucket-101'.process.env.S3_BUCKET_NAME
        Key: `${randomUUID()}.${req.body.key}`, // The name of the object. For example, 'sample_upload.txt'.
        Body: req.body.fileName, // The content of the object. For example, 'Hello world!".
    };
    const input = { // CreateBucketRequest
        // ACL: "private" || "public-read" || "public-read-write" || "authenticated-read",
        Bucket: "cd-sample-104/adesh", // required
        CreateBucketConfiguration: { // CreateBucketConfiguration
            LocationConstraint: process.env.REGION,
        },
        // GrantFullControl: "STRING_VALUE",
        // GrantRead: "STRING_VALUE",
        // GrantReadACP: "STRING_VALUE",
        // GrantWrite: "STRING_VALUE",
        // GrantWriteACP: "STRING_VALUE",
        // ObjectLockEnabledForBucket: true || false,
        // ObjectOwnership: "BucketOwnerPreferred" || "ObjectWriter" || "BucketOwnerEnforced",
    };
    // There are two ways to generate a presigned URL.
    // 1. Use createPresignedUrl without the S3 client.
    // 2. Use getSignedUrl in conjunction with the S3 client and GetObjectCommand.
    try {
        const data = await s3Client.send(
            new CreateBucketCommand(input)
        );

        console.log("Successfully created a bucket called ", data.Location);
        return data; // For unit tests.
    } catch (err) {
        console.log("Error", err);
    }
    // Create an object and upload it to the Amazon S3 bucket.
    try {
        const results = await s3Client.send(new PutObjectCommand(params));
        console.log(
            "Successfully created " +
            params.Key +
            " and uploaded it to " +
            params.Bucket +
            "/" +
            params.Key
        );
        return results; // For unit tests.
    } catch (err) {
        console.log("Error", err);
    }

}