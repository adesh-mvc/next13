
import fs from "fs/promises";

import formidable, { errors as formidableErrors } from 'formidable';
import util from "util";
import { exec } from 'node:child_process';
import { putObject } from "../aws-crud-sample";
import mergeFiles from "merge-files";
// import { Nextreq,resp, NextResponse } from 'next/server'
const execc = util.promisify(exec);
// const exec = util.promisify(exec);
export const config = {
    api: {
        bodyParser: false

    }
};
export async function merge_pdfs(pdfFiles, outputFile) {
    const { stdout, stderr } = await execc(`gs -dNOPAUSE -sDEVICE=pdfwrite -sOUTPUTFILE=${outputFile} -dBATCH ${pdfFiles}`)
    console.log('stdout:', stdout)
    console.log('stderr:', stderr)
}
export default async function handler(req, res) {
    const { action } = req.query;
    console.log("action:", action)
    if (action === 'bulk-upload') {

        // parse a file upload
        const form = formidable({
            uploadDir: `${__dirname}`,
            keepExtensions: true,
            encoding: 'utf-8',
            multiples: true,
            filename: (name, ext, part, form) => {
                return part.originalFilename; // Will be joined with options.uploadDir.
            }
        });
        const uploadFolder = "upload";
        form.multiples = true;
        // form.maxFileSize = 50 * 1024 * 1024; // 5MB
        form.uploadDir = uploadFolder;
        let fields;
        let files;
        let signedUrl;
        try {
            [fields, files] = await form.parse(req);

            let rawPath = [];

            files.files.map((file) => {
                rawPath.push(`upload/${file.newFilename}`)
            })
            // const pdfFiles = ['file_1.pdf','file_2.pdf']
            const outputFile = 'merged_file.pdf'

            // merge_pdfs(rawPath, outputFile)
            const outputPath = form.uploadDir + '/merge.pdf';
            const status = await mergeFiles(rawPath, outputPath);
            mergeFiles(rawPath, outputPath).then((status) => {
                console.log("status", status)


                if (status) {
                    // const deleteFilePromises = rawPath.map(file =>
                    //     fs.unlink(file),
                    // );

                    // await Promise.all(deleteFilePromises);
                }
                // next

            });
            signedUrl = await putObject(`image-${Date.now()}.pdf`, "application/pdf");
            console.log(signedUrl);
        } catch (err) {
            // example to check for a very specific error
            if (err.code === formidableErrors.maxFieldsExceeded) {

            }
            console.error(err);
            res.writeHead(err.httpCode || 400, { 'Content-Type': 'text/plain' });
            res.end(String(err));
            return;
        }
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ fields, files, signedUrl }, null, 2));
        return;
    }

}



// export async function POST(req, res) {
//     console.log(req)
    // const data = await req, resp.formData()
    // const file: File | null = data.get('file') as unknown as File

    // if (!file) {
    //     return res.json({ success: false })
    // }

/* const bytes = await file.arrayBuffer()
const buffer = Buffer.from(bytes)
*/
    // With the file data in the buffer, you can do whatever you want with it.
    // For this, we'll just write it to the filesystem in a new location
/*  const path = `/tmp/${file.name}`
 await writeFile(path, buffer)
 console.log(`open ${path} to see the uploaded file`)

 return res.json({ success: true }) */
// }