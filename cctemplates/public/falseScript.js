"use strict";

function myFunction() {
  let falsePositiveNegative;

  const summarySI = document.getElementById("summarySI");
  const hmtlsummary= `**Summary:**\n\`\`\`\n${summarySI.value}\n\`\`\`\n`;
  
  const engineInfo = document.getElementById("engineInfo");
  const htmlengine = `**Engine Info:**\n\`\`\`\n${engineInfo.value}\n\`\`\`\n`;

  const asset = document.getElementById("asset");
  const htmlAsset = `**Asset Info:**\n\`\`\`\n${asset.value}\n\`\`\`\n`;

  const systemfingerprint = document.getElementById("systemfingerprint");
  const htmlSystemF = `**System Fingerprint (Certainty=1.0) was achieved**\n\`\`\`\n${systemfingerprint.value}\n\`\`\`\n`;

  const elevatedperm = document.getElementById("elevatedperm");
  const htmlElevatedPerm = `**Permission Elevation achieved**\n\`\`\`\n${elevatedperm.value}\n\`\`\`\n`;

  const softwarefingerprint = document.getElementById("softwarefingerprint");
  const htmlsoftwarefingerprint = `**Software Fingerprint (If applicable)**\n\`\`\`\n${elevatedperm.value}\n\`\`\`\n`;

  const vulnfindings = document.getElementById("vulnfindings");
  const htmlVulnF = `**Vulnerability Finding (Scan Log)**\n\`\`\`\n${vulnfindings.value}\n\`\`\`\n`;

  const xmlreport = document.getElementById("xmlreport");
  const htmlXmlReport = `**XML Report Proof**\n\`\`\`\n${xmlreport.value}\n\`\`\`\n`;

  const farnsworth = document.getElementById("farnsworth");
  const htmlFarnsworth = `**Farnsworth**\n\`\`\`\n${farnsworth.value}\n\`\`\`\n`;

  const jriasearch = document.getElementById("jirasearch");
  const htmljirasearch = `**Jira/Internet Search Results**\n\`\`\`\n${farnsworth.value}\n\`\`\`\n`;

  const disputeProof = document.getElementById("disputeProof");
  const htmlDisputeProof = `**Proof of why it should be NON-VULNERABLE/VULNERABLE:**\n\`\`\`\n${disputeProof.value}\n\`\`\`\n`;



  const scanlogchk = document.getElementById("scanlogchk");
  let htmlscanlogchk = "";
  
  if (scanlogchk.checked) {
    htmlscanlogchk = "**Scan Logs with enhanced logging is attached to the case**";
  } else {
    htmlscanlogchk = "Scan Log with enhanced logging is not attached to the case";
  }

  const xmlreportchk = document.getElementById("xmlreportchk");
  let htmlxmlreportchk = "";
  
  if (xmlreportchk.checked) {
    htmlxmlreportchk = "**XML Report is attached to the case**";
  } else {
    htmlxmlreportchk = "XML Report is not attached to the case";
  }

  const xmlproofchk = document.getElementById("proofchk");
  let htmlproofchk = "";
  
  if (proofchk.checked) {
    htmlproofchk = "**Screenshot / Proof is attached to the case**";
  } else {
    htmlproofchk = "Screenshot / Proof is not attached to the case";
  }

  falsePositiveNegative = `${hmtlsummary}
  ${htmlengine}
  ${htmlAsset}
  ${htmlSystemF}
  ${htmlElevatedPerm}
  ${htmlsoftwarefingerprint}
  ${htmlVulnF}
  ${htmlXmlReport}
  ${htmlFarnsworth}
  ${htmljirasearch}
  ${htmlDisputeProof}
  ${htmlscanlogchk}
  ${htmlxmlreportchk}
  ${htmlproofchk}`;

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
