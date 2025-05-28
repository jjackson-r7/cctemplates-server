"use strict";

window.addEventListener("DOMContentLoaded", () => {
  const today = new Date().toISOString().split("T")[0];
  document.getElementById("dateReported").value = today;

  document.getElementById("copyButton").addEventListener("click", copyAndTrack);
});

function copyAndTrack() {
  try {
    const field = (id, label) => {
      const el = document.getElementById(id);
      const value = el ? el.value.trim() : "";
      return value ? `**${label}:**\n\`\`\`\n${value}\n\`\`\`\n` : "";
    };

    const output =
      field("dateReported", "Date Reported") +
      field("customerName", "Customer Name") +
      field("supportCase", "Support Case #") +
      field("environment", "Environment") +
      field("problemStatement", "Problem Statement") +
      field("issueContext", "Issue Context") +
      field("integrationName", "Integration / Tool Name") +
      field("apiType", "API Used") +
      field("apiEndpoint", "Endpoint(s) Involved") +
      field("authMethod", "Auth Method") +
      field("tokenScope", "Token Scope") +
      field("requestPayload", "Request Payload") +
      field("responseOutput", "Response / Error Output") +
      field("expectedBehavior", "Expected Behavior") +
      field("actualBehavior", "Actual Behavior") +
      field("actionsTaken", "Actions Taken to Troubleshoot") +
      field("additionalEvidence", "Additional Evidence") +
      field("requestedOutcome", "Requested Outcome from Engineering");

    navigator.clipboard.writeText(output).then(() => {
      alert("Copied to clipboard. Ready to paste in Jira.");
      document.getElementById("myTooltip").innerText = "Copied!";

      fetch("/increment/api", { method: "POST" })
        .then((r) => r.json())
        .then((d) => console.log(d.message))
        .catch((e) => console.error("Count update failed:", e));
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
  document.querySelectorAll("textarea, input, select").forEach((el) => {
    if (el.type !== "button" && el.id !== "dateReported") {
      el.value = "";
    }
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

