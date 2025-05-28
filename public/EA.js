"use strict";

function myFunction() {
  const field = (id, label) => {
    const el = document.getElementById(id);
    const v = el ? el.value.trim() : "";
    return v ? `**${label}:**\n\`\`\`\n${v}\n\`\`\`\n` : "";
  };

  const checkbox = (id, labelTrue, labelFalse) => {
    const el = document.getElementById(id);
    return el && el.checked ? `${labelTrue}\n` : `${labelFalse}\n`;
  };

  const output =
    field("orgID", "Org Info") +
    field("summary", "Problem Statement") +
    field("Proj", "Project URL") +
    field("Goal", "Goal URL") +
    field("troubleshoot", "Actions Taken to Troubleshoot") +
    field("expectedBehavior", "Expected Behavior") +
    field("code", "HAR Status Code Findings") +
    field("Kibana", "Kibana Log Findings") +
    field("requestedOutcomeFromEngineering", "Requested Outcome from Engineering") +
    checkbox("orgchk", "**View Page Source HTML is attached**", "**View Page Source HTML is not attached**") +
    checkbox("harchk", "**HAR File is attached**", "**HAR File is not attached**") +
    checkbox("proofchk", "**Project/Goal Screenshots are attached**", "**Project/Goal Screenshots are not attached**") +
    checkbox("URLchk", "**Project/Goal URL is included**", "**Project/Goal URL is not included**");

  navigator.clipboard.writeText(output).then(() => {
    document.getElementById("myTooltip").innerText = "Copied!";
    alert("Copied to clipboard. Ready to paste in Jira.");

    fetch("/increment/EA", { method: "POST" })
      .then(res => res.json())
      .then(data => console.log(data.message))
      .catch(err => console.error("Metric update failed:", err));
  }).catch(err => {
    console.error("Clipboard copy failed:", err);
    alert("Error occurred. Check the console.");
  });
}

function outFunc() {
  document.getElementById("myTooltip").innerText = "Copy to clipboard";
}

function resetForm() {
  document.querySelectorAll("textarea, input").forEach(el => {
    if (el.type !== "button") el.value = "";
  });

  document.querySelectorAll("input[type='checkbox']").forEach(cb => cb.checked = false);
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

