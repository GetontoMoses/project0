const classNames = {
  TODO_ITEM: "todo-container",
  TODO_CHECKBOX: "todo-checkbox",
  TODO_TEXT: "todo-text",
  TODO_DELETE: "todo-delete",
};

const list = document.getElementById("todo-list");
const itemCountSpan = document.getElementById("item-count");
const uncheckedCountSpan = document.getElementById("unchecked-count");

function newTodo() {
  const taskName = prompt("Enter task");

  if (!taskName) return;

  const li = document.createElement("li");
  li.classNames = classNames.TODO_ITEM;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = classNames.TODO_CHECKBOX;
  checkbox.addEventListener("change", updateUncheckedCount);

  const span = document.createElement("span");
  span.className = classNames.TODO_TEXT;
  span.textContent = taskName;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.className = classNames.TODO_DELETE;
  deleteButton.addEventListener("click", function () {
    li.remove();
    updateCounts();
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteButton);

  list.append(li);

  updateCounts();
}

function updateCounts() {
  itemCountSpan.textContent = list.children.length;
  updateUncheckedCount();
}

function updateUncheckedCount() {
  const unchecked = document.querySelectorAll(
    `.${classNames.TODO_CHECKBOX}:not(:checked)`
  ).length;
  uncheckedCountSpan.textContent = unchecked;
}
