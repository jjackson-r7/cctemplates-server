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
      box("engineLog", "Scan Engine Log Finding") +
      box("actionsTakenToTroubleshoot", "Actions Taken to Troubleshoot") +
      box("expectedBehavior", "Expected Behavior") +
      box("actualBehavior", "Actual Behavior") +
      box("requestedOutcomeFromEngineering", "Requested Outcome from Engineering") +
      (document.getElementById("scanlogchk").checked
        ? "**Scan Logs with enhanced logging is attached to the case**\n"
        : "**Scan Logs with enhanced logging is not attached to the case**\n") +
      (document.getElementById("Enginelogchk").checked
        ? "**Scan Engine Log Package is attached to the case**\n"
        : "**Scan Engine Log Package is not attached to the case**\n") +
      (document.getElementById("proofchk").checked
        ? "**Screenshots are attached to the case**\n"
        : "**Screenshots are not attached to the case**\n");

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

