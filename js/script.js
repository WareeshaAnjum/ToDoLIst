function addTask(text) {
  const item = document.createElement('div');
  item.className = 'task-item';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'todo';

  const span = document.createElement('span');
  span.textContent = text; // textContent, not innerHTML — no parsing risk

  item.appendChild(checkbox);
  item.appendChild(span);
  document.querySelector('.main').appendChild(item);
}