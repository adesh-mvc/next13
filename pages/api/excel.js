import ExcelJS from "exceljs";
import { responsePathAsArray } from "graphql";
export default async function handler(req, res) {
    const workbook = new ExcelJS.Workbook();

    // let buffers = [];
    // xls.on('data', buffers.push.bind(buffers));
    // xls.on('end', () => {

    //     let pdfData = Buffer.concat(buffers);
    //     res.writeHead(200, {
    //         'Content-Length': Buffer.byteLength(pdfData),
    //         'Content-Type': 'application/octet-stream',
    //         'Content-disposition': 'attachment;filename=MySheet.xlsx',
    //     })
    //         .end(pdfData);

    // });
    // xls.end();
    return res.status(200).json({ success: true });
}