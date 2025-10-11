const bookmarks = document.getElementById("bookmarks");
const btn = document.getElementById("btn");
const delete_btn = document.getElementById("delete-btn");
let links = document.getElementById("links");

let myBookmarks = [];

handleLocaltorage();

function handleLocaltorage() {
  if (JSON.parse(localStorage.getItem("bookmarks"))) {
    myBookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    renderList();
  }
}

btn.addEventListener("click", () => {
  if (bookmarks.value) {
    myBookmarks.push(bookmarks.value);
    console.log(myBookmarks);
    renderList();
    addLocalstorage();
    bookmarks.value = "";
  }
});

delete_btn.addEventListener("dblclick", () => {
  myBookmarks = [];
  renderList();
  localStorage.clear();
});

function renderList() {
  let listItem = "";
  for (let i = 0; i < myBookmarks.length; i++) {
    listItem += `
            <li>
                <a href="#" target="_blank">${myBookmarks[i]}</a>
            </li>`;
  }
  links.innerHTML = listItem;
}

function addLocalstorage() {
  localStorage.setItem("bookmarks", JSON.stringify(myBookmarks));
}
function fromLocalstorage() {
  console.log(JSON.parse(localStorage.getItem("bookmarks")));
}
fromLocalstorage();
