
// Namespace for localStorage
const projectPrefix = 'myBlogProj_';

function getPosts() {
  return JSON.parse(localStorage.getItem(`${projectPrefix}posts`)) || [];
}

function savePosts(posts) {
  localStorage.setItem(`${projectPrefix}posts`, JSON.stringify(posts));
}

// Form
const myForm = document.querySelector('form');

myForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const posts = getPosts();

  const newPost = {
    id: crypto.randomUUID(),
    title: myForm.title.value.trim(),
    body: myForm.post.value.trim(),
    likes: 0,
    timestamp: Date.now()
  };

  posts.push(newPost);
  savePosts(posts);

  window.location.replace('index.html');
});

// Footer
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModifiedDate").textContent = "Last updated: " + document.lastModified;
