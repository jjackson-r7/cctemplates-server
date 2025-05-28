"use strict";

function myFunction() {
  const field = (id, label) => {
    const el = document.getElementById(id);
    const value = el ? el.value : "";
    return value ? `**${label}:**\n\`\`\`\n${value}\n\`\`\`\n` : "";
  };

  const checked = (id, label) => {
    return document.getElementById(id)?.checked
      ? `**${label} is attached**`
      : `**${label} is not attached**`;
  };

  const output =
    field("orgID", "ORG INFO") +
    field("email", "User's Email") +
    field("summary", "Description of issue") +
    field("IPL", "Steps to enable IPL") +
    field("troubleshoot", "Steps taken to troubleshoot") +
    field("code", "HAR Code findings") +
    field("Kibana", "Kibana Log Findings") +
    field("expectedBehavior", "Expected Behavior") +
    field("requestedOutcomeFromEngineering", "Requested Outcome from Engineering") +
    checked("orgchk", "View Page Source HTML") + "\n" +
    checked("harchk", "HAR File") + "\n" +
    checked("consolechk", "Console Support Package") + "\n" +
    checked("proofchk", "Screenshots of user profile");

  navigator.clipboard.writeText(output)
    .then(() => {
      document.getElementById("myTooltip").innerText = "Copied!";
      alert("Copied to clipboard. Ready to paste in Jira.");
      return fetch("/increment/IPL", { method: "POST" }); // metrics tracking
    })
    .catch((err) => {
      console.error("Copy failed:", err);
      alert("Error occurred. Check the console.");
    });
}

function outFunc() {
  document.getElementById("myTooltip").innerText = "Copy to clipboard";
}

function resetForm() {
  document.querySelectorAll("textarea, input[type='text'], select").forEach(el => {
    if (el.type !== "button") el.value = "";
  });
  document.querySelectorAll("input[type='checkbox']").forEach(el => el.checked = false);
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

