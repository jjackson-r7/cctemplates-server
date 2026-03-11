"use strict";

function myFunction() {
  const businessUseCase = document.getElementById("businessUseCase").value.trim();
  const currentImpact = document.getElementById("currentImpact").value.trim();
  const osRequested = document.getElementById("osRequested").value.trim();
  const rapid7Tool = document.getElementById("rapid7Tool").value.trim();

  const sections = [];
  if (businessUseCase) sections.push(`𝐁𝐮𝐬𝐢𝐧𝐞𝐬𝐬 𝐔𝐬𝐞-𝐂𝐚𝐬𝐞:\n${businessUseCase}`);
  if (currentImpact) sections.push(`𝐈𝐦𝐩𝐚𝐜𝐭 𝐨𝐧 𝐁𝐮𝐬𝐢𝐧𝐞𝐬𝐬:\n${currentImpact}`);
  if (osRequested) sections.push(`𝐎𝐩𝐞𝐫𝐚𝐭𝐢𝐧𝐠 𝐒𝐲𝐬𝐭𝐞𝐦:\n${osRequested}`);
  if (rapid7Tool) sections.push(`𝐑𝐚𝐩𝐢𝐝𝟕 𝐓𝐨𝐨𝐥:\n${rapid7Tool}`);

  const output = `---------- OS Support Request ----------\n${sections.join('\n-------------------------\n')}`;

  navigator.clipboard.writeText(output);

  const tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied!";

  fetch("/increment/osSupport", { method: "POST" });
}

function outFunc() {
  const tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}
