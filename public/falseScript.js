"use strict";

function myFunction() {
  try {
    const field = (id, label) => {
      const value = document.getElementById(id)?.value.trim();
      return value ? `**${label}:**\n\`\`\`\n${value}\n\`\`\`\n` : "";
    };

    const box = (id, label) => field(id, label);

    const output =
      box("summarySI", "Summary") +
      box("disputeProof", "Proof of Non-Vulnerable / Vulnerable Status") +
      box("engineInfo", "Engine Info - Version from scan.log") +
      box("asset", "Asset Info") +
      box("systemfingerprint", "System Fingerprint (Certainty=1.0)") +
      box("elevatedperm", "Permission Elevation") +
      box("softwarefingerprint", "Software Fingerprint (If applicable)") +
      box("vulnfindings", "Vulnerability Finding (scan log)") +
      box("xmlreport", "XML Report Proof") +
      box("Guenter", "Guenter") +
      box("jirasearch", "Jira/Internet Search Results") +
      box("actionsTakenToTroubleshoot", "Actions Taken to Troubleshoot") +
      box("expectedBehavior", "Expected Behavior") +
      box("actualBehavior", "Actual Behavior") +
      box("requestedOutcomeFromEngineering", "Requested Outcome from Engineering") +
      (document.getElementById("scanlogchk").checked
        ? "**Scan Logs with enhanced logging is attached to the case**\n"
        : "**Scan Logs with enhanced logging is not attached to the case**\n") +
      (document.getElementById("xmlreportchk").checked
        ? "**XML Report is attached to the case**\n"
        : "**XML Report is not attached to the case**\n") +
      (document.getElementById("proofchk").checked
        ? "**Screenshot / Proof is attached to the case**\n"
        : "**Screenshot / Proof is not attached to the case**\n");

    navigator.clipboard.writeText(output).then(() => {
      document.getElementById("myTooltip").innerText = "Copied!";
      alert("Copied to clipboard. Ready to paste in Jira.");
      fetch("/increment/falsePN", { method: "POST" }).catch(e => console.error("Metric update failed:", e));
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

