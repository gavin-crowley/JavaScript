const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");
const clearItems = document.querySelector(".clear-items");

const generateTemplate = (todo) => {
  const html = `
<li><span>${todo}</span> <button class="delete">delete</button></li>
`;
  list.innerHTML += html;
};

// add todos
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim();

  if (todo.length) {
    generateTemplate(todo);
    addForm.reset();
  }
});

// delete todo
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

// clear items
clearItems.addEventListener("click", (e) => {
  const itemList = list.childNodes
  console.log(itemList);
  // itemList.forEach(item => {
  //   item.removeChild(item)
  // })
    
  });
// })







