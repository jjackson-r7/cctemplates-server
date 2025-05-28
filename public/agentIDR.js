"use strict";

// Pre-fill today's date in the Date Reported field
window.addEventListener("DOMContentLoaded", () => {
  const today = new Date().toISOString().split("T")[0];
  document.getElementById("dateReported").value = today;
});

// Build and copy the markdown template, fire the increment POST, and alert
function myFunction() {
  try {
    const field = (id, label) => {
      const el = document.getElementById(id);
      const v = el ? el.value.trim() : "";
      return v
        ? `**${label}:**\n\`\`\`\n${v}\n\`\`\`\n`
        : "";
    };

    const output =
      field("dateReported", "Date Reported") +
      field("problemStatement", "Problem Statement") +
      field("issueContext", "Issue Context") +
      field("agentID", "Agent ID") +
      field("agentLogs", "Agent Logs (Attach in Jira)") +
      field("additionalEvidence", "Additional Evidence") +
      field("actionsTakenToTroubleshoot", "Actions Taken to Troubleshoot") +
      field("stepsToReproduce", "Steps to Reproduce") +
      field("expectedBehavior", "Expected Behavior") +
      field("actualBehavior", "Actual Behavior") +
      field("requestedOutcomeFromEngineering", "Requested Outcome from Engineering");

    // Copy to clipboard
    navigator.clipboard.writeText(output).then(() => {
      // Show alert
      alert("Copied to clipboard. Ready to paste in Jira.");

      // Update tooltip
      document.getElementById("myTooltip").innerText = "Copied!";

      // Increment counter 
      fetch(`/increment/agentIDR`, { method: "POST" })
        .then(r => r.json())
        .then(d => console.log(d.message))
        .catch(e => console.error("Count update failed:", e));
    });
  } catch (err) {
    console.error("Copy failed:", err);
    alert("Error occurred. Check the console.");
  }
}

// Restore tooltip text on mouseout
function outFunc() {
  document.getElementById("myTooltip").innerText = "Copy to clipboard";
}

// Clear all inputs (except date)
function resetForm() {
  document.querySelectorAll("textarea, input").forEach(el => {
    if (el.id !== "dateReported") el.value = "";
  });
  outFunc();
}

// Wire up buttons
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("copyButton").addEventListener("click", myFunction);
  document.getElementById("resetButton").addEventListener("click", resetForm);
});

// Sidebar toggle (nav.js expects these)
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

