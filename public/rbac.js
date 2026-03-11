"use strict";

function myFunction() {
  const businessUseCase = document.getElementById("businessUseCase").value.trim();
  const currentImpact = document.getElementById("currentImpact").value.trim();
  const adjustOrNew = document.getElementById("adjustOrNew").value.trim();
  const existingEnhancement = document.getElementById("existingEnhancement").value.trim();
  const newRolePermission = document.getElementById("newRolePermission").value.trim();

  const sections = [];
  if (businessUseCase) sections.push(`𝐁𝐮𝐬𝐢𝐧𝐞𝐬𝐬 𝐔𝐬𝐞-𝐂𝐚𝐬𝐞:\n${businessUseCase}`);
  if (currentImpact) sections.push(`𝐈𝐦𝐩𝐚𝐜𝐭 𝐨𝐧 𝐁𝐮𝐬𝐢𝐧𝐞𝐬𝐬:\n${currentImpact}`);
  if (adjustOrNew) sections.push(`𝐀𝐝𝐣𝐮𝐬𝐭𝐦𝐞𝐧𝐭 𝐨𝐫 𝐍𝐞𝐰:\n${adjustOrNew}`);
  if (existingEnhancement) sections.push(`𝐄𝐱𝐢𝐬𝐭𝐢𝐧𝐠 𝐄𝐧𝐡𝐚𝐧𝐜𝐞𝐦𝐞𝐧𝐭:\n${existingEnhancement}`);
  if (newRolePermission) sections.push(`𝐍𝐞𝐰 𝐑𝐨𝐥𝐞 / 𝐏𝐞𝐫𝐦𝐢𝐬𝐬𝐢𝐨𝐧:\n${newRolePermission}`);

  const output = `---------- RBAC & Permissions Request ----------\n${sections.join('\n-------------------------\n')}`;

  navigator.clipboard.writeText(output);

  const tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied!";

  // Track usage
  fetch("/increment/rbac", { method: "POST" });
}

function outFunc() {
  const tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}
