"use strict";

function myFunction() {
  const businessUseCase = document.getElementById("businessUseCase").value.trim();
  const currentImpact = document.getElementById("currentImpact").value.trim();
  const newOrEnhancement = document.getElementById("newOrEnhancement").value.trim();
  const productTool = document.getElementById("productTool").value.trim();
  const thirdPartyDocs = document.getElementById("thirdPartyDocs").value.trim();
  const specificFunctionality = document.getElementById("specificFunctionality").value.trim();
  const eventSourceLogs = document.getElementById("eventSourceLogs").value.trim();

  const sections = [];
  if (businessUseCase) sections.push(`𝐁𝐮𝐬𝐢𝐧𝐞𝐬𝐬 𝐔𝐬𝐞-𝐂𝐚𝐬𝐞:\n${businessUseCase}`);
  if (currentImpact) sections.push(`𝐈𝐦𝐩𝐚𝐜𝐭 𝐨𝐧 𝐂𝐮𝐬𝐭𝐨𝐦𝐞𝐫:\n${currentImpact}`);
  if (newOrEnhancement) sections.push(`𝐍𝐞𝐰 𝐨𝐫 𝐄𝐧𝐡𝐚𝐧𝐜𝐞𝐦𝐞𝐧𝐭:\n${newOrEnhancement}`);
  if (productTool) sections.push(`𝐏𝐫𝐨𝐝𝐮𝐜𝐭 / 𝐓𝐨𝐨𝐥:\n${productTool}`);
  if (thirdPartyDocs) sections.push(`𝟑𝐫𝐝 𝐏𝐚𝐫𝐭𝐲 𝐃𝐨𝐜𝐮𝐦𝐞𝐧𝐭𝐚𝐭𝐢𝐨𝐧:\n${thirdPartyDocs}`);
  if (specificFunctionality) sections.push(`𝐃𝐞𝐬𝐢𝐫𝐞𝐝 𝐅𝐮𝐧𝐜𝐭𝐢𝐨𝐧𝐚𝐥𝐢𝐭𝐲:\n${specificFunctionality}`);
  if (eventSourceLogs) sections.push(`𝐄𝐯𝐞𝐧𝐭 𝐒𝐨𝐮𝐫𝐜𝐞 𝐋𝐨𝐠 𝐃𝐚𝐭𝐚:\n${eventSourceLogs}`);

  const output = `---------- 3rd Party Integration Request ----------\n${sections.join('\n-------------------------\n')}`;

  navigator.clipboard.writeText(output);

  const tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied!";

  // Track usage
  fetch("/increment/integrations", { method: "POST" });
}

function outFunc() {
  const tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}
