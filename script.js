function addTask() {
  const taskInput = document.getElementById('taskInput');
  const categoryInput = document.getElementById('categoryInput');
  const taskText = taskInput.value.trim();
  const category = categoryInput.value.trim() || 'Без категории';

  // Валидация
  if (taskText === '') {
    alert('Введите текст задачи!');
    return;
  }

  const taskList = document.getElementById('taskList');
  const li = document.createElement('li');

  // Чекбокс для отметки выполнения
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', function () {
    li.classList.toggle('completed', this.checked);
  });

  // Текст задачи
  const textSpan = document.createElement('span');
  textSpan.className = 'task-text';
  textSpan.textContent = taskText;

  // Категория
  const categorySpan = document.createElement('span');
  categorySpan.className = 'task-category';
  categorySpan.textContent = `[${category}]`;

  // Кнопка удаления
  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.textContent = 'Удалить';
  deleteBtn.addEventListener('click', function () {
    li.remove();
  });

  li.appendChild(checkbox);
  li.appendChild(textSpan);
  li.appendChild(categorySpan);
  li.appendChild(deleteBtn);

  taskList.appendChild(li);

  // Очищаем поля и возвращаем фокус
  taskInput.value = '';
  categoryInput.value = '';
  taskInput.focus();
}
