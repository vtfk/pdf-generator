(async () => {
  const PDFGenerator = require('../lib/pdfgenerator');
  const fs = require('fs');

  const validHTML = fs.readFileSync('./data/validHTML.html', 'utf-8');
  const invalidHTML = fs.readFileSync('./data/validHTML.html', 'utf-8');

  const base64 = await PDFGenerator.GeneratePDFfromHTML(invalidHTML);

  console.log('== File ==');
  console.log(invalidHTML);

  console.log('== Base64 ==');
  console.log(base64);
})()
