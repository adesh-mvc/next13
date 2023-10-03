import ExcelJS from "exceljs";
import { responsePathAsArray } from "graphql";
export default async function handler(req, res) {
    var workbook1 = new ExcelJS.Workbook();
    workbook1.creator = 'Me';
    workbook1.lastModifiedBy = 'Me';
    workbook1.created = new Date();
    workbook1.modified = new Date();
    var sheet1 = workbook1.addWorksheet('Adesh kumar', {
        headerFooter: { firstHeader: "Hello Exceljs", firstFooter: "Hello World" }
    });
    var reHeader = ['FirstName', 'LastName', 'Other Name'];
    var reColumns = [
        { header: 'FirstName', key: 'firstname' },
        { header: 'LastName', key: 'lastname' },
        { header: 'Other Name', key: 'othername' }
    ];

    var rows = [
        [3, 'Alex', '44'],
        { firstname: 4, lastname: 'Margaret', othername: 32 }
    ];
    sheet1.columns = reColumns;
    sheet1.addRows(rows);
    // sheet1.columns = rows
    // workbook1.xlsx.writeFile("./error.xlsx").then(function () {
    //     console.log("xlsx file is written.");
    // });

    // buffer writing
    const buffers = await workbook1.xlsx.writeBuffer();
    // let pdfData = Buffer.concat(buffers);
    res.writeHead(200, {
        'Content-Length': Buffer.byteLength(buffers),
        'Content-Type': 'application/octet-stream',
        'Content-disposition': 'attachment;filename=MySheet.xlsx',
    })
        .end(buffers);
    return res.status(200).json({ success: true });
}