export default class Dashboard {
  constructor() {
    this.projects = [];
  }

  addProject(project) {
    this.projects.push(project);
  }

  removeProject(project) {
    const index = this.projects.indexOf(project);

    if (index != -1) {
      //if the index is found
      this.projects.splice(index, 1); //splice at index and remove 1 element
    }
  }
}
