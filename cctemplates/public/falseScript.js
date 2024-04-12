"use strict";

function myFunction() {
  let falsePositiveNegative;

  const descriptionSI = document.getElementById("descriptionSI");
  const hmtldescription = `**Description:**\n\`\`\`\n${descriptionSI.value}\n\`\`\`\n`;
  
  const engineInfo = document.getElementById("engineInfo");
  const htmlengine = `**Engine Info:**\n\`\`\`\n${engineInfo.value}\n\`\`\`\n`;

  const asset = document.getElementById("asset");
  const htmlAsset = `**Asset:**\n\`\`\`\n${asset.value}\n\`\`\`\n`;

  const initAuth = document.getElementById("initAuth");
  const htmlInitAuth = `**Initial Authentication achieved**\n\`\`\`\n${initAuth.value}\n\`\`\`\n`;

  const elevatedperm = document.getElementById("elevatedperm");
  const htmlElevatedPerm = `**Permission Elevation achieved**\n\`\`\`\n${elevatedperm.value}\n\`\`\`\n`;

  const systemfingerprint = document.getElementById("systemfingerprint");
  const htmlSystemF = `**System Fingerprint (Certainty=1.0) was achieved**\n\`\`\`\n${systemfingerprint.value}\n\`\`\`\n`;

  const vulnfindings = document.getElementById("vulnfindings");
  const htmlVulnF = `**Vulnerability Finding (Scan Log)**\n\`\`\`\n${vulnfindings.value}\n\`\`\`\n`;

  const xmlreport = document.getElementById("xmlreport");
  const htmlXmlReport = `**XML Report Proof**\n\`\`\`\n${xmlreport.value}\n\`\`\`\n`;

  const farnsworth = document.getElementById("farnsworth");
  const htmlFarnsworth = `**Farnsworth**\n\`\`\`\n${farnsworth.value}\n\`\`\`\n`;

  const disputeProof = document.getElementById("disputeProof");
  const htmlDisputeProof = `**Proof of why it should be NON-VULNERABLE/VULNERABLE:**\n\`\`\`\n${disputeProof.value}\n\`\`\`\n`;

  falsePositiveNegative = `${hmtldescription}
  ${htmlengine}
  ${htmlAsset}
  ${htmlInitAuth}
  ${htmlElevatedPerm}
  ${htmlSystemF}
  ${htmlVulnF}
  ${htmlXmlReport}
  ${htmlFarnsworth}
  ${htmlDisputeProof}`;

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
