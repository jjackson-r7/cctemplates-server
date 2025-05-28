"use strict";

// Set today's date on load
window.addEventListener("DOMContentLoaded", () => {
  const today = new Date().toISOString().split("T")[0];
  document.getElementById("dateReported").value = today;

  document.getElementById("copyButton").addEventListener("click", copyToClipboard);
  document.getElementById("resetButton").addEventListener("click", resetForm);
});

// Utility to format field output
function field(id, label) {
  const el = document.getElementById(id);
  const v = el ? el.value.trim() : "";
  return v ? `**${label}:**\n\`\`\`\n${v}\n\`\`\`\n` : "";
}

// Clipboard copy logic
function copyToClipboard() {
  try {
    const output =
      field("dateReported", "Date Reported") +
      field("problemStatement", "Problem Statement") +
      field("issueContext", "Issue Context") +
      field("environment", "Environment") +
      field("version", "PostgreSQL Version") +
      field("errorCategory", "Error Category") +
      field("logs", "Error Logs (Attach in Jira)") +
      field("additionalDetails", "Additional Details (Steps, Screenshots, etc.)") +
      field("requestedOutcome", "Requested Outcome from Engineering") +
      field("actionsTaken", "Actions Taken to Troubleshoot") +
      field("expectedBehavior", "Expected Behavior") +
      field("actualBehavior", "Actual Behavior");

    navigator.clipboard.writeText(output).then(() => {
      alert("Copied to clipboard. Ready to paste in Jira.");
      document.getElementById("myTooltip").innerText = "Copied!";

      fetch("/increment/dataWarehouse", { method: "POST" })
        .then(res => res.json())
        .then(data => console.log(data.message))
        .catch(err => console.error("Failed to update count:", err));
    });
  } catch (err) {
    console.error("Copy failed:", err);
    alert("Error occurred. Check the console.");
  }
}

// Reset tooltip
function outFunc() {
  document.getElementById("myTooltip").innerText = "Copy to clipboard";
}

// Reset all fields except the date
function resetForm() {
  document.querySelectorAll("textarea, input, select").forEach(el => {
    if (el.type !== "button" && el.id !== "dateReported") {
      el.value = "";
    }
  });
  outFunc();
}

// Sidebar support
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

