"use strict";

function myFunction() {
  const businessUseCase = document.getElementById("businessUseCase").value.trim();
  const currentImpact = document.getElementById("currentImpact").value.trim();
  const newOrExisting = document.getElementById("newOrExisting").value.trim();
  const triggerType = document.getElementById("triggerType").value.trim();

  const sections = [];
  if (businessUseCase) sections.push(`𝐁𝐮𝐬𝐢𝐧𝐞𝐬𝐬 𝐔𝐬𝐞-𝐂𝐚𝐬𝐞:\n${businessUseCase}`);
  if (currentImpact) sections.push(`𝐈𝐦𝐩𝐚𝐜𝐭 𝐨𝐧 𝐁𝐮𝐬𝐢𝐧𝐞𝐬𝐬:\n${currentImpact}`);
  if (newOrExisting) sections.push(`𝐍𝐞𝐰 𝐨𝐫 𝐄𝐱𝐢𝐬𝐭𝐢𝐧𝐠:\n${newOrExisting}`);
  if (triggerType) sections.push(`𝐓𝐫𝐢𝐠𝐠𝐞𝐫 𝐓𝐲𝐩𝐞:\n${triggerType}`);

  const output = `---------- Automation & API Request ----------\n${sections.join('\n-------------------------\n')}`;

  navigator.clipboard.writeText(output);

  const tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied!";

  fetch("/increment/automationApi", { method: "POST" });
}

function outFunc() {
  const tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}
