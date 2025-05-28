"use strict";

function myFunction() {
  const get = id => document.getElementById(id)?.value.trim().replace(/`/g, "") || "";
  const block = (label, val) => val ? `**${label}:**\n\`\`\`\n${val}\n\`\`\`\n` : "";

  const output =
    block("Description", get("descriptionSI")) +
    block("Proof of why it should be NON-VULNERABLE/VULNERABLE", get("disputeProof")) +
    block("OS Info", get("osinfo")) +
    block("Policy", get("Policy")) +
    block("Rule(s)", get("Rules")) +
    block("Authentication", get("Auth")) +
    block("CPE Results", get("applicable")) +
    block("System Fingerprint (Certainty=1.0) was achieved", get("systemfingerprint")) +
    block("Vulnerability Finding (Scan Log)", get("vulnfindings")) +
    block("DEF Finding", get("def")) +
    block("TST / OBJ Finding", get("tst")) +
    block("Item Finding", get("item")) +
    block("ACES Log", get("aces")) +
    block("Actions Taken to Troubleshoot", get("actionsTakenToTroubleshoot")) +
    block("Expected Behavior", get("expectedBehavior")) +
    block("Actual Behavior", get("actualBehavior")) +
    block("Requested Outcome from Engineering", get("requestedOutcomeFromEngineering")) +
    `\n${document.getElementById("concheck").checked ? "**Custom Policy**" : "**Built-in Policy**"}`;

  navigator.clipboard.writeText(output).then(() => {
    document.getElementById("myTooltip").innerText = "Copied!";
    alert("Copied to clipboard. Ready to paste in Jira.");
    fetch("/increment/policyPN", { method: "POST" });
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

