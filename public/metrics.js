"use strict";

let currentSort = { column: null, asc: true };
let metricsData = [];

window.addEventListener("DOMContentLoaded", () => {
  fetch("/metrics")
    .then(res => {
      if (!res.ok) throw new Error("Network response was not OK");
      return res.json();
    })
    .then(data => {
      metricsData = Object.entries(data);
      renderTable(metricsData);
    })
    .catch(err => {
      console.error("Failed to load metrics:", err);
      const tbody = document.querySelector("#metricsTable tbody");
      tbody.innerHTML = `<tr><td colspan="2">Error loading metrics</td></tr>`;
    });
});

function renderTable(data) {
  const tbody = document.querySelector("#metricsTable tbody");
  tbody.innerHTML = "";
  data.forEach(([template, count]) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${template}</td><td>${count}</td>`;
    tbody.appendChild(tr);
  });
}

function sortTable(columnIndex) {
  const isAscending = currentSort.column === columnIndex ? !currentSort.asc : true;
  currentSort = { column: columnIndex, asc: isAscending };

  metricsData.sort((a, b) => {
    const valA = columnIndex === 0 ? a[0].toLowerCase() : a[1];
    const valB = columnIndex === 0 ? b[0].toLowerCase() : b[1];

    if (valA < valB) return isAscending ? -1 : 1;
    if (valA > valB) return isAscending ? 1 : -1;
    return 0;
  });

  renderTable(metricsData);
}

