"use strict";

function myFunction() {
  let agentFalse;

  const orgID = document.getElementById("orgID");
  const htmlOrgID = `**OrgID:**\n\`\`\`\n${orgID.value}\n\`\`\`\n`;

  const agentID = document.getElementById("agentID");
  const htmlAgentID = `**AgentID:**\n\`\`\`\n${agentID.value}\n\`\`\`\n`;

  const region = document.getElementById("region");
  const htmlRegion = `**Region:**\n\`\`\`\n${region.value}\n\`\`\`\n`;

  const xmlreport = document.getElementById("xmlreport");
  const htmlXmlReport = `**Agent Assessment or XML Report Proof:**\n\`\`\`\n${xmlreport.value}\n\`\`\`\n`;

  const farnsworth = document.getElementById("farnsworth");
  const htmlFarnsworth = `**Farnsworth:**\n\`\`\`\n${farnsworth.value}\n\`\`\`\n`;
  
  const disputeProof = document.getElementById("disputeProof");
  const htmlDisputeProof = `**Proof of why it should be NON-VULNERABLE/VULNERABLE:**\n\`\`\`\n${disputeProof.value}\n\`\`\`\n`;

  agentFalse = `${htmlOrgID}\n${htmlAgentID}\n${htmlRegion}\n${htmlXmlReport}\n${htmlFarnsworth}\n${htmlDisputeProof}`;

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
