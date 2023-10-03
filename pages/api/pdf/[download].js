// Define font files
var fonts = {
    Roboto: {
        normal: 'public/assets/fonts/Roboto-Regular.ttf',
        bold: 'public/assets/fonts/Roboto-Medium.ttf',
        italics: 'public/assets/fonts/Roboto-Italic.ttf',
        bolditalics: 'public/assets/fonts/Roboto-MediumItalic.ttf'
    },
    Fontello: {
        normal: 'public/assets/fonts/fontello/fontello.ttf',
        bold: 'public/assets/fonts/fontello/fontello.ttf',
        italics: 'public/assets/fonts/fontello/fontello.ttf',
        bolditalics: 'public/assets/fonts/fontello/fontello.ttf'
    },
    Courier: {
        normal: 'public/assets/fonts/Courier/Courier-Regular.ttf',
        bold: 'public/assets/fonts/Courier/Courier-BOLD.ttf',
        italics: 'public/assets/fonts/Courier/COURIER2.ttf',
        bolditalics: 'public/assets/fonts/Courier/CarrierBoldOblique.ttf',
    },
    // Helvetica: {
    //     normal: 'Helvetica',
    //     bold: 'Helvetica-Bold',
    //     italics: 'Helvetica-Oblique',
    //     bolditalics: 'Helvetica-BoldOblique'
    // },
    Times: {
        normal: 'public/assets/fonts/times/Times-Roman.ttf',
        bold: 'public/assets/fonts/times/Times-Bold.ttf',
        italics: 'public/assets/fonts/times/Times-Italic.ttf',
        bolditalics: 'public/assets/fonts/times/Times-BoldItalic.ttf'
    },
    // Symbol: {
    //     normal: 'Symbol'
    // },
    // ZapfDingbats: {
    //     normal: 'ZapfDingbats'
    // }

};
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
var PdfPrinter = require('pdfmake');
import product from "@/db/models/product";
import connectDb from "@/db/config";
var printer = new PdfPrinter(fonts);
var fs = require('fs');
export const CSV = () => {

    const filename = "pdf/saved_from_db.csv";
    const csvWriter = createCsvWriter({
        path: filename,
        header: [
            { id: 'name', title: 'Name' },
            { id: 'surname', title: 'Surname' },
            { id: 'age', title: 'Age' },
            { id: 'gender', title: 'Gender' },
        ]
    });


    const data = [
        {
            name: 'John',
            surname: 'Snow',
            age: 26,
            gender: 'M'
        }, {
            name: 'Clair',
            surname: 'White',
            age: 33,
            gender: 'F',
        }, {
            name: 'Fancy',
            surname: 'Brown',
            age: 78,
            gender: 'F'
        }
    ];
    csvWriter.writeRecords(data)       // returns a promise
        .then(() => {
            console.log('...Done');
        });
}
const mainExample = () => {
    var docDefinition = {
        // document metadata
        info: {
            title: 'awesome Document',
            author: 'john doe',
            subject: 'subject of document',
            keywords: 'keywords for document',
        },
        pageSize: 'A4',
        pageMargins: [50, 60, 50, 60],
        layout: {
            hLineWidth: function () {
                // Here you can use ternary operator or if condtions to change its value according to row and column
                return 0;
            },
            vLineWidth: function () {
                // Here you can use ternary operator or if condtions to change its value according to row and column
                return 0;
            }
        },
        footer: function (currentPage, pageCount) { return currentPage.toString() + ' of ' + pageCount; },
        header: function (currentPage, pageCount, pageSize) {
            // you can apply any logic and return any valid pdfmake element

            return [  //margin: [left, top, right, bottom]
                { text: 'simple text', alignment: (currentPage % 2) ? 'left' : 'right', margin: [50, 35, 50, 5] },
                { canvas: [{ type: 'rect', x: 170, y: 32, w: pageSize.width - 170, h: 40 }] }
            ]
        },
        content: [
            { text: 'Tables', style: 'header' },
            'Official documentation is in progress, this document is just a glimpse of what is possible with pdfmake and its layout engine.',
            { text: 'A simple table (no headers, no width specified, no spans, no styling)', style: 'subheader' },
            'The following table has nothing more than a body array',
            {
                style: 'tableExample',
                table: {
                    body: [
                        ['Column 1', 'Column 2', 'Column 3'],
                        ['One value goes here', 'Another one here', 'OK?']
                    ]
                }
            },
            { text: 'A simple table with nested elements', style: 'subheader' },
            'It is of course possible to nest any other type of nodes available in pdfmake inside table cells',
            {
                style: 'tableExample',
                table: {
                    body: [
                        ['Column 1', 'Column 2', 'Column 3'],
                        [
                            {
                                stack: [
                                    'Let\'s try an unordered list',
                                    {
                                        ul: [
                                            'item 1',
                                            'item 2'
                                        ]
                                    }
                                ]
                            },
                            [
                                'or a nested table',
                                {
                                    table: {
                                        body: [
                                            ['Col1', 'Col2', 'Col3'],
                                            ['1', '2', '3'],
                                            ['1', '2', '3']
                                        ]
                                    },
                                }
                            ],
                            {
                                text: [
                                    'Inlines can be ',
                                    { text: 'styled\n', italics: true },
                                    { text: 'easily as everywhere else', fontSize: 10 }]
                            }
                        ]
                    ]
                }
            },
            { text: 'Defining column widths', style: 'subheader' },
            'Tables support the same width definitions as standard columns:',
            {
                bold: true,
                ul: [
                    'auto',
                    'star',
                    'fixed value'
                ]
            },
            {
                style: 'tableExample',
                table: {
                    widths: [100, '*', 200, '*'],
                    body: [
                        ['width=100', 'star-sized', 'width=200', 'star-sized'],
                        ['fixed-width cells have exactly the specified width', { text: 'nothing interesting here', italics: true, color: 'gray' }, { text: 'nothing interesting here', italics: true, color: 'gray' }, { text: 'nothing interesting here', italics: true, color: 'gray' }]
                    ]
                }
            },
            {
                style: 'tableExample',
                table: {
                    widths: ['*', 'auto'],
                    body: [
                        ['This is a star-sized column. The next column over, an auto-sized column, will wrap to accomodate all the text in this cell.', 'I am auto sized.'],
                    ]
                }
            },
            {
                style: 'tableExample',
                table: {
                    widths: ['*', 'auto'],
                    body: [
                        ['This is a star-sized column. The next column over, an auto-sized column, will not wrap to accomodate all the text in this cell, because it has been given the noWrap style.', { text: 'I am auto sized.', noWrap: true }],
                    ]
                }
            },
            { text: 'Defining row heights', style: 'subheader' },
            {
                style: 'tableExample',
                table: {
                    heights: [20, 50, 70],
                    body: [
                        ['row 1 with height 20', 'column B'],
                        ['row 2 with height 50', 'column B'],
                        ['row 3 with height 70', 'column B']
                    ]
                }
            },
            'With same height:',
            {
                style: 'tableExample',
                table: {
                    heights: 40,
                    body: [
                        ['row 1', 'column B'],
                        ['row 2', 'column B'],
                        ['row 3', 'column B']
                    ]
                }
            },
            'With height from function:',
            {
                style: 'tableExample',
                table: {
                    heights: function (row) {
                        return (row + 1) * 25;
                    },
                    body: [
                        ['row 1', 'column B'],
                        ['row 2', 'column B'],
                        ['row 3', 'column B']
                    ]
                }
            },
            { text: 'Column/row spans', pageBreak: 'before', style: 'subheader' },
            'Each cell-element can set a rowSpan or colSpan',
            {
                style: 'tableExample',
                color: '#444',
                table: {
                    widths: [200, 'auto', 'auto'],
                    headerRows: 2,
                    // keepWithHeaderRows: 1,
                    body: [
                        [{ text: 'Header with Colspan = 2', style: 'tableHeader', colSpan: 2, alignment: 'center' }, {}, { text: 'Header 3', style: 'tableHeader', alignment: 'center' }],
                        [{ text: 'Header 1', style: 'tableHeader', alignment: 'center' }, { text: 'Header 2', style: 'tableHeader', alignment: 'center' }, { text: 'Header 3', style: 'tableHeader', alignment: 'center' }],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        [{ rowSpan: 3, text: 'rowSpan set to 3\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor' }, 'Sample value 2', 'Sample value 3'],
                        ['', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', { colSpan: 2, rowSpan: 2, text: 'Both:\nrowSpan and colSpan\ncan be defined at the same time' }, ''],
                        ['Sample value 1', '', ''],
                    ]
                }
            },
            { text: 'Headers', pageBreak: 'before', style: 'subheader' },
            'You can declare how many rows should be treated as a header. Headers are automatically repeated on the following pages',
            { text: ['It is also possible to set keepWithHeaderRows to make sure there will be no page-break between the header and these rows. Take a look at the document-definition and play with it. If you set it to one, the following table will automatically start on the next page, since there\'s not enough space for the first row to be rendered here'], color: 'gray', italics: true },
            {
                style: 'tableExample',
                table: {
                    headerRows: 1,
                    // dontBreakRows: true,
                    // keepWithHeaderRows: 1,
                    body: [
                        [{ text: 'Header 1', style: 'tableHeader' }, { text: 'Header 2', style: 'tableHeader' }, { text: 'Header 3', style: 'tableHeader' }],
                        [
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                        ]
                    ]
                }
            },
            { text: 'Styling tables', style: 'subheader' },
            'You can provide a custom styler for the table. Currently it supports:',
            {
                ul: [
                    'line widths',
                    'line colors',
                    'cell paddings',
                ]
            },
            'with more options coming soon...\n\npdfmake currently has a few predefined styles (see them on the next page)',
            { text: 'noBorders:', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8] },
            {
                style: 'tableExample',
                table: {
                    headerRows: 1,
                    body: [
                        [{ text: 'Header 1', style: 'tableHeader' }, { text: 'Header 2', style: 'tableHeader' }, { text: 'Header 3', style: 'tableHeader' }],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    ]
                },
                layout: 'noBorders'
            },
            { text: 'headerLineOnly:', fontSize: 14, bold: true, margin: [0, 20, 0, 8] },
            {
                style: 'tableExample',
                table: {
                    headerRows: 1,
                    body: [
                        [{ text: 'Header 1', style: 'tableHeader' }, { text: 'Header 2', style: 'tableHeader' }, { text: 'Header 3', style: 'tableHeader' }],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    ]
                },
                layout: 'headerLineOnly'
            },
            { text: 'lightHorizontalLines:', fontSize: 14, bold: true, margin: [0, 20, 0, 8] },
            {
                style: 'tableExample',
                table: {
                    headerRows: 1,
                    body: [
                        [{ text: 'Header 1', style: 'tableHeader' }, { text: 'Header 2', style: 'tableHeader' }, { text: 'Header 3', style: 'tableHeader' }],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    ]
                },
                layout: 'lightHorizontalLines'
            },
            { text: 'but you can provide a custom styler as well', margin: [0, 20, 0, 8] },
            {
                style: 'tableExample',
                table: {
                    headerRows: 1,
                    body: [
                        [{ text: 'Header 1', style: 'tableHeader' }, { text: 'Header 2', style: 'tableHeader' }, { text: 'Header 3', style: 'tableHeader' }],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    ]
                },
                layout: {
                    hLineWidth: function (i, node) {
                        return (i === 0 || i === node.table.body.length) ? 2 : 1;
                    },
                    vLineWidth: function (i, node) {
                        return (i === 0 || i === node.table.widths.length) ? 2 : 1;
                    },
                    hLineColor: function (i, node) {
                        return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
                    },
                    vLineColor: function (i, node) {
                        return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
                    },
                    // hLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
                    // vLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
                    // paddingLeft: function(i, node) { return 4; },
                    // paddingRight: function(i, node) { return 4; },
                    // paddingTop: function(i, node) { return 2; },
                    // paddingBottom: function(i, node) { return 2; },
                    // fillColor: function (rowIndex, node, columnIndex) { return null; }
                }
            },
            { text: 'zebra style', margin: [0, 20, 0, 8] },
            {
                style: 'tableExample',
                table: {
                    body: [
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    ]
                },
                layout: {
                    fillColor: function (rowIndex, node, columnIndex) {
                        return (rowIndex % 2 === 0) ? '#CCCCCC' : null;
                    }
                }
            },
            { text: 'handling fill color opacity...', margin: [0, 20, 0, 8] },
            { text: '... just hardcoding values in the second row', margin: [0, 20, 0, 8] },
            {
                style: 'tableExample',
                table: {
                    body: [
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        [
                            { text: 'Sample value 1', fillOpacity: 0.15, fillColor: 'blue' },
                            { text: 'Sample value 2', fillOpacity: 0.60, fillColor: 'blue' },
                            { text: 'Sample value 3', fillOpacity: 0.85, fillColor: 'blue' },
                        ],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3']
                    ]
                },
            },
            { text: '... using a custom styler and overriding it in the second row', margin: [0, 20, 0, 8] },
            {
                style: 'tableOpacityExample',
                table: {
                    body: [
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        [
                            { text: 'Sample value 1', fillOpacity: 0.15 },
                            { text: 'Sample value 2', fillOpacity: 0.60 },
                            { text: 'Sample value 3', fillOpacity: 0.85 },
                        ],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3']
                    ]
                },
            },
            { text: '... with a function (opacity at 0 means fully transparent, i.e no color)', margin: [0, 20, 0, 8] },
            {
                style: 'tableExample',
                table: {
                    body: [
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    ]
                },
                layout: {
                    fillColor: 'blue',
                    fillOpacity: function (rowIndex, node, columnIndex) {
                        return (rowIndex / 8 + columnIndex / 3);
                    }
                }
            },
            { text: 'and can be used dash border', margin: [0, 20, 0, 8] },
            {
                style: 'tableExample',
                table: {
                    headerRows: 1,
                    body: [
                        [{ text: 'Header 1', style: 'tableHeader' }, { text: 'Header 2', style: 'tableHeader' }, { text: 'Header 3', style: 'tableHeader' }],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    ]
                },
                layout: {
                    hLineWidth: function (i, node) {
                        return (i === 0 || i === node.table.body.length) ? 2 : 1;
                    },
                    vLineWidth: function (i, node) {
                        return (i === 0 || i === node.table.widths.length) ? 2 : 1;
                    },
                    hLineColor: function (i, node) {
                        return 'black';
                    },
                    vLineColor: function (i, node) {
                        return 'black';
                    },
                    hLineStyle: function (i, node) {
                        if (i === 0 || i === node.table.body.length) {
                            return null;
                        }
                        return { dash: { length: 10, space: 4 } };
                    },
                    vLineStyle: function (i, node) {
                        if (i === 0 || i === node.table.widths.length) {
                            return null;
                        }
                        return { dash: { length: 4 } };
                    },
                    // paddingLeft: function(i, node) { return 4; },
                    // paddingRight: function(i, node) { return 4; },
                    // paddingTop: function(i, node) { return 2; },
                    // paddingBottom: function(i, node) { return 2; },
                    // fillColor: function (i, node) { return null; }
                }
            },
            { text: 'Optional border', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8] },
            'Each cell contains an optional border property: an array of 4 booleans for left border, top border, right border, bottom border.',
            {
                style: 'tableExample',
                table: {
                    body: [
                        [
                            {
                                border: [false, true, false, false],
                                fillColor: '#eeeeee',
                                text: 'border:\n[false, true, false, false]'
                            },
                            {
                                border: [false, false, false, false],
                                fillColor: '#dddddd',
                                text: 'border:\n[false, false, false, false]'
                            },
                            {
                                border: [true, true, true, true],
                                fillColor: '#eeeeee',
                                text: 'border:\n[true, true, true, true]'
                            }
                        ],
                        [
                            {
                                rowSpan: 3,
                                border: [true, true, true, true],
                                fillColor: '#eeeeff',
                                text: 'rowSpan: 3\n\nborder:\n[true, true, true, true]'
                            },
                            {
                                border: undefined,
                                fillColor: '#eeeeee',
                                text: 'border:\nundefined'
                            },
                            {
                                border: [true, false, false, false],
                                fillColor: '#dddddd',
                                text: 'border:\n[true, false, false, false]'
                            }
                        ],
                        [
                            '',
                            {
                                colSpan: 2,
                                border: [true, true, true, true],
                                fillColor: '#eeffee',
                                text: 'colSpan: 2\n\nborder:\n[true, true, true, true]'
                            },
                            ''
                        ],
                        [
                            '',
                            {
                                border: undefined,
                                fillColor: '#eeeeee',
                                text: 'border:\nundefined'
                            },
                            {
                                border: [false, false, true, true],
                                fillColor: '#dddddd',
                                text: 'border:\n[false, false, true, true]'
                            }
                        ]
                    ]
                },
                layout: {
                    defaultBorder: false,
                }
            },
            'For every cell without a border property, whether it has all borders or not is determined by layout.defaultBorder, which is false in the table above and true (by default) in the table below.',
            {
                style: 'tableExample',
                table: {
                    body: [
                        [
                            {
                                border: [false, false, false, false],
                                fillColor: '#eeeeee',
                                text: 'border:\n[false, false, false, false]'
                            },
                            {
                                fillColor: '#dddddd',
                                text: 'border:\nundefined'
                            },
                            {
                                fillColor: '#eeeeee',
                                text: 'border:\nundefined'
                            },
                        ],
                        [
                            {
                                fillColor: '#dddddd',
                                text: 'border:\nundefined'
                            },
                            {
                                fillColor: '#eeeeee',
                                text: 'border:\nundefined'
                            },
                            {
                                border: [true, true, false, false],
                                fillColor: '#dddddd',
                                text: 'border:\n[true, true, false, false]'
                            },
                        ]
                    ]
                }
            },
            'And some other examples with rowSpan/colSpan...',
            {
                style: 'tableExample',
                table: {
                    body: [
                        [
                            '',
                            'column 1',
                            'column 2',
                            'column 3'
                        ],
                        [
                            'row 1',
                            {
                                rowSpan: 3,
                                colSpan: 3,
                                border: [true, true, true, true],
                                fillColor: '#cccccc',
                                text: 'rowSpan: 3\ncolSpan: 3\n\nborder:\n[true, true, true, true]'
                            },
                            '',
                            ''
                        ],
                        [
                            'row 2',
                            '',
                            '',
                            ''
                        ],
                        [
                            'row 3',
                            '',
                            '',
                            ''
                        ]
                    ]
                },
                layout: {
                    defaultBorder: false,
                }
            },
            {
                style: 'tableExample',
                table: {
                    body: [
                        [
                            {
                                colSpan: 3,
                                text: 'colSpan: 3\n\nborder:\n[false, false, false, false]',
                                fillColor: '#eeeeee',
                                border: [false, false, false, false]
                            },
                            '',
                            ''
                        ],
                        [
                            'border:\nundefined',
                            'border:\nundefined',
                            'border:\nundefined'
                        ]
                    ]
                }
            },
            {
                style: 'tableExample',
                table: {
                    body: [
                        [
                            { rowSpan: 3, text: 'rowSpan: 3\n\nborder:\n[false, false, false, false]', fillColor: '#eeeeee', border: [false, false, false, false] },
                            'border:\nundefined',
                            'border:\nundefined'
                        ],
                        [
                            '',
                            'border:\nundefined',
                            'border:\nundefined'
                        ],
                        [
                            '',
                            'border:\nundefined',
                            'border:\nundefined'
                        ]
                    ]
                }
            },
            { text: 'BorderColor per Cell with Column/row spans', pageBreak: 'before', style: 'subheader' },
            'Each cell-element can set the borderColor (the cell above or left of the current cell has priority',
            {
                style: 'tableExample',
                color: '#444',
                table: {
                    widths: [200, 'auto', 'auto'],
                    headerRows: 2,
                    // keepWithHeaderRows: 1,
                    body: [
                        [
                            {
                                text: 'Header with Colspan = 3',
                                style: 'tableHeader',
                                colSpan: 3,
                                borderColor: ['#ff00ff', '#00ffff', '#ff00ff', '#00ffff'],
                                alignment: 'center',
                            },
                            {},
                            {},
                        ],
                        [
                            {
                                text: 'Header 1',
                                style: 'tableHeader',
                                alignment: 'center',
                            },
                            {
                                text: 'Header 2',
                                style: 'tableHeader',
                                alignment: 'center',
                            },
                            {
                                text: 'Header 3',
                                style: 'tableHeader',
                                alignment: 'center',
                            },
                        ],
                        [
                            'Sample value 1',
                            'Sample value 2',
                            'Sample value 3',
                        ],
                        [
                            {
                                rowSpan: 3,
                                borderColor: ['#ff00ff', '#00ffff', '#ff00ff', '#00ffff'],
                                text: 'rowSpan set to 3\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor',
                            },
                            'Sample value 2',
                            {
                                text: 'Sample value 3',
                                borderColor: ['#ff00ff', '#00ffff', '#ff00ff', '#00ffff'],
                            },
                        ],
                        [
                            '',
                            'Sample value 2',
                            'Sample value 3',
                        ],
                        [
                            'Sample value 1',
                            'Sample value 2',
                            'Sample value 3',
                        ],
                        [
                            'Sample value 1',
                            {
                                colSpan: 2,
                                rowSpan: 2,
                                borderColor: ['#ff00ff', '#00ffff', '#ff00ff', '#00ffff'],
                                text: 'Both:\nrowSpan and colSpan\ncan be defined at the same time',
                            },
                            '',
                        ],
                        [
                            'Sample value 1',
                            {
                                text: 'a', borderColor: ['#ff00ff', '#00ffff', '#ff00ff', '#00ffff'],
                            },
                            {
                                text: '',
                                borderColor: ['#ff00ff', '#00ffff', '#ff00ff', '#00ffff'],
                            },
                        ],
                    ],
                },
            },
        ],
        styles: {
            header: {
                fontSize: 18,
                bold: true,
                margin: [0, 0, 0, 10]
            },
            subheader: {
                fontSize: 16,
                bold: true,
                margin: [0, 10, 0, 5]
            },
            tableExample: {
                margin: [0, 5, 0, 15]
            },
            tableOpacityExample: {
                margin: [0, 5, 0, 15],
                fillColor: 'blue',
                fillOpacity: 0.3
            },
            tableHeader: {
                bold: true,
                fontSize: 13,
                color: 'black'
            }
        },
    };






    var options = {
        bufferPages: true
    }

    return printer.createPdfKitDocument(docDefinition, options);
}

