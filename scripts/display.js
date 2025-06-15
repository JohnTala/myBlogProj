
// Namespace for localStorage
const projectPrefix = 'myBlogProj_';

function getReviews() {
  return JSON.parse(localStorage.getItem(`${projectPrefix}reviews`)) || [];
}

document.addEventListener("DOMContentLoaded", () => {
  const reviewList = document.getElementById("reviewList");
  let reviews = getReviews();

  if (reviews.length === 0) {
    reviewList.innerHTML = "<p style='text-align:center;'>No reviews yet.</p>";
    return;
  }

  reviews.forEach((review, index) => {
    const div = document.createElement("div");
    div.className = "review-card";

    div.innerHTML = `
      <h3>${review.name}</h3>
      <small>${review.email}</small>
      <p><strong>Rating:</strong> ${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}</p>
      <p>${review.message}</p>
      <button class="delete">Delete</button>
    `;

    div.querySelector(".delete").addEventListener("click", () => {
      reviews = reviews.filter(r =>
        !(r.name === review.name && r.email === review.email && r.message === review.message)
      );

      localStorage.setItem(`${projectPrefix}reviews`, JSON.stringify(reviews));
      div.remove();

      if (reviews.length === 0) {
        reviewList.innerHTML = "<p style='text-align:center;'>No reviews yet.</p>";
      }
    });

    reviewList.appendChild(div);
  });
});
