"use strict";

function myFunction() {
  const businessUseCase = document.getElementById("businessUseCase").value.trim();
  const currentImpact = document.getElementById("currentImpact").value.trim();
  const featureTool = document.getElementById("featureTool").value.trim();
  const currentStats = document.getElementById("currentStats").value.trim();
  const improvement = document.getElementById("improvement").value.trim();
  const suggestions = document.getElementById("suggestions").value.trim();

  const sections = [];
  if (businessUseCase) sections.push(`𝐁𝐮𝐬𝐢𝐧𝐞𝐬𝐬 𝐔𝐬𝐞-𝐂𝐚𝐬𝐞:\n${businessUseCase}`);
  if (currentImpact) sections.push(`𝐈𝐦𝐩𝐚𝐜𝐭 𝐨𝐧 𝐁𝐮𝐬𝐢𝐧𝐞𝐬𝐬:\n${currentImpact}`);
  if (featureTool) sections.push(`𝐅𝐞𝐚𝐭𝐮𝐫𝐞 / 𝐓𝐨𝐨𝐥:\n${featureTool}`);
  if (currentStats) sections.push(`𝐂𝐮𝐫𝐫𝐞𝐧𝐭 𝐏𝐞𝐫𝐟𝐨𝐫𝐦𝐚𝐧𝐜𝐞:\n${currentStats}`);
  if (improvement) sections.push(`𝐃𝐞𝐬𝐢𝐫𝐞𝐝 𝐈𝐦𝐩𝐫𝐨𝐯𝐞𝐦𝐞𝐧𝐭:\n${improvement}`);
  if (suggestions) sections.push(`𝐒𝐮𝐠𝐠𝐞𝐬𝐭𝐢𝐨𝐧𝐬:\n${suggestions}`);

  const output = `---------- Performance Request ----------\n${sections.join('\n-------------------------\n')}`;

  navigator.clipboard.writeText(output);

  const tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied!";

  fetch("/increment/performance", { method: "POST" });
}

function outFunc() {
  const tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}
