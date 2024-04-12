"use strict";

function myFunction() {
  let globalHandoff;

  const region = document.getElementById("region");

  const issSum = document.getElementById("issueSummary");

  const handOff = document.getElementById("handoff");

  globalHandoff = `-------------------------🌎𝐆𝐥𝐨𝐛𝐚𝐥 𝐇𝐚𝐧𝐝-𝐨𝐟𝐟🌎-------------------------
𝐇𝐚𝐧𝐝-𝐨𝐟𝐟 𝐓𝐨:
${region.value}
-------------------------
𝐈𝐬𝐬𝐮𝐞
${issSum.value}
-------------------------
𝐑𝐞𝐚𝐬𝐨𝐧 𝐟𝐨𝐫 𝐇𝐚𝐧𝐝-𝐨𝐟𝐟
${handOff.value}
`;

  navigator.clipboard.writeText(globalHandoff);

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
