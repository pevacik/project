const todoInput = document.querySelector('.todo-input');
const todoAddButton = document.querySelector('.todo-add-button');
const todoList = document.querySelector('.todo-list');
const todolistDone = document.querySelector('.todo-list-done');
const todoDate = document.querySelector('.todo-date');

function done(name) {
    const todoitem = document.createElement('li');
    todoitem.classList.add('todo-list-done_item');
    todoitem.textContent = name;
    todolistDone.append(todoitem);
}

function add(name, date) {
    const todoitem = document.createElement('li');
    todoitem.classList.add('todo-item');
    todoitem.innerHTML = `
    <h2>${name}</h2>
    <h2>${date}</h2>
    <button class="todo-delete-button button">Удалить</button>
    <button class="todo-complete-button button">Выполнить</button>
    <button class="todo-edit-button button">Изменить</button>
    `;
    todoList.append(todoitem);
    todoInput.value = '';
    todoDate.value = '';
    todoitem.querySelector('.todo-delete-button').addEventListener('click', () => {
        todoitem.remove();
    });
    todoitem.querySelector('.todo-complete-button').addEventListener('click', () => {
        done(todoitem.querySelector('h2').textContent);
        todoitem.remove();
    });
    todoitem.querySelector('.todo-edit-button').addEventListener('click', () => {
        todoInput.value = todoitem.querySelector('h2').textContent;
        todoitem.remove();
    });
}


todoAddButton.addEventListener('click', () => {
    add(todoInput.value, todoDate.value);
});