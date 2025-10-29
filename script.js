// Define routes and their HTML content
const routes = {
  home: `
    <h1>Welcome Home!</h1>
    <p>This is the home page of our simple single-page application.</p>
  `,
  about: `
    <h1>About Us</h1>
    <p>We are building a simple SPA using vanilla JavaScript!</p>
  `,
  contact: `
    <h1>Contact</h1>
    <p>Reach us at <a href="mailto:info@example.com">info@example.com</a>.</p>
  `,
};

// Function to handle route changes
function router() {
  const hash = window.location.hash.substring(1) || "home";
  const app = document.getElementById("app");
  app.innerHTML = routes[hash] || `<h1>404</h1><p>Page not found</p>`;
}

// Listen for hash changes and load content
window.addEventListener("hashchange", router);
window.addEventListener("load", router);
