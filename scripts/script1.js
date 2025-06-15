

  document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".preview");
  const searchForm = document.querySelector(".search");

  if (!container || !searchForm) return;

  const getPosts = () => JSON.parse(localStorage.getItem("posts")) || [];

  function renderPosts(term = "") {
    let posts = getPosts();

    // Filter if search term exists
    if (term) {
      const lowerTerm = term.toLowerCase();
      posts = posts.filter(post =>
        post.title.toLowerCase().includes(lowerTerm) ||
        post.body.toLowerCase().includes(lowerTerm)
      );
    }

    // Sort by newest timestamp (most recent first)
     posts.sort((a, b) => b.timestamp - a.timestamp);

    // Render
    if (posts.length === 0) {
      container.innerHTML = "<p style='text-align:center;'>No posts found.</p>";
      return;
    }

    let template = "";

    posts.forEach(post => {

      const date=new Date(post.timestamp).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })
      template += `
        <div class="previewblog">
          <h2>${post.title}</h2>
          <p><small>Posted: ${date}</small></p>
          <p><small>${post.likes} likes</small></p>
          <p>${post.body.slice(0, 200)}...</p>
          <a href="/blogPost.html?id=${post.id}">Read more</a>
        </div>
      `;
    });

    container.innerHTML = template;
  }

  // On initial load
  renderPosts();

  // On search
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const term = searchForm.searchword.value.trim();
    renderPosts(term);
  });
});
