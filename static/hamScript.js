"use strict";

function myFunction() {
  let helpAmoose;
  const yellow = "🟡";
  const green = "🟢";
  const redAlert = "🚨🚨";

  const jiraTicket = document.getElementById("jticket");
  let jticket = jiraTicket.value;

  const guidance = document.getElementById("guidance");
  let guide = guidance.value;

  const potentialSolution = document.getElementById("potentialSolutions");
  let potSol = potentialSolution.value;

  const linkSolutions = document.getElementById("linkSolutions");
  let linkSol = linkSolutions.value;

  if (jticket === "yes") {
    jticket = "🚨🚨 YES 🚨🚨";
  } else {
    jticket = "N/A";
  }

  if (guide === "") {
    guide = "N/A";
  } else {
    guide = yellow.concat(" ", guide);
  }
  if (potSol === "") {
    potSol = "N/A";
  } else {
    potSol = green.concat(" ", potSol);
  }
  if (linkSol === "") {
    linkSol = "N/A";
  }

  helpAmoose = `------------------------🤝Help-A-Moose🤝-------------------------
𝐉𝐢𝐫𝐚 𝐓𝐢𝐜𝐤𝐞𝐭 𝐍𝐞𝐞𝐝𝐞𝐝?
${jticket}
-------------------------
𝐆𝐮𝐢𝐝𝐚𝐧𝐜𝐞
${guide}
-------------------------
𝐏𝐨𝐭𝐞𝐧𝐭𝐢𝐚𝐥 𝐒𝐨𝐥𝐮𝐭𝐢𝐨𝐧(𝐬)
${potSol}
-------------------------
𝐋𝐢𝐧𝐤(𝐬) 𝐭𝐨 𝐒𝐨𝐥𝐮𝐭𝐢𝐨𝐧(𝐬)
${linkSol}
`;

  navigator.clipboard.writeText(helpAmoose);

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
