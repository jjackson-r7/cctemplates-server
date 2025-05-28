// Function to load navigation menu
function loadNav() {
  fetch('/navigation.html')
    .then(response => response.text())
    .then(html => {
      const sidebar = document.getElementById('mySidebar');
      sidebar.innerHTML = html;
      sidebar.style.width = '0'; // Ensure it's collapsed on load
      addDropdownFunctionality();
    })
    .catch(error => console.error('Error loading navigation:', error));
}

// Dropdown toggle
function addDropdownFunctionality() {
  document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', function () {
      const dropdownContent = this.nextElementSibling;
      if (dropdownContent && dropdownContent.classList.contains('dropdown-container')) {
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
      }
    });
  });
}

// Open/close
function openNav() {
  document.getElementById('mySidebar').style.width = '250px';
  document.getElementById('main').style.marginLeft = '250px';
}
function closeNav() {
  document.getElementById('mySidebar').style.width = '0';
  document.getElementById('main').style.marginLeft = '0';
}

document.addEventListener('DOMContentLoaded', loadNav);

// Dark mode toggle logic
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("darkModeToggle");
  const body = document.body;
  const mainBody = document.querySelector(".mainBody");
  const sidebar = document.querySelector(".sidebar");
  const boxTexts = document.querySelectorAll(".boxText");

  // Load saved preference
  const darkModeEnabled = localStorage.getItem("darkMode") === "true";
  if (darkModeEnabled) {
    body.classList.add("dark-mode");
    mainBody.classList.add("dark-mode");
    sidebar.classList.add("dark-mode");
    boxTexts.forEach((box) => box.classList.add("dark-mode"));
    toggle.checked = true;
  }

  // Toggle dark mode
  toggle.addEventListener("change", () => {
    if (toggle.checked) {
      body.classList.add("dark-mode");
      mainBody.classList.add("dark-mode");
      sidebar.classList.add("dark-mode");
      boxTexts.forEach((box) => box.classList.add("dark-mode"));
      localStorage.setItem("darkMode", "true");
    } else {
      body.classList.remove("dark-mode");
      mainBody.classList.remove("dark-mode");
      sidebar.classList.remove("dark-mode");
      boxTexts.forEach((box) => box.classList.remove("dark-mode"));
      localStorage.setItem("darkMode", "false");
    }
  });
});

