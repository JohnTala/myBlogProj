

  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("reviewForm");

    if (!form) return; // Safeguard if form doesn't exist

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

      const review = {
        name,
        email,
        rating,
        message,
        timestamp: Date.now()
      };

      // Get existing reviews or initialize empty array
      let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

      // Add new review to the beginning
      reviews.unshift(review);

      // Save updated reviews back to localStorage
      localStorage.setItem("reviews", JSON.stringify(reviews));

      // Optional: Navigate to display page
      window.location.href = "display.html";
    });

    // Update footer
    const year = new Date().getFullYear();
    const lastModified = document.lastModified;

    const yearElem = document.getElementById("currentYear");
    const modifiedElem = document.getElementById("lastModifiedDate");

    if (yearElem) yearElem.textContent = year;
    if (modifiedElem) modifiedElem.textContent = "Last updated: " + lastModified;
  });
