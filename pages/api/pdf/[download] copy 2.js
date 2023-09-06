// import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
const PDFDocument = require("pdfkit-table");
// const { writeFileSync, fs } = require("fs");
const fs = require("fs");
const f1 = () => {

    const doc = new PDFDocument();
    // save document


    doc.pipe(fs.createWriteStream('example.pdf'));
    const table1 = {
        headers: ['Country', 'Conversion rate', 'Trend'],
        rows: [
            ['Switzerland', '12%', '+1.12%'],
            ['France', '67%', '-0.98%'],
            ['England', '33%', '+4.44%']
        ]
    };

    doc.table(table1, { width: 200, border: 0 });
    const table0 = {
        headers: ['Word', 'Comment', 'Summary'],
        rows: [
            ['Apple', 'Not this one', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra at ligula gravida ultrices. Fusce vitae pulvinar magna.'],
            ['Tire', 'Smells like funny', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra at ligula gravida ultrices. Fusce vitae pulvinar magna.']
        ]
    };

    doc.moveDown().table(table0, {
        prepareHeader: () => doc.font('Helvetica-Bold'),
        prepareRow: (row, i) => doc.font('Helvetica').fontSize(12)
    });


    const table2 = {
        headers: false,
        rows: [
            ['Apple', 'Not this one', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra at ligula gravida ultrices. Fusce vitae pulvinar magna.'],
            ['Tire', 'Smells like funny', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra at ligula gravida ultrices. Fusce vitae pulvinar magna.']
        ]
    };

    doc.moveDown().table(table2, {
        prepareHeader: () => doc.font('Helvetica-Bold'),
        prepareRow: (row, i) => doc.font('Helvetica').fontSize(12)
    });



    doc.end();
}
const f2 = () => {
    const doc = new PDFDocument({ margin: 30, });

    // to save on server
    doc.pipe(fs.createWriteStream("./document-5.pdf"));

    const table01 = {
        "headers": ["", "", ""],
        "rows": [
            ["Version 0.1.74", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id est ipsum. Fusce scelerisque maximus justo, lacinia ornare felis iaculis nec.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id est ipsum. "],
            ["Update:", "Age 2", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id est ipsum. Fusce."],
            ["$ npm pdfkit-table@latest", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id est ipsum.", "Year 3"],
            ["Thanks", "Age 4", "Year 4"],
        ],
    };

    doc.table(table01, {
        columnSpacing: 10,
        padding: 10,
        columnsSize: [200, 220, 135],
        align: "center",
        prepareHeader: () => doc.fontSize(11), // {Function}
        // -----------------------------------------------------------------
        // HERE THE MAGIC:
        // -----------------------------------------------------------------
        prepareRow: (row, indexColumn, indexRow, rectRow, rectCell) => {

            const { x, y, width, height } = rectCell;

            // first line 
            if (indexColumn === 0) {
                doc
                    .lineWidth(.5)
                    .moveTo(x, y)
                    .lineTo(x, y + height)
                    .stroke();
            }

            doc
                .lineWidth(.5)
                .moveTo(x + width, y)
                .lineTo(x + width, y + height)
                .stroke();


            doc.fontSize(10).fillColor('#292929');

        }, // {Function}
    });

    // done
    doc.end();
}
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
    // f1();

    // create document
    const doc = new PDFDocument();
    doc.pipe(fs.createWriteStream('out.pdf'));
    doc.moveTo(300, 75)
        .lineTo(373, 301)
        .lineTo(181, 161)
        .lineTo(419, 161)
        .lineTo(227, 301)
        .fill('red', 'even-odd');

    var loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in...';

    doc.y = 320;
    doc.fillColor('black')
    doc.text(loremIpsum, {
        paragraphGap: 10,
        indent: 20,
        align: 'justify',
        // columns: 2
    });

    const x1 = doc.x;
    const x6 = 310;
    doc.rect(doc.x, doc.y, 450, 65)
        .moveTo(300, doc.y).lineTo(300, doc.y + 65)
        .moveDown(0.2)
        .text('Member Name', { indent: 5, align: 'left', width: 140, height: doc.currentLineHeight() })
        .rect(x1, doc.y, 450, 0.5)
        .moveUp()
        .text("Adesh kumar", x6, doc.y)
        .moveDown(0.2)
        .text('Member ID', x1, doc.y, { indent: 5, align: 'left', width: 140, height: doc.currentLineHeight() })
        .rect(x1, doc.y, 450, 0.5)
        .moveUp()
        .text("ADESH00123", x6, doc.y)
        .moveDown(0.2)
        .text('Member DOB', x1, doc.y, { indent: 5, align: 'left' })
        .rect(x1, doc.y, 450, 0.5)
        .moveUp()
        .text("8826125211", x6, doc.y)
        .moveDown(0.2)
        .text('Address', x1, doc.y, { indent: 5, align: 'left' })
        .moveUp()
        .text("Hey there, little explorer! Have you ever noticed that some people smell really nice? Well, they might be wearing something.", x6, doc.y)
        .stroke()
        .moveDown(1.5);
    doc.pipe(res);
    doc.end();

    res.status(200).json({ name: 'John Doe' })
    // download(pdfBytes, "pdf-lib_form_flattening_example.pdf", "application/pdf");
}