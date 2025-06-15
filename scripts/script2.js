
const projectPrefix = 'myBlogProj_';

    function getPosts() {
      return JSON.parse(localStorage.getItem(`${projectPrefix}posts`)) || [];
    }

    function savePosts(posts) {
      localStorage.setItem(`${projectPrefix}posts`, JSON.stringify(posts));
    }

    const id = new URLSearchParams(window.location.search).get('id');
    const btnDelete = document.querySelector('.delete');
    const mySinglePost = document.querySelector('.singlePost');

    function singlePostFunct() {
      const posts = getPosts();
      const post = posts.find(p => p.id === id);

      if (post) {
        const template = `
          <h3>${post.title}</h3>
          <p>${post.body}</p>
          <p><small>Posted: ${new Date(post.timestamp).toLocaleDateString()}</small></p>
          <p><small>Likes: <span id="likeCount">${post.likes}</span></small></p>
          <button class="like">👍 Like</button>
        `;
        mySinglePost.innerHTML = template;

        document.querySelector('.like').addEventListener('click', () => {
          post.likes = parseInt(post.likes) + 1;
          savePosts(posts);
          document.getElementById('likeCount').textContent = post.likes;
        });
      } else {
        mySinglePost.innerHTML = `<p>Post not found.</p>`;
        btnDelete.style.display = 'none';
      }
    }

    function deletePostFunct() {
      let posts = getPosts();
      posts = posts.filter(p => p.id !== id);
      savePosts(posts);
      window.location.replace('index.html');
    }

    window.addEventListener('DOMContentLoaded', singlePostFunct);
    btnDelete.addEventListener('click', deletePostFunct);

    // Footer
    document.getElementById("currentYear").textContent = new Date().getFullYear();
    document.getElementById("lastModifiedDate").textContent = "Last updated: " + document.lastModified;
  