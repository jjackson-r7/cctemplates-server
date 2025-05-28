"use strict";

function myFunction() {
  let falsePositiveNegative;

  const summarySI = document.getElementById("summarySI");
  const hmtlsummary= `**Summary:**\n${summarySI.value}\n`;
  
  const orgName = document.getElementById("orgName");
  const htmlorgname = `**--Org Name:** ${orgName.value}\n`;

  const orgId = document.getElementById("orgId");
  const htmlorgid = `**--Org ID:** ${orgId.value}\n`;

  const orgRegion = document.getElementById("orgRegion");
  const htmlorgregion = `**--Org Region:** ${orgRegion.value}\n`;

  const logSnippet = document.getElementById("logSnippet");
  const htmllogsnippet = `**Log Snippet for issue:**\n\`\`\`\n${logSnippet.value}\n\`\`\`\n`;

  const actionsTakenToTroubleshoot = document.getElementById("actionsTakenToTroubleshoot");
  const htmlActionsTakenToTroubleshoot = `**Actions Taken to Troubleshoot:**\n\`\`\`\n${actionsTakenToTroubleshoot.value}\n\`\`\`\n`;

  const stepsToReproduce = document.getElementById("stepsToReproduce");
  const htmlStepsToReproduce = `**Steps to Reproduce:**\n\`\`\`\n${stepsToReproduce.value}\n\`\`\`\n`;

  const expectedBehavior = document.getElementById("expectedBehavior");
  const htmlExpectedBehavior = `**Expected Behavior:**\n\`\`\`\n${expectedBehavior.value}\n\`\`\`\n`;

  const actualBehavior = document.getElementById("actualBehavior");
  const htmlActualBehavior = `**Actual Behavior:**\n\`\`\`\n${actualBehavior.value}\n\`\`\`\n`;

  const requestedOutcomeFromEngineering = document.getElementById("requestedOutcomeFromEngineering");
  const htmlRequestedOutcomeFromEngineering = `**Requested Outcome from Engineering:**\n\`\`\`\n${requestedOutcomeFromEngineering.value}\n\`\`\`\n`;

  const logcheck = document.getElementById("logcheck");
  let htmllogcheck = "";
  
  if (logcheck.checked) {
    htmllogcheck = "**Orchestrator logs have been attached to the case**";
  } else {
    htmllogcheck = "**Orchestrator logs have not been attached to the case**";
  }

  falsePositiveNegative = `${hmtlsummary}
  ${htmlorgname}
  ${htmlorgid}
  ${htmlorgregion}
  ${htmllogsnippet}
  ${htmlActionsTakenToTroubleshoot}
  ${htmlStepsToReproduce}
  ${htmlExpectedBehavior}
  ${htmlActualBehavior}
  ${htmlRequestedOutcomeFromEngineering}
  ${htmllogcheck}`;

  navigator.clipboard.writeText(falsePositiveNegative);

  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied!";
}

function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

