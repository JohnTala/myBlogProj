
  document.addEventListener("DOMContentLoaded", () => {
    const reviewList = document.getElementById("reviewList");
    if (!reviewList) return;

    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

    if (reviews.length === 0) {
      reviewList.innerHTML = "<p style='text-align:center;'>No reviews yet.</p>";
      return;
    }

    reviews.forEach((review) => {
      const div = document.createElement("div");
      div.className = "review-card";

      div.innerHTML = `
        <h3>${review.name}</h3>
        <small>${review.email}</small>
        <p><strong>Rating:</strong> ${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}</p>
        <p>${review.message}</p>
        <button class="delete">🗑️ Delete</button>
      `;

      // Handle deletion
      const deleteBtn = div.querySelector(".delete");
      deleteBtn.addEventListener("click", () => {
        reviews = reviews.filter(r => r.timestamp !== review.timestamp);
        localStorage.setItem("reviews", JSON.stringify(reviews));
        div.remove();

        if (reviews.length === 0) {
          reviewList.innerHTML = "<p style='text-align:center;'>No reviews yet.</p>";
        }
      });

      reviewList.appendChild(div);
    });
  });