const LetterFormat = () => {
    const letterBody = {
        // document metadata
        info: {
            title: 'Letter Writing Tutorial',
            author: 'Adesh',
            subject: 'subject of document',
            keywords: 'keywords for document',
        },
        pageSize: 'A4',
        pageMargins: [50, 60, 50, 60],
        footer: function (currentPage, pageCount) {
            // return currentPage.toString() + ' of ' + pageCount;
            return [

                { text: currentPage.toString() + ' of ' + pageCount, alignment: 'center', fontSize: 10 }
            ]
        },
        header: function (currentPage, pageCount, pageSize) {
            // you can apply any logic and return any valid pdfmake element

            return [  //margin: [left, top, right, bottom]
                { text: 'Use in pdfmake on server-side', style: 'orgname' },
                { text: 'Use in pdfmake on server-side', style: 'orgaddress' },
                { canvas: [{ type: 'rect', x: 170, y: 32, w: pageSize.width - 170, h: 40 }] }
            ]
        },
        content: [
            { text: 'To,', bold: true, fontSize: 10 },
            { text: 'Organisation Manager', fontSize: 10 },
            { text: 'Organisation Address', fontSize: 10, },
            { text: 'Organisation Address', fontSize: 10, margin: [0, 0, 0, 15], },
            { text: 'Leave letter', margin: [0, 0, 15, 0], alignment: 'center', fontSize: 12, bold: true, },
            { text: 'Dear Sir,', margin: [0, 0, 0, 2], fontSize: 10, },
            {
                text: 'Official documentation is in progress, this document is just a glimpse of what is possible with pdfmake and its layout engine.Official documentation is in progress, this document is just a glimpse of what is possible with pdfmake and its layout engine. Official documentation is in progress, this document is just a glimpse of what is possible with pdfmake and its layout engine.Official documentation is in progress',
                alignment: 'justify', fontSize: 10,
            },
            { text: 'Detail', margin: [0, 10, 0, 0], fontSize: 10, bold: true, },
            {
                style: 'detailTable',
                table: {
                    widths: ['*', '*'],
                    body: [
                        [{ text: 'Column 1', style: 'tableHeader' }, { text: 'Column 2', style: 'tableHeader' }],
                        ['One value goes here', 'Another one here'],
                        ['One value goes here', 'Another one here'],
                        ['One value goes here', 'Another one here'],
                        ['One value goes here', 'Another one here'],
                        ['One value goes here', 'Another one here'],
                        ['One value goes here', 'Another one here'],
                        ['One value goes here', 'Another one here'],
                        ['One value goes here', 'Another one here']
                    ]
                }
            },
            { text: 'Detail 2', margin: [0, 10, 0, 0], fontSize: 10, bold: true, },
            {
                style: 'detailTable',
                table: {
                    widths: ['*', '*'],
                    body: [
                        [{ text: 'Column 1', style: 'tableHeader' }, { text: 'Column 2', style: 'tableHeader' }],
                        ['One value goes here', 'Another one here'],
                        ['One value goes here', 'Another one here'],
                        ['One value goes here', 'Another one here'],
                        ['One value goes here', 'Another one here'],
                        ['One value goes here', 'Another one here'],
                        ['One value goes here', 'Another one here'],
                        ['One value goes here', 'Another one here'],
                        ['One value goes here', 'Another one here'],
                        ['One value goes here', 'Another one here'],
                        ['One value goes here', 'Another one here'],
                        ['One value goes here', 'Another one here'],
                        ['One value goes here', 'Another one here'],
                        ['One value goes here', 'Another one here']
                    ]
                }
            },
            { text: 'Thanking You', margin: [0, 100, 0, 0], fontSize: 10, bold: true, },
            { text: 'Adesh kumar', margin: [0, 2, 0, 0], fontSize: 10, },
            { text: '', style: 'icon' }
        ],
        defaultStyle: {
            font: 'Times'
        },
        styles: {
            orgname: {
                fontSize: 15,
                bold: true,
                margin: [50, 5, 50, 3],
                alignment: 'center'
            },
            orgaddress: {
                fontSize: 13,

                margin: [50, 0, 50, 5],
                alignment: 'center'
            },
            detailTable: {
                margin: [0, 0, 0, 0],
                fontSize: 10,
                layout: 'noBorders'
            },
            tableHeader: {
                bold: true,
                fontSize: 10,
                bold: true,
                color: 'black',

            },
            icon: {
                font: 'Fontello',
                content: '800'
            }
        }
    }
    var options = {
        bufferPages: true
    }

    return printer.createPdfKitDocument(letterBody, options);
}
export default async function handler(req, res) {

    /* save file inside pdf folder start */
    // const filepath = fs.createWriteStream('pdf/document.pdf');    
    // pdfDoc.pipe(filepath);
    // pdfDoc.end();
    /* end save file inside pdf folder start */
    // const pdfDoc = mainExample();
    const pdfDoc = LetterFormat();
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
    pdfDoc.end();
}