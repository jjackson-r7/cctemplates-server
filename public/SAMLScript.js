"use strict";

function myFunction() {
  const field = (id, label) => {
    const el = document.getElementById(id);
    const value = el ? el.value : "";
    return value ? `**${label}:**\n\`\`\`\n${value}\n\`\`\`\n` : "";
  };

  const check = (id, label, yes, no) => {
    const el = document.getElementById(id);
    return `**${label}:** ${el && el.checked ? yes : no}`;
  };

  const output =
    field("descriptionSI", "Problem Statement") +
    field("responseinfo", "SAML Response Output") +
    field("authinfo", "SAML Debug Auth.log") +
    field("actionsTakenToTroubleshoot", "Actions Taken to Troubleshoot") +
    field("expectedBehavior", "Expected Behavior") +
    field("requestedOutcomeFromEngineering", "Requested Outcome from Engineering") + "\n" +
    check("logchk", "Console Support Package", "Attached", "Not Attached") + "\n" +
    check("responsechk", "SAML Response", "Attached", "Not Attached") + "\n" +
    check("proofchk", "IDP Screenshots", "Attached", "Not Attached");

  navigator.clipboard.writeText(output)
    .then(() => {
      document.getElementById("myTooltip").innerText = "Copied!";
      alert("Copied to clipboard. Ready to paste in Jira.");

      fetch("/increment/SAMLConsole", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({})
      }).catch(err => console.error("Metrics update failed:", err));
    })
    .catch(err => {
      console.error("Copy failed:", err);
      alert("Error occurred. Check the console.");
    });
}

function outFunc() {
  document.getElementById("myTooltip").innerText = "Copy to clipboard";
}

function resetForm() {
  document.querySelectorAll("textarea, input").forEach(el => {
    if (el.type !== "button") el.value = "";
    if (el.type === "checkbox") el.checked = false;
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

