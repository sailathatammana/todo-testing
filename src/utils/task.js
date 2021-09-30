export function addTask(string) {
  let localList = JSON.parse(localStorage.getItem("todos"));
  if (localList == null || undefined) {
    localList = [];
  }
  const newItem = new Todo(Date.now(), string, Date.now(), false);
  const newList = [...localList, newItem];
  localStorage.setItem("todos", JSON.stringify(newList));
}

export function toggleTodo(todo) {
  let localList = JSON.parse(localStorage.getItem("todos"));

  const otherTodos = localList.filter((item) => {
    return item.id !== todo.id;
  });

  const updatedTodo = new Todo(
    todo.id,
    todo.title,
    todo.timestamp,
    !todo.checked
  );

  const newList = [...otherTodos, updatedTodo];
  localStorage.setItem("todos", JSON.stringify(newList));
}

class Todo {
  constructor(id, title, timestamp, checked) {
    this.id = id;
    this.title = title;
    this.timestamp = timestamp;
    this.checked = checked;
  }
}
