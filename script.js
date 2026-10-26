function addTask() {
  const taskInput = document.getElementById('taskInput');
  const categoryInput = document.getElementById('categoryInput');
  const deadlineInput = document.getElementById('deadlineInput');

  const taskText = taskInput.value.trim();
  const category = categoryInput.value.trim() || 'Без категории';
  const deadline = deadlineInput.value; // "YYYY-MM-DD" или ""

  if (taskText === '') {
    alert('Введите текст задачи!');
    return;
  }

  const taskList = document.getElementById('taskList');
  const li = document.createElement('li');

  // Чекбокс "выполнено"
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

  // Дедлайн
  const deadlineSpan = document.createElement('span');
  deadlineSpan.className = 'task-deadline';
  if (deadline) {
    const date = new Date(deadline);
    deadlineSpan.textContent = 'до ' + date.toLocaleDateString('ru-RU');

    // Если дата уже прошла — подсвечиваем красным
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (date < today) {
      deadlineSpan.classList.add('overdue');
    }
  } else {
    deadlineSpan.textContent = 'без дедлайна';
  }

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
  li.appendChild(deadlineSpan);
  li.appendChild(deleteBtn);

  taskList.appendChild(li);

  // Очистка полей
  taskInput.value = '';
  categoryInput.value = '';
  deadlineInput.value = '';
  taskInput.focus();
}
