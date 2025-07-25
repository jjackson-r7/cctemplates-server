"use strict";

function myFunction() {
  let genericIDRTemplate;

  const problemStatement = document.getElementById("problemStatement");
  const htmlProbStatement= `**Problem Statement:**\n\`\`\`\n${problemStatement.value}\n\`\`\`\n`;
  
  const issueContext = document.getElementById("issueContext");
  const htmlIssueContext = `**Issue Context:**\n\`\`\`\n${issueContext.value}\n\`\`\`\n`;

  const tobiasLink = document.getElementById("tobiasLink");
  const htmlTobiasLink = `**Tobias Link:**\n\`\`\`\n${tobiasLink.value}\n\`\`\`\n`;

  const eventSourceDocs = document.getElementById("eventSourceDocs");
  const htmlEventSourceDocs = `**Event Source Documentation Link:**\n\`\`\`\n${eventSourceDocs.value}\n\`\`\`\n`;

  const collectorLogs = document.getElementById("collectorLogs");
  const htmlCollectorLogs = `**Collector Logs:**\n\`\`\`\n${collectorLogs.value}\n\`\`\`\n`;

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

  genericIDRTemplate = `${htmlProbStatement}
  ${htmlIssueContext}
  ${htmlTobiasLink}
  ${htmlEventSourceDocs}
  ${htmlCollectorLogs}
  ${htmlActionsTakenToTroubleshoot}
  ${htmlStepsToReproduce}
  ${htmlExpectedBehavior}
  ${htmlActualBehavior}
  ${htmlRequestedOutcomeFromEngineering}`;

  navigator.clipboard.writeText(genericIDRTemplate);

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
