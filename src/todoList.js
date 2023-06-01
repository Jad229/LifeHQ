export default class TodoList {
  constructor() {
    this.todos = [];
  }

  addItem(todo) {
    this.todos.push(todo);
  }
  removeItem(todo) {
    const index = this.todos.indexOf(todo);

    if (index != -1) {
      //if the index is found
      this.todos.splice(index, 1); //splice at index and remove 1 element
    }
  }
}
