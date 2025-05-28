"use strict";


//This is the main function we will be using to ingest the data the user put into the page and format it.
// For every input you will defien a variable using con <variableName> = document.getElementById("htmlid")
// the htmlid in the document.getElementById() is the id we defined for the text box in the .html file
// you will then make a second variable to convert it into html, usually named html<variableName>
function myFunction() {
  let falsePositiveNegative;

  const summarySI = document.getElementById("summarySI");
  // you do the jira markdown formatting in the string below
  // for neW lines us \n
  const hmtlsummary= `**Summary:**\n${summarySI.value}\n`;
  
  const orgName = document.getElementById("orgName");
  const htmlorgname = `**--Org Name:** ${orgName.value}\n`;

  const orgId = document.getElementById("orgId");
  const htmlorgid = `**--Org ID:** ${orgId.value}\n`;

  const orgRegion = document.getElementById("orgRegion");
  const htmlorgregion = `**--Org Region:** ${orgRegion.value}\n`;

  const logSnippet = document.getElementById("logSnippet");
  // This is an example of how to do a code block
  // use \ as an escape character on ` as it will close the string otherwise
  // thus for code blocks that need ` 3 times you do \`\`\`
  const htmllogsnippet = `**Log Snippet for issue:**\n\`\`\`\n${logSnippet.value}\n\`\`\`\n`;

  //This variable is for checkboxes and loads in their status, jsut liek text boxes it used the id we defined in the html doc
  const logcheck = document.getElementById("logcheck");
  let htmllogcheck = "";
  
  //This checks for the toggle status of the checkbox and changes the output text accordingly
  if (logcheck.checked) {
    htmllogcheck = "**Orchestrator logs have been attached to the case**";
  } else {
    htmllogcheck = "**Orchestrator logs have not been attached to the case**";
  }

  // This builds the output variable we are given as an end user, make sure to include all the html variables you defined
  // You will also want them to be in the format you expect for your output
  falsePositiveNegative = `${hmtlsummary}
  ${htmlorgname}
  ${htmlorgid}
  ${htmlorgregion}
  ${htmllogsnippet}
  ${htmllogcheck}`;

  // These 3 lines always need to be included to allow the button to fucntion
  navigator.clipboard.writeText(falsePositiveNegative);

  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied!";
}

// Evertyhting from here downwards should always be included as it defines the copy box funcionality
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

