document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("reviewForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const rating = form.rating.value;
    const message = form.message.value.trim();

    if (!name || !email || !rating || !message) {
      alert("Please fill in all fields.");
      return;
    }

    const review = { name, email, rating, message, timestamp: Date.now() };

    // Get existing reviews from localStorage
    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

    // Add the new review
    reviews.unshift(review);

    // Save back to localStorage
    localStorage.setItem("reviews", JSON.stringify(reviews));

    // Optional: Redirect to display page
    window.location.href = "display.html";
  });

  // Show the current year in the footer
let year = new Date().getFullYear();
document.getElementById("currentYear").textContent = year;

// Show the date the page was last modified
let lastModified = document.lastModified;
document.getElementById("lastModifiedDate").textContent = "Last updated: " + lastModified;
});
