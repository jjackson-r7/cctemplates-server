"use strict";

function myFunction() {
  let requestHelp;

  const issSum = document.getElementById("issueSummary");

  const stuckOn = document.getElementById("stuckOn");
  let stkOn = stuckOn.value;

  const specificHelp = document.getElementById("specificHelp");
  let spcfHelp = specificHelp.value;

  const logsLocation = document.getElementById("logsloc");
  let logsLoc = logsLocation.value;

  if (stkOn === "") {
    stkOn = "N/A";
  }
  if (spcfHelp === "") {
    spcfHelp = "N/A";
  }
  if (logsLoc === "") {
    logsLoc = "N/A";
  }

  requestHelp = `-------------------------🆘Request Help🆘-------------------------
𝐈𝐬𝐬𝐮𝐞 𝐒𝐮𝐦𝐦𝐚𝐫𝐲
${issSum.value}
-------------------------
𝐒𝐭𝐮𝐜𝐤 𝐨𝐧
${stkOn}
-------------------------
𝐍𝐞𝐞𝐝 𝐇𝐞𝐥𝐩 𝐒𝐩𝐞𝐜𝐢𝐟𝐢𝐜𝐚𝐥𝐥𝐲 𝐖𝐢𝐭𝐡
${spcfHelp}
-------------------------
𝐋𝐨𝐠𝐬 𝐋𝐨𝐜𝐚𝐭𝐢𝐨𝐧
${logsLoc}`;

  navigator.clipboard.writeText(requestHelp);

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
