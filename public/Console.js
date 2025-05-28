"use strict";

function myFunction() {
  let falsePositiveNegative;

  const descriptionSI = document.getElementById("descriptionSI");
  const hmtlsummary= `**Summary:**\n\`\`\`\n${descriptionSI.value}\n\`\`\`\n`;
  
  const loginfo = document.getElementById("loginfo");
  const htmllog = `**Console Log Findings:**\n\`\`\`\n${loginfo.value}\n\`\`\`\n`;

  const actionsTakenToTroubleshoot = document.getElementById("actionsTakenToTroubleshoot");
  const htmlActionsTakenToTroubleshoot = `**Actions Taken to Troubleshoot:**\n\`\`\`\n${actionsTakenToTroubleshoot.value}\n\`\`\`\n`;

  const expectedBehavior = document.getElementById("expectedBehavior");
  const htmlExpectedBehavior = `**Expected Behavior:**\n\`\`\`\n${expectedBehavior.value}\n\`\`\`\n`;

  const requestedOutcomeFromEngineering = document.getElementById("requestedOutcomeFromEngineering");
  const htmlRequestedOutcomeFromEngineering = `**Requested Outcome from Engineering:**\n\`\`\`\n${requestedOutcomeFromEngineering.value}\n\`\`\`\n`;
  
  const logchk = document.getElementById("logchk");
  let htmllogchk = "";
  
  if (logchk.checked) {
    htmllogchk = "**Console support package is attached**";
  } else {
    htmllogchk = "**Console support package is not attached**";
  }

  const screenshotschk = document.getElementById("screenshotschk");
  let htmlscreenshotschk = "";
  
  if (screenshotschk.checked) {
    htmlscreenshotschk = "**Screenshots are attached**";
  } else {
    htmlscreenshotschk = "**Screenshots are not attached**";
  }

  falsePositiveNegative = `${hmtlsummary}
  ${htmllog}
  ${htmlActionsTakenToTroubleshoot}
  ${htmlExpectedBehavior}
  ${htmlRequestedOutcomeFromEngineering}
  ${htmllogchk}
  ${htmlscreenshotschk}`;

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
