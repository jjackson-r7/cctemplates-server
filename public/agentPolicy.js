"use strict";

// Build and copy the template, update count, show alert
function myFunction() {
  try {
    const field = (id, label) => {
      const el = document.getElementById(id);
      const v = el ? el.value.trim() : "";
      return v ? `**${label}:**\n\`\`\`\n${v}\n\`\`\`\n` : "";
    };

    const output =
      field("descriptionSI", "Description") +
      field("orgName", "Org Name") +
      field("orgId", "Org ID") +
      field("orgRegion", "Org Region") +
      field("agentId", "Agent ID") +
      field("disputeProof", "Proof disputing results") +
      field("osinfo", "OS Information") +
      field("Policy", "Benchmark") +
      field("Rules", "Rule(s)") +
      field("actionsTakenToTroubleshoot", "Actions Taken to Troubleshoot") +
      field("expectedBehavior", "Expected Behavior") +
      field("actualBehavior", "Actual Behavior") +
      field("requestedOutcomeFromEngineering", "Requested Outcome from Engineering") +
      `\n${document.getElementById("concheck").checked ? "**Custom Policy**" : "**Built-in Policy**"}`;

    navigator.clipboard.writeText(output).then(() => {
      alert("Copied to clipboard. Ready to paste in Jira.");
      document.getElementById("myTooltip").innerText = "Copied!";

      fetch(`/increment/agentPolicy`, { method: "POST" })
        .then(r => r.json())
        .then(d => console.log(d.message))
        .catch(e => console.error("Count update failed:", e));
    });
  } catch (err) {
    console.error("Copy failed:", err);
    alert("Error occurred. Check the console.");
  }
}

// Tooltip reset
function outFunc() {
  document.getElementById("myTooltip").innerText = "Copy to clipboard";
}

// Form reset (clears all except checkboxes)
function resetForm() {
  document.querySelectorAll("textarea, input[type='text']").forEach(el => {
    el.value = "";
  });
  document.getElementById("concheck").checked = false;
  outFunc();
}

// Wire up buttons
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("copyButton").addEventListener("click", myFunction);
  document.getElementById("resetButton").addEventListener("click", resetForm);
});

// Sidebar control
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

