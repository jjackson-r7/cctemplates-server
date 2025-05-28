"use strict";

function myFunction() {
  let solved;

  const issSum = document.getElementById("issueSummary");

  const solution = document.getElementById("solution");

  const links = document.getElementById("links");
  let solLinks = links.value;

  if (solLinks === "") {
    solLinks = "N/A";
  }

  solved = `-------------------------🟢𝐈𝐬𝐬𝐮𝐞 𝐒𝐨𝐥𝐯𝐞𝐝🟢-------------------------
𝐈𝐬𝐬𝐮𝐞:
${issSum.value}
-------------------------
𝐒𝐨𝐥𝐮𝐭𝐢𝐨𝐧:
${solution.value}
-------------------------
𝐋𝐢𝐧𝐤(𝐬) 𝐭𝐨 𝐒𝐨𝐥𝐮𝐭𝐢𝐨𝐧:
${solLinks}`;

  navigator.clipboard.writeText(solved);

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

