"use strict";

function myFunction() {
    try {
        // --- Helper function to create an HTML paragraph with a bolded label ---
        // It also handles converting plain text newlines into HTML <br> tags
        const createHtmlParagraph = (label, value) => {
            if (!value) return ""; // Return empty string if no value
            // Escape HTML characters to prevent issues, then replace newlines with <br>
            const escapedValue = value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
            return `<p><b>${label}:</b></p><pre style="white-space: pre-wrap; margin: 0; font-family: inherit;">${escapedValue}</pre>`;
        };

        // --- Build the HTML output string ---
        let outputHtml = "";
        outputHtml += createHtmlParagraph("Summary", document.getElementById("summarySI")?.value.trim());
        outputHtml += createHtmlParagraph("Proof of Non-Vulnerable / Vulnerable Status", document.getElementById("disputeProof")?.value.trim());
        outputHtml += createHtmlParagraph("Engine Info - Version from scan.log", document.getElementById("engineInfo")?.value.trim());
        outputHtml += createHtmlParagraph("Asset Info", document.getElementById("asset")?.value.trim());
        outputHtml += createHtmlParagraph("System Fingerprint (Certainty=1.0)", document.getElementById("systemfingerprint")?.value.trim());
        outputHtml += createHtmlParagraph("Permission Elevation", document.getElementById("elevatedperm")?.value.trim());
        outputHtml += createHtmlParagraph("Software Fingerprint (If applicable)", document.getElementById("softwarefingerprint")?.value.trim());
        outputHtml += createHtmlParagraph("Vulnerability Finding (scan log)", document.getElementById("vulnfindings")?.value.trim());
        outputHtml += createHtmlParagraph("XML Report Proof", document.getElementById("xmlreport")?.value.trim());

        // --- Special Handling for the Guenter Hyperlink ---
        const guenterUrl = document.getElementById('Guenter')?.value.trim();
        if (guenterUrl) {
            // Sanitize URL to prevent XSS before creating the link
            const sanitizedUrl = encodeURI(guenterUrl);
            outputHtml += `<p><b>Guenter:</b> <a href="${sanitizedUrl}">${guenterUrl}</a></p>`;
        }

        outputHtml += createHtmlParagraph("Jira/Internet Search Results", document.getElementById("jirasearch")?.value.trim());
        outputHtml += createHtmlParagraph("Actions Taken to Troubleshoot", document.getElementById("actionsTakenToTroubleshoot")?.value.trim());
        outputHtml += createHtmlParagraph("Expected Behavior", document.getElementById("expectedBehavior")?.value.trim());
        outputHtml += createHtmlParagraph("Actual Behavior", document.getElementById("actualBehavior")?.value.trim());
        outputHtml += createHtmlParagraph("Requested Outcome from Engineering", document.getElementById("requestedOutcomeFromEngineering")?.value.trim());
        
        // --- Checkbox Handling ---
        outputHtml += `<p><b>${document.getElementById("scanlogchk").checked ? "Scan Logs with enhanced logging is attached to the case" : "Scan Logs with enhanced logging is not attached to the case"}</b></p>`;
        outputHtml += `<p><b>${document.getElementById("xmlreportchk").checked ? "XML Report is attached to the case" : "XML Report is not attached to the case"}</b></p>`;
        outputHtml += `<p><b>${document.getElementById("proofchk").checked ? "Screenshot / Proof is attached to the case" : "Screenshot / Proof is not attached to the case"}</b></p>`;

        // --- Rich Text Copy Logic ---
        const hiddenArea = document.getElementById('hidden-copy-area');
        hiddenArea.innerHTML = outputHtml; // Put the HTML into our hidden div

        const range = document.createRange();
        range.selectNodeContents(hiddenArea);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);

        const successful = document.execCommand('copy');
        
        selection.removeAllRanges(); // Clean up the selection
        hiddenArea.innerHTML = ""; // Clear the hidden area

        if (successful) {
            document.getElementById("myTooltip").innerText = "Copied!";
            alert("Copied to clipboard. Ready to paste in Jira.");
            fetch("/increment/falsePN", { method: "POST" }).catch(e => console.error("Metric update failed:", e));
        } else {
            throw new Error('Copy command was not successful.');
        }

    } catch (err) {
        console.error("Copy failed:", err);
        alert("Error occurred. Check the console.");
    }
}

function outFunc() {
  document.getElementById("myTooltip").innerText = "Copy to clipboard";
}

function resetForm() {
  document.querySelectorAll("textarea, input").forEach(el => {
    if (el.id !== "dateReported") el.value = el.type === "checkbox" ? false : "";
  });
  outFunc();
}

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
