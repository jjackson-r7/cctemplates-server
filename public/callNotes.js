"use strict";

function myFunction() {
  let callNotes;

  const attendees = document.getElementById("attendees");

  const discussed = document.getElementById("discussed");
  let discussedItems = discussed.value;

  const outstanding = document.getElementById("outstanding");
  let outstandingIssues = outstanding.value;

  const custItems = document.getElementById("custItems");
  let customerItems = custItems.value;

  const rapid7Items = document.getElementById("rapid7Items");
  let r7Items = rapid7Items.value;

  if (discussedItems === "") {
    discussedItems = "N/A";
  }
  if (outstandingIssues === "") {
    outstandingIssues = "N/A";
  }
  if (customerItems === "") {
    customerItems = "N/A";
  }
  if (r7Items === "") {
    r7Items = "N/A";
  }

  callNotes = `-------------------------📞𝐂𝐚𝐥𝐥 𝐍𝐨𝐭𝐞𝐬📞-------------------------
𝐀𝐭𝐭𝐞𝐧𝐝𝐞𝐞𝐬:
${attendees.value}
-------------------------
𝐖𝐡𝐚𝐭 𝐖𝐚𝐬 𝐃𝐢𝐬𝐜𝐮𝐬𝐬𝐞𝐝?
${discussedItems}
-------------------------
𝐎𝐮𝐭𝐬𝐭𝐚𝐧𝐝𝐢𝐧𝐠 𝐈𝐬𝐬𝐮𝐞𝐬:
${outstandingIssues}
-------------------------
𝐂𝐮𝐬𝐭𝐨𝐦𝐞𝐫 - 𝐀𝐜𝐭𝐢𝐨𝐧𝐚𝐛𝐥𝐞 𝐈𝐭𝐞𝐦𝐬
${customerItems}
-------------------------
𝐑𝐚𝐩𝐢𝐝𝟕 - 𝐀𝐜𝐭𝐢𝐨𝐧𝐚𝐛𝐥𝐞 𝐈𝐭𝐞𝐦𝐬
${r7Items}`;

  navigator.clipboard.writeText(callNotes);

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

//========================FOR DEMO ONLY
// var i = 0;
// const txt1 = `Moe
// Larry 
// Curly`; /* The text */
// var txt2 = `Moe wants to know how to run a scan.
// Larry wants to know how to login.
// Curly was wondering if he should have been on the call.`;

// var txt3 = `Moe doesn't know how to run a scan.
// Larry doesn't know how to login.
// Curly doesn't know if he should've been part of the call.`;

// var txt4 = `Confirm if Curly should be involved in this.`;

// var txt5 = `See if I can get enablement for Moe and Larry`;

// const speed = 50; /* The speed/duration of the effect in milliseconds */

// function typeWriter() {
//   if (i < txt1.length) {
//     document.getElementById("attendees").innerHTML += txt1.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// }

// function typeWriter2() {
//   if (i < txt2.length) {
//     document.getElementById("discussed").innerHTML += txt2.charAt(i);
//     i++;
//     setTimeout(typeWriter2, speed);
//   }
// }

// function typeWriter3() {
//   if (i < txt3.length) {
//     document.getElementById("outstanding").innerHTML += txt3.charAt(i);
//     i++;
//     setTimeout(typeWriter3, speed);
//   }
// }

// function typeWriter4() {
//   if (i < txt4.length) {
//     document.getElementById("custItems").innerHTML += txt4.charAt(i);
//     i++;
//     setTimeout(typeWriter4, speed);
//   }
// }

// function typeWriter5() {
//   if (i < txt5.length) {
//     document.getElementById("rapid7Items").innerHTML += txt5.charAt(i);
//     i++;
//     setTimeout(typeWriter5, speed);
//   }
// }

// function sleep(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// async function allText() {
//   typeWriter();
//   await sleep(2000);
//   i = 0;
//   typeWriter2();
//   await sleep(8000);
//   i = 0;
//   typeWriter3();
//   await sleep(8000);
//   i = 0;
//   typeWriter4();
//   await sleep(3000);
//   i = 0;
//   typeWriter5();
// }

