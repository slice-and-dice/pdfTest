const PdfPrinter = require("pdfmake/src/printer");
var fs = require("fs");
var path = require("path");

var docDefinition = {
  content: [
    {
      canvas: [
        {
          type: "rect",
          x: 1,
          y: 1,
          w: 505,
          h: 185,
          r: 4,
          color: "#28a197",
          alignment: "center"
        }
      ]
    },
    {
      text: [
        { text: "Your unique food business ", color: "white", fontSize: 36 },
        { text: "registration number is", color: "white", fontSize: 36 }
      ],
      absolutePosition: { x: 30, y: 60 },
      alignment: "center"
    },
    {
      text: "F3KEQE - G6JESF - QKMNFN",
      absolutePosition: { x: 30, y: 150 },
      color: "white",
      fontSize: 36,
      bold: true,
      alignment: "center"
    },
    "\n\n\n\n",
    {
      style: "bigger",
      text: "Operator details",
      bold: true
    },
    {
      canvas: [
        {
          type: "rect",
          x: 1,
          y: 1,
          w: 505,
          h: 1,
          color: "#808080"
        }
      ]
    },
    "\n",
    {
      style: "bigger",
      columns: [
        {
          width: "*",
          text: "Operator type"
        },
        {
          width: "*",
          style: "header",
          text: "Sole trader"
        }
      ]
    },
    "\n",
    {
      canvas: [
        {
          type: "rect",
          x: 1,
          y: 1,
          w: 505,
          h: 1,
          color: "#808080"
        }
      ]
    },
    "\n",
    {
      style: "bigger",
      columns: [
        {
          width: "*",
          text: "Operator address"
        },
        {
          width: "*",
          style: "header",
          text: "Manor Farm Barns \n Fox Road \n Norwich \n NR14 7PZ"
        }
      ]
    },
    "\n",
    {
      canvas: [
        {
          type: "rect",
          x: 1,
          y: 1,
          w: 505,
          h: 1,
          color: "#808080"
        }
      ]
    }
  ],
  styles: {
    header: {
      bold: true
    },
    bigger: {
      fontSize: 19
    }
  },

  defaultStyle: {
    columnGap: 20,
    fontSize: 6
  }
};

var fontDescriptors = {
  Roboto: {
    normal: path.join(__dirname, "..", "pdfTest", "/fonts/Roboto-Regular.ttf"),
    bold: path.join(__dirname, "..", "pdfTest", "/fonts/Roboto-Medium.ttf"),
    italics: path.join(__dirname, "..", "pdfTest", "/fonts/Roboto-Italic.ttf"),
    bolditalics: path.join(
      __dirname,
      "..",
      "pdfTest",
      "/fonts/Roboto-MediumItalic.ttf"
    )
  }
};
const printer = new PdfPrinter(fontDescriptors);

var pdfDoc = printer.createPdfKitDocument(docDefinition);
pdfDoc.pipe(fs.createWriteStream("basics.pdf"));
pdfDoc.end();

// app.listen(3002, () => console.log(`App running i on http://localhost:3002`));
