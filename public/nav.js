// Function to load navigation menu
function loadNav() {
  fetch('/navigation.html')
    .then(response => response.text())
    .then(html => {
      const sidebar = document.getElementById('mySidebar');
      sidebar.innerHTML = html;

      // Restore sidebar state from localStorage
      if (localStorage.getItem('sidebarOpen') === 'true') {
        sidebar.style.width = '250px';
        document.getElementById('main').style.marginLeft = '250px';

        // Restore open dropdowns
        try {
          const openDropdowns = JSON.parse(localStorage.getItem('openDropdowns') || '[]');
          openDropdowns.forEach(id => {
            const el = document.getElementById(id);
            if (el) el.style.display = 'block';
          });
        } catch (e) {}

        // Restore scroll position
        const savedScroll = localStorage.getItem('sidebarScroll');
        if (savedScroll) {
          setTimeout(() => { sidebar.scrollTop = parseInt(savedScroll, 10); }, 50);
        }
      } else {
        sidebar.style.width = '0';
      }

      // Save scroll position on every scroll
      sidebar.addEventListener('scroll', () => {
        localStorage.setItem('sidebarScroll', sidebar.scrollTop);
      });
    })
    .catch(error => console.error('Error loading navigation:', error));
}

// Dropdown toggle by id (used by onclick in navigation.html)
function toggleDropdown(id) {
  const el = document.getElementById(id);
  if (el) {
    const isOpening = el.style.display !== 'block';
    el.style.display = isOpening ? 'block' : 'none';
    if (isOpening) {
      setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 50);
    }
    // Save which dropdowns are open
    saveOpenDropdowns();
  }
}

// Save the IDs of all currently open dropdowns
function saveOpenDropdowns() {
  const open = [];
  document.querySelectorAll('.dropdown-container').forEach(el => {
    if (el.style.display === 'block' && el.id) {
      open.push(el.id);
    }
  });
  localStorage.setItem('openDropdowns', JSON.stringify(open));
}

// Open/close with localStorage persistence
function openNav() {
  document.getElementById('mySidebar').style.width = '250px';
  document.getElementById('main').style.marginLeft = '250px';
  localStorage.setItem('sidebarOpen', 'true');
}
function closeNav() {
  document.getElementById('mySidebar').style.width = '0';
  document.getElementById('main').style.marginLeft = '0';
  localStorage.setItem('sidebarOpen', 'false');
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

