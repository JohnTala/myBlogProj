
// Namespace for localStorage to avoid conflicts
const projectPrefix = 'myBlogProj_';

function getPosts() {
  return JSON.parse(localStorage.getItem(`${projectPrefix}posts`)) || [];
}

function savePosts(posts) {
  localStorage.setItem(`${projectPrefix}posts`, JSON.stringify(posts));
}

// Render posts
function renderPosts(term = '') {
  const container = document.querySelector('.preview');
  let posts = getPosts();

  // Filter by search term
  if (term) {
    posts = posts.filter(post =>
      post.title.toLowerCase().includes(term.toLowerCase()) ||
      post.body.toLowerCase().includes(term.toLowerCase())
    );
  }

  // Sort by newest
  posts.sort((a, b) => b.timestamp - a.timestamp);

  let template = '';
  posts.forEach(post => {
    template += `
      <div class="previewblog">
        <h2>${post.title}</h2>
        <p><small>Posted: ${new Date(post.timestamp).toLocaleDateString()}</small></p>
        <p><small>${post.likes} likes</small></p>
        <p>${post.body.slice(0, 200)}...</p>
        <a href="blogPost.html?id=${post.id}">Read more</a>
      </div>
    `;
  });

  container.innerHTML = template || '<p>No posts found.</p>';
}

window.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.querySelector('.search');
  const menuBtn = document.getElementById('menu');
  const navList = document.querySelector('.navigation');

  // Setup demo data if needed
  if (!localStorage.getItem(`${projectPrefix}posts`)) {
    const demoPosts = [{
      id: crypto.randomUUID(),
      title: 'Welcome to My Blog',
      body: 'This is a demo post to help you get started with your blog project. Edit or delete it to start fresh!',
      timestamp: Date.now(),
      likes: 0
    }];
    savePosts(demoPosts);
  }

  renderPosts();

  // Search handler
  if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      renderPosts(searchForm.searchword.value.trim());
    });
  }

  // Hamburger menu handler
  if (menuBtn && navList) {
    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('show');
      navList.classList.toggle('show');
    });
  }

  // Footer info
  document.getElementById("currentYear").textContent = new Date().getFullYear();
  document.getElementById("lastModifiedDate").textContent = "Last updated: " + document.lastModified;
});
