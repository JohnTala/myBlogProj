

// // Namespace for localStorage to avoid conflicts
// const projectPrefix = 'myBlogProj_';

// function getPosts() {
//   return JSON.parse(localStorage.getItem(`${projectPrefix}posts`)) || [];
// }

// function savePosts(posts) {
//   localStorage.setItem(`${projectPrefix}posts`, JSON.stringify(posts));
// }

// // DOM elements
// const container = document.querySelector('.preview');
// const searchForm = document.querySelector('.search');

// // Render posts
// function renderPosts(term = '') {
//   let posts = getPosts();

//   // Filter by search term
//   if (term) {
//     posts = posts.filter(post =>
//       post.title.toLowerCase().includes(term.toLowerCase()) ||
//       post.body.toLowerCase().includes(term.toLowerCase())
//     );
//   }

//   // Sort by newest (using timestamp)
//   posts.sort((a, b) => b.timestamp - a.timestamp);

//   let template = '';
//   posts.forEach(post => {
//     template += `
//       <div class="previewblog">
//         <h2>${post.title}</h2>
//         <p><small>Posted: ${new Date(post.timestamp).toLocaleDateString()}</small></p>
//         <p><small>${post.likes} likes</small></p>
//         <p>${post.body.slice(0, 200)}...</p>
//         <a href="blogPost.html?id=${post.id}">Read more</a>
//       </div>
//     `;
//   });

//   container.innerHTML = template || '<p>No posts found.</p>';
// }

// // Search handler
// searchForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//   renderPosts(searchForm.searchword.value.trim());
// });

// window.addEventListener('DOMContentLoaded', () => renderPosts());
// // Footer
// document.getElementById("currentYear").textContent = new Date().getFullYear();
// document.getElementById("lastModifiedDate").textContent = "Last updated: " + document.lastModified;
// Namespace for localStorage to avoid conflicts
    const projectPrefix = 'myBlogProj_';

    function getPosts() {
      return JSON.parse(localStorage.getItem(`${projectPrefix}posts`)) || [];
    }

    function savePosts(posts) {
      localStorage.setItem(`${projectPrefix}posts`, JSON.stringify(posts));
    }

    // DOM elements
    const container = document.querySelector('.preview');
    const searchForm = document.querySelector('.search');

    // Render posts
    function renderPosts(term = '') {
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

    // Search handler
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      renderPosts(searchForm.searchword.value.trim());
    });

    // On load
    window.addEventListener('DOMContentLoaded', () => {
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
    });

    // Footer
    document.getElementById("currentYear").textContent = new Date().getFullYear();
    document.getElementById("lastModifiedDate").textContent = "Last updated: " + document.lastModified;
  