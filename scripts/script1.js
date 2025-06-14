

const container = document.querySelector('.preview');
const searchForm = document.querySelector('.search');

const renderPosts = async (term) => {
  console.log(term);
  let uri = 'http://localhost:3000/posts?_sort=likes&_order=desc';
    if (term) {
    uri += `&q=${term}`
  }

  const res = await fetch(uri);
  const posts = await res.json();
  

  let template = '';
  posts.forEach(post => {
    template += `
      <div class="previewblog">
        <h2>${post.title}</h2>
        <p><small>${post.likes} likes</small></p>
        <p>${post.body.slice(0, 200)}...</p>
        <a href="/blogPost.html?id=${post.id}">Read more</a>
      </div>
    `
  });

  container.innerHTML = template;
}

//search
 searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(searchForm.searchword.value)
  renderPosts(searchForm.searchword.value.trim());
 })

window.addEventListener('DOMContentLoaded', () => renderPosts());
