
// // Get ID from URL
// const id = new URLSearchParams(window.location.search).get('id');

// const btn = document.querySelector('.delete');
// const mySinglePost = document.querySelector('.singlePost');

// // Get posts from localStorage or empty array
// function getPosts() {
//   return JSON.parse(localStorage.getItem('posts')) || [];
// }

// // Show the selected post
// function singlePostFunct() {
//   const posts = getPosts();
//   const post = posts.find(p => p.id === id);

//   if (post) {
//     const template = `
//       <h3>${post.title}</h3>
//       <p>${post.body}</p>
//       <p><small>Likes: ${post.likes}</small></p>
//     `;
//     mySinglePost.innerHTML = template;
//   } else {
//     mySinglePost.innerHTML = `<p>Post not found.</p>`;
//     btn.style.display = 'none'; // Hide delete button if no post found
//   }
// }

// // Delete the selected post
// function deletePostFunct() {
//   let posts = getPosts();

//   // Remove the post
//   posts = posts.filter(p => p.id !== id);

//   // Save back to localStorage
//   localStorage.setItem('posts', JSON.stringify(posts));

//   // Redirect to homepage
//   window.location.replace('/index.html');
// }

// // Load post on page load
// window.addEventListener('DOMContentLoaded', singlePostFunct);
// btn.addEventListener('click', deletePostFunct);

// // Footer info
// document.getElementById("currentYear").textContent = new Date().getFullYear();
// document.getElementById("lastModifiedDate").textContent = "Last updated: " + document.lastModified;


const id = new URLSearchParams(window.location.search).get('id');

const btnDelete = document.querySelector('.delete');
const mySinglePost = document.querySelector('.singlePost');

// Load posts from localStorage
function getPosts() {
  return JSON.parse(localStorage.getItem('posts')) || [];
}

// Save posts back to localStorage
function savePosts(posts) {
  localStorage.setItem('posts', JSON.stringify(posts));
}

// Display single post
function singlePostFunct() {
  const posts = getPosts();
  const post = posts.find(p => p.id === id);

  if (post) {
    const template = `
      <h3>${post.title}</h3>
      <p>${post.body}</p>
      <p><small>Likes: <span id="likeCount">${post.likes}</span></small></p>
      <button class="like">👍 Like</button>
    `;
    mySinglePost.innerHTML = template;

    // Add Like button functionality
    const likeBtn = document.querySelector('.like');
    likeBtn.addEventListener('click', () => {
      post.likes = parseInt(post.likes) + 1;
      savePosts(posts);
      document.getElementById('likeCount').textContent = post.likes;
    });
  } else {
    mySinglePost.innerHTML = `<p>Post not found.</p>`;
    btnDelete.style.display = 'none';
  }
}

// Delete post
function deletePostFunct() {
  let posts = getPosts();
  posts = posts.filter(p => p.id !== id);
  savePosts(posts);
  window.location.replace('/index.html');
}

// Events
window.addEventListener('DOMContentLoaded', singlePostFunct);
btnDelete.addEventListener('click', deletePostFunct);

// Footer info
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModifiedDate").textContent = "Last updated: " + document.lastModified;
