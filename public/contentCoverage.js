"use strict";

function myFunction() {
  const businessUseCase = document.getElementById("businessUseCase").value.trim();
  const currentImpact = document.getElementById("currentImpact").value.trim();
  const vendorProduct = document.getElementById("vendorProduct").value.trim();
  const cveList = document.getElementById("cveList").value.trim();

  const sections = [];
  if (businessUseCase) sections.push(`�𝐮𝐬𝐢𝐧𝐞𝐬𝐬 𝐔𝐬𝐞-𝐂𝐚𝐬𝐞:\n${businessUseCase}`);
  if (currentImpact) sections.push(`𝐈𝐦𝐩𝐚𝐜𝐭 𝐨𝐧 𝐂𝐮𝐬𝐭𝐨𝐦𝐞𝐫:\n${currentImpact}`);
  if (vendorProduct) sections.push(`𝐕𝐞𝐧𝐝𝐨𝐫 & 𝐏𝐫𝐨𝐝𝐮𝐜𝐭:\n${vendorProduct}`);
  if (cveList) sections.push(`𝐒𝐩𝐞𝐜𝐢𝐟𝐢𝐜 𝐂𝐕𝐄𝐬:\n${cveList}`);

  const output = `---------- Content Coverage Request ----------\n${sections.join('\n-------------------------\n')}`;

  navigator.clipboard.writeText(output);

  const tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied!";

  // Track usage
  fetch("/increment/contentCoverage", { method: "POST" });
}

function outFunc() {
  const tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}
