const PDFDocument = require('pdfkit');
const fs = require('fs');


export default function handler(req, res) {

    let pdfDoc = new PDFDocument({ bufferPages: true, size: 'A4' });
    // Passing size to the addPage function
    // pdfDoc.addPage({ size: 'A7' });
    // pdfDoc.pipe(fs.createWriteStream('lists.pdf'));

    // let myArrayOfItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

    // pdfDoc.list(myArrayOfItems);
    // // Move down a bit to provide space between lists
    // pdfDoc.moveDown(0.5);

    // let innerList = ['Nested Item 1', 'Nested Item 2'];
    // let nestedArrayOfItems = ['Example of a nested list', innerList];

    // pdfDoc.list(nestedArrayOfItems);

    let buffers = [];
    pdfDoc.on('data', buffers.push.bind(buffers));
    pdfDoc.on('end', () => {

        let pdfData = Buffer.concat(buffers);
        res.writeHead(200, {
            'Content-Length': Buffer.byteLength(pdfData),
            'Content-Type': 'application/pdf',
            'Content-disposition': 'attachment;filename=Hello-world.pdf',
        })
            .end(pdfData);

    });
    const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in suscipit purus.  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus nec hendrerit felis. Morbi aliquam facilisis risus eu lacinia. Sed eu leo in turpis fringilla hendrerit. Ut nec accumsan nisl.';

    pdfDoc.fontSize(8);
    pdfDoc.text(`This text is left aligned. ${lorem}`, {
        width: 410,
        align: 'left'
    }
    );

    pdfDoc.moveDown();
    pdfDoc.text(`This text is centered. ${lorem}`, {
        width: 410,
        align: 'center'
    }
    );

    pdfDoc.moveDown();
    pdfDoc.text(`This text is right aligned. ${lorem}`, {
        width: 410,
        align: 'right'
    }
    );

    pdfDoc.moveDown();
    pdfDoc.text(`This text is justified. ${lorem}`, {
        width: 410,
        align: 'justify'
    }
    );

    // draw bounding rectangle
    pdfDoc.rect(pdfDoc.x, 10, 410, pdfDoc.y).stroke();

    pdfDoc.moveDown(2);
    pdfDoc.font('ZapfDingbats').text('a', {
        top: 50
    });
    pdfDoc.font('Times-Roman')
        .fontSize(12)
        .text(`this is a test text`);
    let myArrayOfItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

    pdfDoc.list(myArrayOfItems);
    // Move down a bit to provide space between lists
    pdfDoc.moveDown(0.5);

    let innerList = ['Nested Item 1', 'Nested Item 2'];
    let nestedArrayOfItems = ['Example of a nested list', innerList];

    pdfDoc.list(nestedArrayOfItems);



    const table = pdfDoc.struct('Table');
    pdfDoc.addStructure(table);
    table.add(pdfDoc.struct('TD', () => { pdfDoc.text("Foo. "); }));
    table.add(pdfDoc.struct('TD', () => { pdfDoc.text("Bar. "); }));
    pdfDoc.end();

    // return res.status(201).json({ message: "adesgh" })
} 