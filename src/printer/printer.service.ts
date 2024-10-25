import { Injectable } from '@nestjs/common';

import pdfPrinter from 'pdfmake'
import { BufferOptions, TDocumentDefinitions } from 'pdfmake/interfaces';

const fontDescriptions = {
  Roboto: {
    normal: 'fonts/Roboto-Regular.ttf',
    bold: 'fonts/Roboto-Bold.ttf',
    italics: 'fonts/Roboto-Italic.ttf',
    bolditalics: 'fonts/Roboto-BoldItalic.ttf',
  },
}


@Injectable()
export class PrinterService {

  private readonly _printer: pdfPrinter = new pdfPrinter(fontDescriptions);


  createPdf(docDefinition: TDocumentDefinitions, options: BufferOptions = {}): PDFKit.PDFDocument {

    return this._printer.createPdfKitDocument(docDefinition, options);

  }
}
