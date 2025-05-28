"use strict";

function myFunction() {
  let agentFalse;

  const orgID = document.getElementById("orgID");
  const htmlOrgID = `**OrgID:**\n\`\`\`\n${orgID.value}\n\`\`\`\n`;

  const agentID = document.getElementById("agentID");
  const htmlAgentID = `**AgentID:**\n\`\`\`\n${agentID.value}\n\`\`\`\n`;

  const region = document.getElementById("region");
  const htmlRegion = `**Region:**\n\`\`\`\n${region.value}\n\`\`\`\n`;

  const summary = document.getElementById("summary");
  const htmlsummary = `**Summary:**\n\`\`\`\n${summary.value}\n\`\`\`\n`;

  const logfinding = document.getElementById("logfinding");
  const htmllogfinding = `**Agent.log Findings:**\n\`\`\`\n${logfinding.value}\n\`\`\`\n`;

  const actionsTakenToTroubleshoot = document.getElementById("actionsTakenToTroubleshoot");
  const htmlActionsTakenToTroubleshoot = `**Actions Taken to Troubleshoot:**\n\`\`\`\n${actionsTakenToTroubleshoot.value}\n\`\`\`\n`;

  const expectedBehavior = document.getElementById("expectedBehavior");
  const htmlExpectedBehavior = `**Expected Behavior:**\n\`\`\`\n${expectedBehavior.value}\n\`\`\`\n`;

  const actualBehavior = document.getElementById("actualBehavior");
  const htmlActualBehavior = `**Actual Behavior:**\n\`\`\`\n${actualBehavior.value}\n\`\`\`\n`;

  const requestedOutcomeFromEngineering = document.getElementById("requestedOutcomeFromEngineering");
  const htmlRequestedOutcomeFromEngineering = `**Requested Outcome from Engineering:**\n\`\`\`\n${requestedOutcomeFromEngineering.value}\n\`\`\`\n`;
  
  const agentlogchk = document.getElementById("agentlogchk");
  let htmlagentlogchk = "";
  
  if (agentlogchk.checked) {
    htmlagentlogchk = "**Agent Logs are attached to the case**";
  } else {
    htmlagentlogchk = "**Agent Logs are not attached to the case**";
  }

  const proofchk = document.getElementById("proofchk");
  let htmlproofchk = "";
  
  if (proofchk.checked) {
    htmlproofchk = "**Screenshots are attached to the case**";
  } else {
    htmlproofchk = "**Screenshots are not attached to the case**";
  }


  agentFalse = `${htmlOrgID}\n
  ${htmlAgentID}\n
  ${htmlRegion}\n
  ${htmlsummary}\n
  ${htmllogfinding}\n
  ${htmlActionsTakenToTroubleshoot}
  ${htmlExpectedBehavior}
  ${htmlActualBehavior}
  ${htmlRequestedOutcomeFromEngineering}
  ${htmlagentlogchk}\n
  ${htmlproofchk}`;

  navigator.clipboard.writeText(agentFalse).then(() => {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied!";
  }).catch(error => {
    console.error('Failed to copy text: ', error);
  });
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
