

  
  document.addEventListener("DOMContentLoaded", () => {
  const myForm = document.querySelector("form");

  if (!myForm) return;

  // Initialize posts from localStorage or default to empty
  let posts = JSON.parse(localStorage.getItem("posts")) || [];

  myForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const title = myForm.title.value.trim();
    const body = myForm.post.value.trim();

    if (!title || !body) {
      alert("Please fill in both title and post content.");
      return;
    }

    const newPost = {
  id: crypto.randomUUID(),
  title,
  body,
  likes: 0,
  timestamp: Date.now() // <-- This tracks when the post was created
};


    posts.push(newPost);

    // Save updated posts to localStorage
    localStorage.setItem("posts", JSON.stringify(posts));

    // Redirect to homepage where the post will be shown
    window.location.href = "/index.html";
  });

  // Footer content
  document.getElementById("currentYear").textContent = new Date().getFullYear();
  document.getElementById("lastModifiedDate").textContent =
    "Last updated: " + document.lastModified;
});
