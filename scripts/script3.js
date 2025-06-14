
const myForm = document.querySelector('form');

myForm.addEventListener('submit', addPostFunct);

async function addPostFunct(e) {
    e.preventDefault();
    //get the structure of the post
    const myObjPost = {
        title: myForm.title.value,
        body: myForm.post.value,
        likes:0
    };

    await fetch('http://localhost:3000/posts', {
        method: "POST",
        body: JSON.stringify(myObjPost),
        headers:{'content-type':'application/json'}
    })

    window.location.replace('/index.html');
}
// Show the current year in the footer
let year = new Date().getFullYear();
document.getElementById("currentYear").textContent = year;

// Show the date the page was last modified
let lastModified = document.lastModified;
document.getElementById("lastModifiedDate").textContent = "Last updated: " + lastModified;