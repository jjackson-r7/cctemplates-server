"use strict";

function myFunction() {
    try {
        // --- Helper function to create an HTML paragraph with a bolded label ---
        const createHtmlParagraph = (label, value) => {
            if (!value) return "";
            // Escape HTML characters to prevent issues
            const escapedValue = value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
            // Use <pre> tag to respect newlines and spacing from the textarea
            return `<p><b>${label}:</b></p><pre style="white-space: pre-wrap; margin: 0; font-family: inherit;">${escapedValue}</pre>`;
        };

        // --- Helper function for checkboxes ---
        const createCheckboxParagraph = (isChecked, trueText) => {
             const checkMark = isChecked ? '✅' : '❌';
             const text = isChecked ? `${trueText} is attached to the case` : `${trueText} is not attached to the case`;
             return `<p>${checkMark} <b>${text}</b></p>`;
        };

        // --- Build the HTML output string ---
        let outputHtml = "";
        outputHtml += createHtmlParagraph("Org ID", document.getElementById("orgID")?.value.trim());
        outputHtml += createHtmlParagraph("Agent ID", document.getElementById("agentID")?.value.trim());
        outputHtml += createHtmlParagraph("Region", document.getElementById("region")?.value.trim());
        outputHtml += createHtmlParagraph("Summary", document.getElementById("summary")?.value.trim());
        outputHtml += createHtmlParagraph("Proof Disputing Finding", document.getElementById("disputeProof")?.value.trim());
        outputHtml += createHtmlParagraph("Vulnerability Results (Agent Assessment or XML Report Proof)", document.getElementById("xmlreport")?.value.trim());

        // --- Special Handling for the Guenter Hyperlink ---
        const guenterUrl = document.getElementById('guenter')?.value.trim();
        if (guenterUrl) {
            // Very basic check if it looks like a URL
            if (guenterUrl.startsWith('http://') || guenterUrl.startsWith('https://')) {
                 const sanitizedUrl = encodeURI(guenterUrl);
                 outputHtml += `<p><b>Guenter:</b> <a href="${sanitizedUrl}">${guenterUrl}</a></p>`;
            } else {
                // If it's not a URL, treat it as plain text
                 outputHtml += createHtmlParagraph("Guenter", guenterUrl);
            }
        }

        outputHtml += createHtmlParagraph("Actions Taken to Troubleshoot", document.getElementById("actionsTakenToTroubleshoot")?.value.trim());
        outputHtml += createHtmlParagraph("Expected Behavior", document.getElementById("expectedBehavior")?.value.trim());
        outputHtml += createHtmlParagraph("Actual Behavior", document.getElementById("actualBehavior")?.value.trim());
        outputHtml += createHtmlParagraph("Requested Outcome from Engineering", document.getElementById("requestedOutcomeFromEngineering")?.value.trim());
        
        // --- Checkbox Handling ---
        outputHtml += createCheckboxParagraph(document.getElementById("agentlogchk").checked, "Agent Logs");
        outputHtml += createCheckboxParagraph(document.getElementById("xmlreportchk").checked, "XML Report");
        outputHtml += createCheckboxParagraph(document.getElementById("proofchk").checked, "Screenshot/Proof");

        // --- Rich Text Copy Logic ---
        const hiddenArea = document.getElementById('hidden-copy-area');
        hiddenArea.innerHTML = outputHtml;

        const range = document.createRange();
        range.selectNodeContents(hiddenArea);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);

        const successful = document.execCommand('copy');
        
        selection.removeAllRanges();
        hiddenArea.innerHTML = "";

        if (successful) {
            document.getElementById("myTooltip").innerText = "Copied!";
            alert("Copied to clipboard. Ready to paste in Jira.");
            fetch("/increment/agentFalse", { method: "POST" }).catch(e => console.error("Metric update failed:", e));
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

// Added resetForm function for the Reset button
function resetForm() {
  document.querySelectorAll("textarea, input").forEach(el => {
    if (el.type === 'textarea' || el.type === 'text') {
        el.value = "";
    } else if (el.type === 'checkbox') {
        el.checked = false;
    }
  });
  outFunc();
}

// Added nav functions to prevent errors if nav.js isn't present
function openNav() {
  const sidebar = document.getElementById("mySidebar");
  const main = document.getElementById("main");
  if (sidebar) sidebar.style.width = "250px";
  if (main) main.style.marginLeft = "250px";
}

function closeNav() {
  const sidebar = document.getElementById("mySidebar");
  const main = document.getElementById("main");
  if (sidebar) sidebar.style.width = "0";
  if (main) main.style.marginLeft = "0";
}
