const PDFGenerator = require('../lib/pdfgenerator');
const fs = require('fs');

describe('Generate PDF Document from HTML', () => {
  const html = fs.readFileSync('./tests/data/validHTML.html', 'utf-8');
  test('Generate from valid HTML', async () => {
    const PDF = PDFGenerator.GeneratePDFfromHTML(html);
    expect(PDF).not.toBeFalsy();
  })
})
