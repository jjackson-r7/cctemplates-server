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

  const disputeProof = document.getElementById("disputeProof");
  const htmlDisputeProof = `**Proof of why it should be NON-VULNERABLE/VULNERABLE:**\n\`\`\`\n${disputeProof.value}\n\`\`\`\n`;

  const xmlreport = document.getElementById("xmlreport");
  const htmlXmlReport = `**Agent Assessment or XML Report Proof:**\n\`\`\`\n${xmlreport.value}\n\`\`\`\n`;

  const farnsworth = document.getElementById("farnsworth");
  const htmlFarnsworth = `**Farnsworth:**\n\`\`\`\n${farnsworth.value}\n\`\`\`\n`;
  
  const agentlogchk = document.getElementById("agentlogchk");
  let htmlagentlogchk = "";
  
  if (agentlogchk.checked) {
    htmlagentlogchk = "**Agent Logs are attached to the case**";
  } else {
    htmlagentlogchk = "**Agent Logs are not attached to the case**";
  }

  const xmlreportchk = document.getElementById("xmlreportchk");
  let htmlxmlreportchk = "";
  
  if (xmlreportchk.checked) {
    htmlxmlreportchk = "**XML Report is attached to the case**";
  } else {
    htmlxmlreportchk = "**XML Report is not attached to the case**";
  }

  const proofchk = document.getElementById("proofchk");
  let htmlproofchk = "";
  
  if (proofchk.checked) {
    htmlproofchk = "**Screenshot / Proof is attached to the case**";
  } else {
    htmlproofchk = "**Screenshot / Proof is not attached to the case**";
  }


  agentFalse = `${htmlOrgID}\n
  ${htmlAgentID}\n
  ${htmlRegion}\n
  ${htmlsummary}\n
  ${htmlDisputeProof}\n
  ${htmlXmlReport}\n
  ${htmlFarnsworth}\n
  ${htmlagentlogchk}\n
  ${htmlxmlreportchk}\n
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
