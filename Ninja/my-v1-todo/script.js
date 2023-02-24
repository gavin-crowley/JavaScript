const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
// const addForm = document.querySelector(".search input")

const generateTemplate = (todo) => {
  const html = `
    <li><span>${todo}</span> <button class="delete">delete</button></li>
    `;
    list.innerHTML += html;
};

// add todos
addForm.addEventListener("submit", (e) => { 
    e.preventDefault()
    const todo = addForm.add.value.trim()

    if (todo.length) {
        generateTemplate(todo)
        addForm.reset()
    }
 })

 // delete todo
 list.addEventListener("click", (e) => { 
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.remove()
    }
  })
