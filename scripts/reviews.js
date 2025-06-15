
// Namespace for localStorage
const projectPrefix = 'myBlogProj_';

function getReviews() {
  return JSON.parse(localStorage.getItem(`${projectPrefix}reviews`)) || [];
}

function saveReviews(reviews) {
  localStorage.setItem(`${projectPrefix}reviews`, JSON.stringify(reviews));
}

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
    const reviews = getReviews();

    reviews.unshift(review); // newest on top
    saveReviews(reviews);

    // Redirect to display page
    window.location.href = "display.html";
  });

  // Footer
  document.getElementById("currentYear").textContent = new Date().getFullYear();
  document.getElementById("lastModifiedDate").textContent = "Last updated: " + document.lastModified;
});
