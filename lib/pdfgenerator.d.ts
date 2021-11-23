export = PDFGenerator;
/**
 * Generates PDF documents
 */
declare class PDFGenerator {
    /**
     *
     * @param {string} contentHTML The PDF content formatted as HTML
     * @param {function} pdfmakeDefinition pdfmake document definition (https://pdfmake.github.io/docs/0.1/document-definition-object/)
     * @param {object} pdfmakeStyle pdfmake document style (https://pdfmake.github.io/docs/0.1/document-definition-object/styling/)
     * @param {object} data A data object that might be used to replace placeholders in the pdfmakeDefinition
     * @returns Returns the PDF document in Base64 encoding
     */
    static GeneratePDFfromHTML(contentHTML: string, pdfmakeDefinition?: Function, pdfmakeStyle?: object, data?: object): Promise<any>;
}
