export default class Project {
  constructor() {
    this.todoLists = [];
  }

  addList(todoList) {
    this.todoLists.push(todoList);
  }
  removeList(todoList) {
    const index = this.todoLists.indexOf(todoList);

    if (index != -1) {
      //if todolist is found remove it
      this.todoLists.splice(index, 1); //splice at index and remove 1 element
    }
  }
  //Potential Feature: Progression Status of Project
}
