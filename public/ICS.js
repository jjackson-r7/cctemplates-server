"use strict";

/**
 * Copies the content of the form to the clipboard, formatted for Jira.
 */
function myFunction() {
  try {
    /**
     * Gets the value of a field and formats it with a label and a code block.
     * @param {string} id - The ID of the textarea element.
     * @param {string} label - The label for the field.
     * @returns {string} The formatted string for the field.
     */
    const field = (id, label) => {
      const el = document.getElementById(id);
      const value = el ? el.value.trim() : "";
      return value ? `**${label}:**\n\`\`\`\n${value}\n\`\`\`\n` : "";
    };

    /**
     * Gets the value of the URL field and formats it without a code block.
     * This allows the URL to be clickable in platforms like Jira.
     * @param {string} id - The ID of the textarea element.
     * @param {string} label - The label for the field.
     * @returns {string} The formatted string for the URL field.
     */
    const urlField = (id, label) => {
        const el = document.getElementById(id);
        const value = el ? el.value.trim() : "";
        // Return the value without the code block formatting
        return value ? `**${label}:**\n${value}\n` : "";
    };


    /**
     * Gets the state of a checkbox and returns a corresponding string.
     * @param {string} id - The ID of the checkbox element.
     * @param {string} yes - The string to return if checked.
     * @param {string} no - The string to return if not checked.
     * @returns {string} The resulting string based on the checkbox state.
     */
    const boolField = (id, yes, no) =>
      document.getElementById(id).checked ? `**${yes}**` : `**${no}**`;

    // Construct the final output string
    const output =
      field("Install", "Installation Type") +
      field("Version", "Customer Version") +
      field("Org", "Customer ORG ID/ORG Name") +
      field("Cloud", "Cloud Account Type")+
      field("Occurred", "First Occurred Date") +
      field("Summary", "Problem Statement") +
      field("Troubleshoot", "Troubleshooting Steps Followed") +
      field("Expected", "Expected Behavior") +
      field("Workaround", "Is there a workaround?") +
      urlField("Additional Links", "Additional Links") + // Use the special urlField function here
      field("requestedOutcomeFromEngineering", "Requested Outcome from Engineering") + "\n" +
      boolField("logchk", "Logs are added", "Logs are not not added") + "\n" +
      boolField("harchk", "HAR File is added", "HAR File is not added") + "\n" +
      boolField("recordingchk", "Recording of issue is added" , "Recording of issue is not added") + "\n" +
      boolField("screenchk", "Screenshots are added", "Screenshots are not added");

    // Copy the output to the clipboard
    navigator.clipboard.writeText(output).then(() => {
      document.getElementById("myTooltip").innerText = "Copied!";
      alert("Copied to clipboard. Ready to paste in Jira.");

      // Optional: Send a metric update
      fetch("/increment/PlatformSSO", { method: "POST" })
        .then(res => res.json())
        .then(data => console.log(data.message))
        .catch(err => console.error("Metric update failed:", err));
    });
  } catch (err) {
    console.error("Copy failed:", err);
    alert("Error occurred. Check the console.");
  }
}

/**
 * Resets the tooltip text when the mouse moves away from the copy button.
 */
function outFunc() {
  document.getElementById("myTooltip").innerText = "Copy to clipboard";
}

/**
 * Resets all form fields to their default values.
 */
function resetForm() {
  document.querySelectorAll("textarea, input[type='text'], input[type='checkbox']").forEach(el => {
    if (el.type === "checkbox") {
        el.checked = false;
    }
    else if (el.id !== "dateReported") { // Assuming 'dateReported' might be a field to preserve
        el.value = "";
    }
  });
  outFunc(); // Reset the tooltip text
}

/**
 * Opens the sidebar navigation.
 */
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/**
 * Closes the sidebar navigation.
 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
