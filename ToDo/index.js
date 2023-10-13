const inputTodo = document.querySelector('.input-todo')
const todoList = document.querySelector('.todo-list')

let todos = []

inputTodo.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addNewTodo(inputTodo.value)
        inputTodo.value = ''
    }
})

function addNewTodo(todo) {
    const newId = crypto.randomUUID()
    todos.push({
        text: todo,
        itemId: newId
    })
    const listItem = document.createElement('li')
    listItem.innerHTML = `
        <div class="list-item-text">${todo}</div>
        <div>
            <button class="edit-list-item">&#10000;</button>
            <button class="delete-list-item">&#10060</button>
        </div>
    `
    const deleteBtn = listItem.querySelector('.delete-list-item');
    deleteBtn.addEventListener('click', () => {
        const itemId = listItem.getAttribute('data-itemid')
        todos = todos.filter((todo) => todo.itemId !== itemId)
        listItem.remove()
    })
    const editBtn = listItem.querySelector('.edit-list-item')
    editBtn.addEventListener('click', () => {
        const text = listItem.querySelector('.list-item-text').innerText;
        openEditListItemModal(text, newId)
    })
    listItem.setAttribute('class', 'list-item')
    listItem.setAttribute('data-itemid', newId)
    todoList.appendChild(listItem)
}

function openEditListItemModal(text, itemId) {
    const todosApp = document.querySelector('.todos-app')
    const modal = document.createElement('div')
    modal.setAttribute('class', 'edit-list-item-modal')
    modal.innerHTML = ` <div class="modal-container">
                            <h4>Edit your TODO</h4>
                            <div>
                                <input class="edit-list-item-input" type="text">
                                <button class="edit-list-item-submit-btn">Submit</button>
                            </div>
                       </div>`
    const input = modal.querySelector('.edit-list-item-input')
    input.value = text
    const submitBtn = modal.querySelector('.edit-list-item-submit-btn');
    submitBtn.addEventListener('click', () => {
        const todo = todos.find((todo) => todo.itemId === itemId)
        todo.text = input.value
        const todoList = Array.from(document.querySelector('.todo-list-wrapper').querySelector('.todo-list').children)
        const todoInDOM = todoList.find((todo) => {
            return todo.getAttribute('data-itemid') === itemId
        })
        todoInDOM.querySelector('.list-item-text').innerText = input.value;
        modal.remove()
    })

    todosApp.appendChild(modal)

}