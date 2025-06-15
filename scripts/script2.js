
// // Namespace for localStorage
// const projectPrefix = 'myBlogProj_';

// function getPosts() {
//   return JSON.parse(localStorage.getItem(`${projectPrefix}posts`)) || [];
// }

// function savePosts(posts) {
//   localStorage.setItem(`${projectPrefix}posts`, JSON.stringify(posts));
// }

// const id = new URLSearchParams(window.location.search).get('id');
// const btnDelete = document.querySelector('.delete');
// const mySinglePost = document.querySelector('.singlePost');

// function singlePostFunct() {
//   const posts = getPosts();
//   const post = posts.find(p => p.id === id);

//   if (post) {
//     const template = `
//       <h3>${post.title}</h3>
//       <p>${post.body}</p>
//       <p><small>Posted: ${new Date(post.timestamp).toLocaleDateString()}</small></p>
//       <p><small>Likes: <span id="likeCount">${post.likes}</span></small></p>
//       <button class="like">👍 Like</button>
//     `;
//     mySinglePost.innerHTML = template;

//     document.querySelector('.like').addEventListener('click', () => {
//       post.likes = parseInt(post.likes) + 1;
//       savePosts(posts);
//       document.getElementById('likeCount').textContent = post.likes;
//     });
//   } else {
//     mySinglePost.innerHTML = `<p>Post not found.</p>`;
//     btnDelete.style.display = 'none';
//   }
// }

// function deletePostFunct() {
//   let posts = getPosts();
//   posts = posts.filter(p => p.id !== id);
//   savePosts(posts);
//   window.location.replace('index.html');
// }

// window.addEventListener('DOMContentLoaded', singlePostFunct);
// btnDelete.addEventListener('click', deletePostFunct);

// // Footer
// document.getElementById("currentYear").textContent = new Date().getFullYear();
// document.getElementById("lastModifiedDate").textContent = "Last updated: " + document.lastModified;


  // document.addEventListener("DOMContentLoaded", () => {
  //   const params = new URLSearchParams(window.location.search);
  //   const postId = params.get("id");

  //   if (!postId) {
  //     document.body.innerHTML = "<h2>Invalid or missing post ID.</h2>";
  //     return;
  //   }

  //   const posts = JSON.parse(localStorage.getItem("myBlogProj_posts")) || [];
  //   const post = posts.find(p => p.id === postId);

  //   if (!post) {
  //     document.body.innerHTML = "<h2>Post not found.</h2>";
  //     return;
  //   }

  //   // Display the post
  //   const container = document.getElementById("postContainer");
  //   container.innerHTML = `
  //     <h1>${post.title}</h1>
  //     <p><em>By ${post.author}</em></p>
  //     <p>${post.content}</p>
  //   `;
  // });

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
  