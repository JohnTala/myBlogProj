const id=new URLSearchParams(window.location.search).get('id')

const btn = document.querySelector('.delete');
const mySinglePost = document.querySelector('.singlePost');

window.addEventListener('DOMContentLoaded', () => { singlePostFunct() });

async function singlePostFunct() {
    const resp = await fetch(`http://localhost:3000/posts/${id}`);
    const singlePost = await resp.json();
    //console.log(singlePost);
    const template = `
        <h3>${singlePost.title}</h3>
        <p>${singlePost.body}</p>
    `
    mySinglePost.innerHTML = template;
}

btn.addEventListener('click', () => { deletePostFunct() });

async function deletePostFunct() {
    await fetch(`http://localhost:3000/posts/${id}`, {
        method:"DELETE"
    });

    window.location.replace('/index.html');

}
// Show the current year in the footer
let year = new Date().getFullYear();
document.getElementById("currentYear").textContent = year;

// Show the date the page was last modified
let lastModified = document.lastModified;
document.getElementById("lastModifiedDate").textContent = "Last updated: " + lastModified;