document.addEventListener("DOMContentLoaded", () => {
  const darkModeToggle = document.getElementById("darkModeToggle");
  const darkModeStylesheet = document.getElementById("darkModeStylesheet");

  // Check localStorage for dark mode preference
  const isDarkMode = localStorage.getItem("darkMode") === "true";
  darkModeToggle.checked = isDarkMode;
  if (isDarkMode) {
    darkModeStylesheet.href = "dark-mode.css";
  }

  // Toggle dark mode on checkbox change
  darkModeToggle.addEventListener("change", () => {
    if (darkModeToggle.checked) {
      darkModeStylesheet.href = "dark-mode.css";
      localStorage.setItem("darkMode", "true");
    } else {
      darkModeStylesheet.href = "";
      localStorage.setItem("darkMode", "false");
    }
  });
});

