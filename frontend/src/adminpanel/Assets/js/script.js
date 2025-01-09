document.addEventListener("DOMContentLoaded", () => {
  // Sidebar Toggle
  const sidebarToggle = document.querySelector("#sidebar-toggle");
  if (sidebarToggle) {
    sidebarToggle.addEventListener("click", function () {
      const sidebar = document.querySelector("#sidebar");
      if (sidebar) {
        // Toggle the 'collapse' class on the sidebar to show/hide it
        sidebar.classList.toggle("collapse");
      }
    });
  }

  // Theme Toggle
  const themeToggle = document.querySelector(".theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      toggleLocalStorage();
      toggleRootClass();
    });
  }

  // Toggle the 'data-bs-theme' attribute for light/dark mode
  function toggleRootClass() {
    const current = document.documentElement.getAttribute("data-bs-theme");
    const inverted = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-bs-theme", inverted);
  }

  // Toggle theme in LocalStorage
  function toggleLocalStorage() {
    if (isLight()) {
      localStorage.removeItem("light");
    } else {
      localStorage.setItem("light", "set");
    }
  }

  // Check if the theme is light from LocalStorage
  function isLight() {
    return localStorage.getItem("light");
  }

  // If light theme is stored in localStorage, apply it initially
  if (isLight()) {
    toggleRootClass();
  }
});
