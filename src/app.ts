import { Test } from "./example";

document.addEventListener("DOMContentLoaded", async () => {
    const form = document.getElementById("xmlForm") as HTMLFormElement;
    const xmlInput = document.getElementById("xmlInput") as HTMLTextAreaElement;
    const xmlOutput = document.getElementById("xmlOutput") as HTMLTextAreaElement;

    // Load XML data from the server on page load
    try {
        const response = await fetch("http://localhost:3000/api/receive-xml", {
            method: "GET",
            headers: {
                "Accept": "application/xml",
            }
        });

        if(response.ok) {
            const xmlData = await response.text();
            xmlInput.value = xmlData;
        }
        new Test();
    } catch (error) {
        console.log("Error fetching XML data:", error);
    }

    // Handle form submission - send XML data to the server
    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const xmlData = xmlInput.value.trim();
        if (!xmlData) {
            alert("Please enter valid XML.");
            return;
        }
        console.log("XML Data", xmlData);

        try {
            const response = await fetch("http://localhost:3000/api/post-xml", {
                method: "POST",
                headers: {
                    "Content-Type": "application/xml",
                },
                body: xmlData,
            });

            if (!response.ok) {
                throw new Error(`Server error: ${response.status}`);
            }

            const responseText = await response.text();
            xmlOutput.value = responseText;
        } catch (error: any) {
            xmlOutput.value = `Error: ${error}`;
        }
    });
});
