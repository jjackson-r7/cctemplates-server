"use strict";

function myFunction() {
  const field = (id, label) => {
    const el = document.getElementById(id);
    const v = el ? el.value.trim() : "";
    return v ? `**${label}:**\n\`\`\`\n${v}\n\`\`\`\n` : "";
  };

  const boolField = (id, labelTrue, labelFalse) => {
    return document.getElementById(id).checked
      ? `✅ ${labelTrue}`
      : `❌ ${labelFalse}`;
  };

  const output =
    field("orgID", "Org ID") +
    field("agentID", "Agent ID") +
    field("region", "Region") +
    field("summary", "Summary") +
    field("disputeProof", "Proof Disputing Finding") +
    field("xmlreport", "XML Report Proof") +
    field("farnsworth", "Farnsworth") +
    field("actionsTakenToTroubleshoot", "Actions Taken to Troubleshoot") +
    field("expectedBehavior", "Expected Behavior") +
    field("actualBehavior", "Actual Behavior") +
    field("requestedOutcomeFromEngineering", "Requested Outcome from Engineering") +
    boolField("agentlogchk", "Agent Logs attached", "Agent Logs not attached") + "\n" +
    boolField("xmlreportchk", "XML Report attached", "XML Report not attached") + "\n" +
    boolField("proofchk", "Screenshot/Proof attached", "Screenshot/Proof not attached");

  navigator.clipboard.writeText(output).then(() => {
    document.getElementById("myTooltip").innerText = "Copied!";
    alert("Copied to clipboard. Ready to paste in Jira.");
    fetch("/increment/agentFalse", { method: "POST" });
  }).catch(err => {
    console.error("Clipboard copy failed:", err);
    alert("Error copying text.");
  });
}

function outFunc() {
  document.getElementById("myTooltip").innerText = "Copy to clipboard";
}

function resetForm() {
  document.querySelectorAll("textarea, input[type=text]").forEach(el => {
    if (el.type !== "button") el.value = "";
  });
  document.querySelectorAll("input[type=checkbox]").forEach(cb => cb.checked = false);
  outFunc();
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("copyButton").addEventListener("click", myFunction);
  document.getElementById("resetButton").addEventListener("click", resetForm);
});

// nav toggle support
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

