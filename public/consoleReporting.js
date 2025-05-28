"use strict";

// Set the current date on page load
window.addEventListener("DOMContentLoaded", () => {
  const today = new Date().toISOString().split("T")[0];
  document.getElementById("dateReported").value = today;

  document.getElementById("copyButton").addEventListener("click", copyToClipboard);
  document.getElementById("resetButton").addEventListener("click", resetForm);
});

function field(id, label) {
  const el = document.getElementById(id);
  const val = el ? el.value.trim() : "";
  return val ? `**${label}:**\n\`\`\`\n${val}\n\`\`\`\n` : "";
}

function copyToClipboard() {
  try {
    const output =
      field("dateReported", "Date Reported") +
      field("environment", "Environment") +
      field("reportType", "Report Type") +
      field("errorCategory", "Error Category") +
      field("issueContext", "Issue Context") +
      field("errorLogs", "Error Logs (Attach in Jira)") +
      field("additionalDetails", "Additional Details (Steps, Screenshots, etc.)") +
      field("actionsTaken", "Actions Taken to Troubleshoot") +
      field("expectedBehavior", "Expected Behavior") +
      field("actualBehavior", "Actual Behavior") +
      field("requestedOutcome", "Requested Outcome from Engineering");

    navigator.clipboard.writeText(output).then(() => {
      alert("Copied to clipboard. Ready to paste in Jira.");
      document.getElementById("myTooltip").innerText = "Copied!";

      fetch("/increment/consoleReporting", { method: "POST" })
        .then(res => res.json())
        .then(data => console.log(data.message))
        .catch(err => console.error("Count update failed:", err));
    });
  } catch (err) {
    console.error("Copy failed:", err);
    alert("Error occurred. Check the console.");
  }
}

function resetForm() {
  document.querySelectorAll("textarea, input, select").forEach(el => {
    if (el.type !== "button" && el.id !== "dateReported") el.value = "";
  });
  outFunc();
}

function outFunc() {
  document.getElementById("myTooltip").innerText = "Copy to clipboard";
}

// Sidebar nav support
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

