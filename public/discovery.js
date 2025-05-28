"use strict";

// Populate today's date
window.addEventListener("DOMContentLoaded", () => {
  const today = new Date().toISOString().split("T")[0];
  document.getElementById("dateReported").value = today;

  document.getElementById("copyButton").addEventListener("click", copyTemplate);
  document.getElementById("resetButton").addEventListener("click", resetForm);
});

function copyTemplate() {
  try {
    const field = (id, label) => {
      const el = document.getElementById(id);
      const value = el?.value.trim() || "";
      return value ? `**${label}:**\n\`\`\`\n${value}\n\`\`\`\n` : "";
    };

    const output =
      field("dateReported", "Date Reported") +
      field("problemStatement", "Problem Statement") +
      field("issueContext", "Issue Context") +
      field("connectionName", "Discovery Connection Name") +
      field("engineDetails", "Engine Name and UUID") +
      field("targetRange", "Target IP/Range/Subnet") +
      field("scanTemplate", "Scan Template Used") +
      field("connectionOutput", "Connection Test Output") +
      field("credentialDetails", "Credential Type and ID") +
      field("logsInfo", "Logs (Attach in Jira)") +
      field("additionalEvidence", "Additional Evidence (Configs, PCAPs, Screenshots)") +
      field("actionsTaken", "Actions Taken to Troubleshoot") +
      field("expectedBehavior", "Expected Behavior") +
      field("actualBehavior", "Actual Behavior") +
      field("requestedOutcome", "Requested Outcome from Engineering");

    navigator.clipboard.writeText(output).then(() => {
      alert("Copied to clipboard. Ready to paste in Jira.");
      document.getElementById("myTooltip").innerText = "Copied!";

      // Track usage
      fetch("/increment/discovery", { method: "POST" })
        .then((res) => res.json())
        .then((data) => console.log(data.message))
        .catch((err) => console.error("Count update failed:", err));
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
  document.querySelectorAll("textarea, input").forEach((el) => {
    if (el.id !== "dateReported") el.value = "";
  });
  outFunc();
}

