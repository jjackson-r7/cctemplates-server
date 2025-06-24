"use strict";

function myFunction() {
  try {
    const field = (id, label) => {
      const el = document.getElementById(id);
      const value = el ? el.value.trim() : "";
      return value ? `**${label}:**\n\`\`\`\n${value}\n\`\`\`\n` : "";
    };

    const boolField = (id, yes, no) =>
      document.getElementById(id).checked ? `**${yes}**` : `**${no}**`;

    const output =
      field("orgID", "Org Information") +
      field("reporttype", "Report Type") +
      field("summary", "Problem Statement") +
      field("troubleshoot", "Actions Taken to Troubleshoot") +
      field("expectedBehavior", "Expected Behavior") +
      field("requestedOutcomeFromEngineering", "Requested Outcome from Engineering") + "\n" +
      boolField("errorchk", "Screenshot of SSO Error is attached", "Screenshot of SSO Error is not attached") + "\n" +
      boolField("harchk", "SAML Response/HAR is attached", "SAML Response/HAR is not attached") + "\n" +
      boolField("proofchk", "Screenshots of IDP Configuration setup are attached", "Screenshots of IDP Configuration setup are not attached");

    navigator.clipboard.writeText(output).then(() => {
      document.getElementById("myTooltip").innerText = "Copied!";
      alert("Copied to clipboard. Ready to paste in Jira.");

      fetch("/increment/PlatformSSO", { method: "POST" })
        .then(res => res.json())
        .then(data => console.log(data.message))
        .catch(err => console.error("Metric update failed:", err));
    });
  } catch (err) {
    console.error("Copy failed:", err);
    alert("Error occurred. Check the console.");
  }
}

function outFunc() {
  document.getElementById("myTooltip").innerText = "Copy to clipboard";
}

function resetForm() {
  document.querySelectorAll("textarea, input[type='text'], input[type='checkbox']").forEach(el => {
    if (el.type === "checkbox") el.checked = false;
    else if (el.id !== "dateReported") el.value = "";
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

