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

// many elements
var books = document.querySelectorAll("#book-list li .name");
console.log(books);

// can use arrya methods directly on a Nodelist
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
  book.textContent = "- book title";
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
