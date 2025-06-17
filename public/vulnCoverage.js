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
      field("summary", "Summary / High-level Overview") +
      field("cves", "CVE(s) Affected") +
      field("references", "References") +
      field("expectedBehavior", "Expected Behavior / Detection Request") +
      field("testingVerification", "Testing & Verification") +
      field("urgencyImpact", "Urgency / Business Impact") +
      field("attachments", "Attachments") +
      field("actionItems", "Requested Action Items from Content PM");

    navigator.clipboard.writeText(output).then(() => {
      alert("Copied to clipboard. Ready to paste in Jira.");
      document.getElementById("myTooltip").innerText = "Copied!";

      // Track usage
      fetch("/increment/vulnCoverage", { method: "POST" })
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
