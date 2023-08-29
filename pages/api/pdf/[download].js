// import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
const PDFDocument = require("pdfkit-table");
// const { writeFileSync, fs } = require("fs");
const fs = require("fs");

export default async function handler(req, res) {
    // const pdfDoc = await PDFDocument.create()
    // const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)

    // const page = pdfDoc.addPage()
    // const { width, height } = page.getSize()
    // const fontSize = 30
    // page.drawText('Creating PDFs in JavaScript is awesome!', {
    //     x: 50,
    //     y: height - 4 * fontSize,
    //     size: fontSize,
    //     font: timesRomanFont,
    //     // color: rgb(0, 0.53, 0.71),
    // })

    // const pdfBytes = await pdfDoc.save()
    // // res.status(200).json({ name: 'John Doe', message: pdfBytes })
    // writeFileSync("form.pdf", pdfBytes);

    let doc = new PDFDocument({ margin: 30, size: 'A4' });
    // save document
    doc.pipe(fs.createWriteStream("./document.pdf"));

    ; (async function createTable() {
        // table
        const table = {
            title: "Title",
            subtitle: "Subtitle",
            headers: [
                { label: "Name", property: 'name', width: 60, renderer: null },
                { label: "Description", property: 'description', width: 150, renderer: null },
                { label: "Price 1", property: 'price1', width: 100, renderer: null },
                { label: "Price 2", property: 'price2', width: 100, renderer: null },
                { label: "Price 3", property: 'price3', width: 80, renderer: null },
                {
                    label: "Price 4", property: 'price4', width: 43,
                    renderer: (value, indexColumn, indexRow, row, rectRow, rectCell) => { return `U$ ${Number(value).toFixed(2)}` }
                },
            ],
            // complex data
            datas: [
                {
                    name: 'Name 1',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mattis ante in laoreet egestas. ',
                    price1: '$1',
                    price3: '$ 3',
                    price2: '$2',
                    price4: '4',
                },
                {
                    options: { fontSize: 10, separation: false },
                    name: 'bold:Name 2',
                    description: 'bold:Lorem ipsum dolor.',
                    price1: 'bold:$1',
                    price3: {
                        label: 'PRICE $3', options: { fontSize: 12 }
                    },
                    price2: '$2',
                    price4: '4',
                },
                // {...},
            ],
            // simeple data
            rows: [
                [
                    "Apple",
                    "Nullam ut facilisis mi. Nunc dignissim ex ac vulputate facilisis.",
                    "$ 105,99",
                    "$ 105,99",
                    "$ 105,99",
                    "105.99",
                ],
                // [...],
            ],
        };
        // the magic
        await doc.table(table, {
            prepareHeader: () => doc.font("Helvetica-Bold").fontSize(8),
            prepareRow: (row, indexColumn, indexRow, rectRow, rectCell) => {
                doc.font("Helvetica").fontSize(8);
                indexColumn === 0 && doc.addBackground(rectRow, 'blue', 0.15);
            },
        });
        // the magic (async/await)
        // await doc.table(table, { /* options */ });

        // doc.table(table).then(() => { doc.end() }).catch((err) => { })

        // if your run express.js server
        // to show PDF on navigator
        // doc.pipe(res);

        // done!
        doc.end();
    })();
    res.status(200).json({ name: 'John Doe' })
    // download(pdfBytes, "pdf-lib_form_flattening_example.pdf", "application/pdf");
}