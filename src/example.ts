import { Catalog, ContentHandler, DOMBuilder, SAXParser, XMLAttribute, XMLElement } from 'typesxml';

// Custom ContentHandler to log element names
class LoggingContentHandler implements ContentHandler {
    initialize(): void {
        throw new Error('Method not implemented.');
    }
    setCatalog(catalog: Catalog): void {
        throw new Error('Method not implemented.');
    }
    startDocument(): void {
        throw new Error('Method not implemented.');
    }
    endDocument(): void {
        throw new Error('Method not implemented.');
    }
    xmlDeclaration(version: string, encoding: string, standalone: string): void {
        throw new Error('Method not implemented.');
    }
    internalSubset(declaration: string): void {
        throw new Error('Method not implemented.');
    }
    ignorableWhitespace(ch: string): void {
        throw new Error('Method not implemented.');
    }
    comment(ch: string): void {
        throw new Error('Method not implemented.');
    }
    processingInstruction(target: string, data: string): void {
        throw new Error('Method not implemented.');
    }
    startCDATA(): void {
        throw new Error('Method not implemented.');
    }
    endCDATA(): void {
        throw new Error('Method not implemented.');
    }
    startDTD(name: string, publicId: string, systemId: string): void {
        throw new Error('Method not implemented.');
    }
    endDTD(): void {
        throw new Error('Method not implemented.');
    }
    skippedEntity(name: string): void {
        throw new Error('Method not implemented.');
    }
    startElement(name: string, atts: XMLAttribute[]): void {
        console.log(`Start Element: ${name}`);
    }

    endElement(name: string): void {
        console.log(`End Element: ${name}`);
    }

    characters(ch: string): void {
        console.log(`Text: ${ch.trim()}`);
    }
}

export class Test {

    constructor() {
        try {
            let contentHandler: ContentHandler = new DOMBuilder();
            let xmlParser = new SAXParser();
            xmlParser.setContentHandler(contentHandler);

            // build the document from a file
            xmlParser.parseFile("test.xml");
            let doc = (contentHandler as DOMBuilder).getDocument();
            let root = doc.getRoot() as XMLElement;
            console.log(doc.toString());

            //  build the document again, this time from a string
            xmlParser.parseString(doc.toString());
            let newDoc = (contentHandler as DOMBuilder).getDocument();
            console.log(newDoc.toString());

        } catch (error: any) {
            if (error instanceof Error) {
                console.log(error.message);
            } else {
                console.log(error);
            }
        }
    }
}

// Example usage of LoggingContentHandler
// const xmlParser = new SAXParser();
// const loggingContentHandler = new LoggingContentHandler();
// xmlParser.setContentHandler(loggingContentHandler);

// // build the document from a file
// const xmlString = `
//     <bookstore>
//         <book>
//             <title>TypeScript Basics</title>
//             <author>John Doe</author>
//             <price>29.99</price>
//         </book>
//     </bookstore>
// `;
// xmlParser.parseString(xmlString);

new Test();