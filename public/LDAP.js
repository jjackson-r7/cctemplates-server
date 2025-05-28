"use strict";

function myFunction() {
  const field = (id, label) => {
    const el = document.getElementById(id);
    return el && el.value
      ? `**${label}:**\n\`\`\`\n${el.value}\n\`\`\`\n`
      : "";
  };

  const checkbox = (id, labelIfChecked, labelIfUnchecked) =>
    document.getElementById(id).checked ? labelIfChecked : labelIfUnchecked;

  const output =
    field("descriptionSI", "Problem Statement") +
    field("nscinfo", "NSC.log Findings") +
    field("authinfo", "Auth.log Findings") +
    field("actionsTakenToTroubleshoot", "Actions Taken to Troubleshoot") +
    field("expectedBehavior", "Expected Behavior") +
    field("requestedOutcomeFromEngineering", "Requested Outcome from Engineering") +
    checkbox("logchk", "**Console Debug Logs are attached**", "**Console Debug Logs are not attached**") + "\n" +
    checkbox("softerrachk", "**Softerra test results are attached**", "**Softerra test results are not attached**") + "\n" +
    checkbox("proofchk", "**LDAP Configuration Set up Screenshots are attached**", "**LDAP Configuration Set up Screenshots are not attached**");

  navigator.clipboard.writeText(output)
    .then(() => {
      document.getElementById("myTooltip").innerText = "Copied!";
      alert("Copied to clipboard. Ready to paste in Jira.");
      fetch("/increment/LDAP", { method: "POST", headers: { "Content-Type": "application/json" }, body: "{}" });
    })
    .catch(err => {
      console.error("Copy failed:", err);
      alert("Error occurred. Check the console.");
    });
}

function outFunc() {
  document.getElementById("myTooltip").innerText = "Copy to clipboard";
}

function resetForm() {
  document.querySelectorAll("textarea, input[type='text'], input[type='checkbox']").forEach(el => {
    if (el.type === "checkbox") el.checked = false;
    else el.value = "";
  });
  document.getElementById("myTooltip").innerText = "Copy to clipboard";
}

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

