// Находим элементы на странице
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// При клике на кнопку "Добавить"
addButton.addEventListener('click', () => {
    // Получаем текст задачи и удаляем лишние пробелы
    const taskText = taskInput.value.trim();

    // Если текст пустой — не добавляем задачу
    if (taskText === '') return;

    // Создаем элемент списка <li>
    const li = document.createElement('li');
    li.textContent = taskText;

    // Создаем кнопку удаления
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Удалить';
    deleteButton.className = 'delete';

    // При клике на кнопку — удаляем задачу
    deleteButton.onclick = () => li.remove();

    // Добавляем кнопку внутрь задачи, задачу — в список
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    // Очищаем поле ввода
    taskInput.value = '';
});