const search = document.getElementById("search-books");
const bookList = document.getElementById("book-list");
console.log(search, bookList);

const titles = document.getElementsByClassName("title");
console.log(titles);

const lis = document.getElementsByTagName("li");
console.log(lis);

// Loop thru collections
for (let i = 0; i < titles.length; i++) {
  console.log(titles[i]);
}

// Convert collections to arrays
console.log(Array.isArray(titles));
console.log(Array.isArray(Array.from(titles)));

Array.from(titles).forEach(function (item) {
  console.log(item);
});

// querySelector
const wrap = document.querySelector("#wrapper");
console.log(wrap);

const wmf = document.querySelector("#book-list li:nth-child(2) .name");
console.log(wmf);

// many elements - QSA returns a nodelist
var books = document.querySelectorAll("#book-list li .name");
console.log(books);

// can use array methods directly on a Nodelist
// must convert HTMl collection to array
books.forEach(function (book) {
  console.log(book);
});

// Array.from(books).forEach(function(book) {
//     console.log(book);
// })

// Edit text and HTML
books.forEach(function (book) {
  console.log(book.textContent);
});

books.forEach(function (book) {
  // book.textContent = "- book title";
  book.textContent += "- book title"; // append
});

const bookList2 = document.getElementById("book-list");
console.log(bookList2.innerHTML);
// bookList2.innerHTML = '<h2>Books and more books...</h2>'
bookList2.innerHTML += "<p>This is how you add HTML</p>";

// Nodes
const banner = document.querySelector("#page-banner");

console.log("#page-banner node type is :", banner.nodeType);
console.log("#page-banner node name is :", banner.nodeName);
console.log("#page-banner has child nodes :", banner.hasChildNodes());

const clonedBanner = banner.cloneNode(true);
console.log(clonedBanner);

// Traversing DOM
const bookList3 = document.getElementById("book-list");
console.log("the parent node is ", bookList3.parentNode);
console.log("the parent element is ", bookList3.parentElement);
console.log(
  "the parent of the parent element is ",
  bookList3.parentElement.parentElement
);

// child nodes return line breaks as well
console.log(bookList3.childNodes);
// just return the child elements
console.log(bookList3.children);

// from sibling to sibling
const bookList4 = document.getElementById("book-list");
console.log("book-list next sibling is:", bookList4.nextSibling); // sibling node
console.log("book-list next element sibling is:", bookList4.nextElementSibling); // sibling element

console.log("book-list previous sibling is:", bookList4.previousSibling); // sibling node
console.log(
  "book-list previous element sibling is:",
  bookList4.previousElementSibling
); // sibling element

bookList4.previousElementSibling.querySelector("p").innerHTML +=
  "<br/> Too cool for everyone else";

// Events
var h2 = document.querySelector("#book-list h2");

h2.addEventListener("click", function (e) {
  console.log(e.target);
  console.log(e);
});

// var btns = document.querySelectorAll('#book-list .delete')
// console.log(btns);

// btns.forEach(function(btn) {
//   btn.addEventListener('click', function(e) {
//     const li = e.target.parentElement
//     li.parentNode.removeChild(li)
//   })
// })

// prevent default behavior
// const link = document.querySelector("#page-banner a");
// link.addEventListener("click", function (e) {
//   e.preventDefault();
//   console.log("navigation to", e.target.textContent, "was prevented");
// });

// event bubbling
// - bubbling of event up thru dom tree
// - always occurs unless prevented

// add listener to parent to avail of bubbling - delete books
const list = document.querySelector("#book-list ul");
console.log(list);
list.addEventListener("click", function (e) {
  if (e.target.className == "delete") {
    const li = e.target.parentElement;
    list.removeChild(li);
  }
});

// interacting with forms
console.log(document.forms);
console.log(document.forms[0]);
console.log(document.forms[1]);
console.log(document.forms["add-book"]);

// when you click a button element inside a form element,
// the form emits a submit event and the page is refreshed (e.preventDefault())

// add books
const addForm = document.forms["add-book"];
addForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const value = addForm.querySelector('input[type="text"]').value;
  // console.log(value);

  // create elements
  const li = document.createElement("li");
  const bookName = document.createElement("span");
  const deleteBtn = document.createElement("span");

  // add content
  bookName.textContent = value;
  deleteBtn.textContent = "delete";

  // add classes
  bookName.classList.add("name");
  deleteBtn.classList.add("delete");

  // append to document
  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  list.appendChild(li);
});


// list.style.color = "red"
// li.className = "test"




// Attributes
var book = document.querySelector('li:first-child .name')
console.log(book.getAttribute('class'));
book.setAttribute('class', 'test')
console.log(book);
book.hasAttribute('class')
book.removeAttribute('class')
book.setAttribute('class', 'name')


// Checkboxes and change events
// hide books
const hideBox = document.querySelector('#hide')
hideBox.addEventListener('change', function (e) {
  if (hideBox.checked) {
    list.style.display = 'none'
  } else {
    list.style.display = 'block' // 'inital'
  }
})


// filter books
const searchBar = document.forms['search-books'].querySelector('input')
searchBar.addEventListener('keyup', function (e) {
  const term = e.target.value.toLowerCase()
  const books = list.getElementsByTagName('li')
  Array.from(books).forEach(function (book) {
    const title = book.firstElementChild.textContent
    if (title.toLowerCase().indexOf(term) != -1) {
      book.style.display = 'block'
    } else {
      book.style.display = 'none'
    }
  })
})


// tabbed content
const tabs = document.querySelector('.tabs')
const panels = document.querySelectorAll('.panel')
tabs.addEventListener('click', function (e) {
  if (e.target.tagName == 'LI') {
    const targetPanel = document.querySelector(e.target.dataset.target)
    panels.forEach(function (panel) {
      if (panel == targetPanel) {
        panel.classList.add('active')
      } else {
        panel.classList.remove('active')
      }
    })
  }
})


// DOMContentLoaded event
// if you want to run script from head, can listen for this event
// see vid https://www.youtube.com/watch?v=G5Or47gPH-4&list=PL4cUxeGkcC9gfoKa5la9dsdCNpuey2s-V&index=18

// Summary Notes
// https://github.com/SanjayS5/Notes/blob/master/Query%20the%20DOM.js


















