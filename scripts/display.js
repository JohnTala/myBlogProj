


  document.addEventListener("DOMContentLoaded", () => {
    const reviewList = document.getElementById("reviewList");
    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

    // If no reviews
    if (reviews.length === 0) {
      reviewList.innerHTML = "<p style='text-align:center;'>No reviews yet.</p>";
      return;
    }

    // Show all reviews
    reviews.forEach((review) => {
      const div = document.createElement("div");
      div.className = "review-card";

      div.innerHTML = `
        <h3>${review.name}</h3>
        <small>${review.email}</small>
        <p><strong>Rating:</strong> ${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}</p>
        <p>${review.message}</p>
        <button class="delete">Delete</button>
      `;

      // Add delete button functionality
      const deleteBtn = div.querySelector(".delete");
      deleteBtn.addEventListener("click", () => {
        // Filter out this review by matching all fields
        reviews = reviews.filter(r =>
          r.name !== review.name ||
          r.email !== review.email ||
          r.message !== review.message
        );

        // Save updated reviews to localStorage
        localStorage.setItem("reviews", JSON.stringify(reviews));

        // Remove from the page
        div.remove();

        // Show message if no reviews left
        if (reviews.length === 0) {
          reviewList.innerHTML = "<p style='text-align:center;'>No reviews yet.</p>";
        }
      });

      reviewList.appendChild(div);
    });
  });


