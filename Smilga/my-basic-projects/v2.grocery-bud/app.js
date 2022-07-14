const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const clear = document.querySelector(".clear-items");



// const todo = 'test'

const generateTemplate = (todo) => {
  // const el = document.createElement('div');
  // el.classList.add("grocery-item");
    const html = `
  <li><span>${todo}</span><a href="#"><i class="fa-solid fa-trash delete"></i></a></li>
  `;
    list.innerHTML += html;
  };
  
  // add todos
  addForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const todo = addForm.addInput.value.trim();
  
    if (todo.length) {
      generateTemplate(todo);
      addForm.reset();
    }
  });

  // delete todo
  list.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
      e.target.parentElement.parentElement.parentElement.remove();
    }
  });

  // clear items
// clear.addEventListener("click", function(e) {
//     e.preventDefault();
//     list.innerHTML = "";
// })

// clear items
function clearItems() {
  const items = document.querySelectorAll(".grocery-item");

  if (items.length > 0) {
    items.forEach(function (item) {
      list.removeChild(item);
    });
  }
  // container.classList.remove("show-container");
  // displayAlert("empty list", "danger");
  // setBackToDefault(); // useful when editing
  // localStorage.removeItem("list");
}