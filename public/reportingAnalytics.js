"use strict";

function myFunction() {
  const businessUseCase = document.getElementById("businessUseCase").value.trim();
  const currentImpact = document.getElementById("currentImpact").value.trim();
  const newOrExisting = document.getElementById("newOrExisting").value.trim();
  const newFunctionality = document.getElementById("newFunctionality").value.trim();
  const existingEnhancement = document.getElementById("existingEnhancement").value.trim();

  const sections = [];
  if (businessUseCase) sections.push(`𝐁𝐮𝐬𝐢𝐧𝐞𝐬𝐬 𝐔𝐬𝐞-𝐂𝐚𝐬𝐞:\n${businessUseCase}`);
  if (currentImpact) sections.push(`𝐈𝐦𝐩𝐚𝐜𝐭 𝐨𝐧 𝐁𝐮𝐬𝐢𝐧𝐞𝐬𝐬:\n${currentImpact}`);
  if (newOrExisting) sections.push(`𝐍𝐞𝐰 𝐨𝐫 𝐄𝐱𝐢𝐬𝐭𝐢𝐧𝐠:\n${newOrExisting}`);
  if (newFunctionality) sections.push(`𝐍𝐞𝐰 𝐅𝐮𝐧𝐜𝐭𝐢𝐨𝐧𝐚𝐥𝐢𝐭𝐲:\n${newFunctionality}`);
  if (existingEnhancement) sections.push(`𝐄𝐱𝐢𝐬𝐭𝐢𝐧𝐠 𝐄𝐧𝐡𝐚𝐧𝐜𝐞𝐦𝐞𝐧𝐭:\n${existingEnhancement}`);

  const output = `---------- Reporting & Analytics Request ----------\n${sections.join('\n-------------------------\n')}`;

  navigator.clipboard.writeText(output);

  const tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied!";

  // Track usage
  fetch("/increment/reportingAnalytics", { method: "POST" });
}

function outFunc() {
  const tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}
