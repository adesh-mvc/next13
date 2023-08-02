import { writeFile } from 'fs/promises'
import { join } from "path";
import { mkdir, stat } from "fs/promises";

import formidable, { errors as formidableErrors } from 'formidable';
import { FilesManager } from "turbodepot-node";
// import { Nextreq,resp, NextResponse } from 'next/server'

export const config = {
    api: {
        bodyParser: false
    }
};
const saveFile = async (file) => {
    const data = fs.readFileSync(file.path);
    fs.writeFileSync(`./public/${file.name}`, data);
    await fs.unlinkSync(file.path);
    return;
};

export default async function handler(req, res) {

    // parse a file upload
    const form = formidable({});
    let fields;
    let files;
    try {
        [fields, files] = await form.parse(req);
        // console.log(files.files)
        let rawPath = [];
        files.files.map((file) => {
            rawPath.push(file.filepath)
        })
        console.log(rawPath)
        let filesManager = new FilesManager();
        filesManager.mergeFiles(rawPath, 'merge.pdf', "\n");
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
    res.end(JSON.stringify({ fields, files }, null, 2));
    return;
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