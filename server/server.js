const express = require("express");
const cors = require("cors");
const fs = require("fs");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

if (cors) {
    console.log('Enabling cors...');
    app.use(cors({
        origin: true, // Allow requests from this origin
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Specify allowed HTTP methods
        allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
    }));
}
// Middleware to parse XML data
app.use(bodyParser.text({ type: "application/xml" }));

// Endpoint to serve a test XML file
app.get("/api/receive-xml", (req, res) => {
    const xmlData = `
        <note>
            <to>Tove</to>
            <from>Jani</from>
            <heading>Reminder</heading>
            <body>Don't forget me this weekend!</body>
        </note>`;
    res.set("Content-Type", "application/xml");
    res.send(xmlData);
});

// Endpoint to receive XML data
app.post("/api/post-xml", (req, res) => {
    const receivedXml = req.body;
    console.log("Received XML:", receivedXml);
    res.send("XML received successfully.");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
