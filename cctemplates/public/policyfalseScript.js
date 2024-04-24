"use strict";

function myFunction() {
  let falsePositiveNegative;

  const descriptionSI = document.getElementById("descriptionSI").value.replace(/`/g, "");
  const hmtldescription = `**Description:**
\`\`\`
${descriptionSI}
\`\`\`
`;

  const osInfo = document.getElementById("osinfo").value.replace(/`/g, "");
  const htmlos = `**OS Info:**
\`\`\`
${osInfo}
\`\`\`
`;

  const PolicyInfo = document.getElementById("Policy").value.replace(/`/g, "");
  const htmlpolicyinfo = `**Policy:**
\`\`\`
${PolicyInfo}
\`\`\`
`;

  const RuleInfo = document.getElementById("Rules").value.replace(/`/g, "");
  const htmlruleinfo = `**Rule(s):**
\`\`\`
${RuleInfo}
\`\`\`
`;

  const Auth = document.getElementById("Auth").value.replace(/`/g, "");
  const htmlauth = `**Authentication:**
\`\`\`
${Auth}
\`\`\`
`;

  const applicable = document.getElementById("applicable").value.replace(/`/g, "");
  const htmlapplicable = `**CPE Results:**
\`\`\`
${applicable}
\`\`\`
`;

  const systemfingerprint = document.getElementById("systemfingerprint").value.replace(/`/g, "");
  const htmlsystemfingerprint = `**System Fingerprint (Certainty=1.0) was achieved:**
\`\`\`
${systemfingerprint}
\`\`\`
`;

  const vuln = document.getElementById("vulnfindings").value.replace(/`/g, "");
  const htmlvuln = `**Vulnerability Finding (Scan Log):**
\`\`\`
${vuln}
\`\`\`
`;

  const def = document.getElementById("def").value.replace(/`/g, "");
  const htmldef = `**DEF Finding:**
\`\`\`
${def}
\`\`\`
`;

  const tst = document.getElementById("tst").value.replace(/`/g, "");
  const htmltst = `**TST / OBJ Finding:**
\`\`\`
${tst}
\`\`\`
`;

  const item = document.getElementById("item").value.replace(/`/g, "");
  const htmlitem = `**Item Finding:**
\`\`\`
${item}
\`\`\`
`;

  const aces = document.getElementById("aces").value.replace(/`/g, "");
  const htmlaces = `**ACES LOG:**
\`\`\`
${aces}
\`\`\`
`;

  const disputeProof = document.getElementById("disputeProof").value.replace(/`/g, "");
  const htmldisputeProof = `**Proof of why it should be NON-VULNERABLE/VULNERABLE:**
\`\`\`
${disputeProof}
\`\`\`
`;

  falsePositiveNegative = `${hmtldescription}
${htmldisputeProof}
${htmlos}
${htmlpolicyinfo}
${htmlruleinfo}
${htmlauth}
${htmlapplicable}
${htmlsystemfingerprint}
${htmlvuln}
${htmldef}
${htmltst}
${htmlitem}
${htmlaces}`;

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
