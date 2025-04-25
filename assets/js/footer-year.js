document.addEventListener("DOMContentLoaded", function () {
  const yearSpan = document.getElementById("current-year");
  if (yearSpan) {
    const year = new Date().getFullYear();
    yearSpan.textContent = year;
  }
});