"use strict";

function myFunction() {
  let internalNotes;

  const copyText = document.getElementById("internalNotes");
  console.log(copyText.value);

  const nextSteps = document.getElementById("nextSteps");
  let nSText = nextSteps.value;
  console.log(nextSteps.value);

  if (nSText === "") {
    nSText = "N/A";
  }

  internalNotes = `------------------------📝𝐈𝐧𝐭𝐞𝐫𝐧𝐚𝐥 𝐍𝐨𝐭𝐞𝐬📝------------------------
  𝗡𝗼𝘁𝗲𝘀
  ${copyText.value}
  ------------------------
  𝗡𝗲𝘅𝘁 𝗦𝘁𝗲𝗽𝘀
  ${nSText}`;

  navigator.clipboard.writeText(internalNotes);

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

