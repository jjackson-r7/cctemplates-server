// Function to load navigation menu
function loadNav() {
  fetch('navigation.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('mySidebar').innerHTML = html;
    })
    .catch(error => console.error('Error loading navigation:', error));
}

// Call loadNav() when the page is loaded
document.addEventListener('DOMContentLoaded', loadNav);