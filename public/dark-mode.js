document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("darkModeToggle");
  const isDarkMode = localStorage.getItem("darkMode") === "true";

  if (isDarkMode) {
    document.body.classList.add("dark-mode");
    toggle.checked = true;
  }

  toggle.addEventListener("change", () => {
    const darkModeEnabled = toggle.checked;
    document.body.classList.toggle("dark-mode", darkModeEnabled);
    localStorage.setItem("darkMode", darkModeEnabled);
  });
});

