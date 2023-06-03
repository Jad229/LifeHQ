import Project from "../models/project";

export default class DashboardUI {
  constructor(dashboard) {
    this.dashboard = dashboard;
    this.addProjectButton = document.getElementById("add-project-button");
    this.newProjectModal = document.getElementById("new-project-modal");
    this.newProjectForm = document.getElementById("new-project-form");
    this.newProjectNameInput = document.getElementById("new-project-name");
    this.projectsArea = document.getElementById("projects");
    this.modalWrapper = document.getElementById("modal-wrapper");
    this.backButton = document.getElementById("back-button");

    this.backButton.addEventListener("click", () => {
      this.backButton.classList.add("hidden");
      this.renderDashboard();
    });
    this.addProjectButton.addEventListener("click", () =>
      this.openNewProjectModal()
    );
    this.newProjectForm.addEventListener("submit", (e) =>
      this.submitNewProjectForm(e)
    );

    this.renderDashboard();
  }

  renderDashboard() {
    // Clear the dashboard area
    while (this.projectsArea.firstChild) {
      this.projectsArea.removeChild(this.projectsArea.firstChild);
    }

    // Add all current projects to the dashboard area
    this.dashboard.collection.forEach((project) => this.addProject(project));
  }

  renderTodos(todolist) {
    const todoItems = document.createElement("div");
    todoItems.classList.add("todos-section");

    todolist.collection.forEach((todo) => {
      const itemContainer = document.createElement("div");
      itemContainer.classList.add("todo-item");

      const itemTitle = document.createElement("h3");
      itemTitle.textContent = todo.title;
      itemContainer.appendChild(itemTitle);

      todoItems.appendChild(itemContainer);
    });

    return todoItems;
  }

  addProject(project) {
    // First creates the card for the project
    const projectCard = document.createElement("div");
    projectCard.classList.add("card");

    // Add event listener to open the project
    projectCard.addEventListener("click", () => {
      this.openProject(project);
    });

    // Creating the title of our project and append it to our project card
    const projectName = document.createElement("h2");
    projectName.textContent = project.getName();
    projectCard.appendChild(projectName);

    // Append Project Card to Dashboard
    this.projectsArea.appendChild(projectCard);
  }

  openProject(project) {
    // Displays back button to go back to the dashboard
    this.backButton.classList.remove("hidden");

    // Clear the projectsArea
    while (this.projectsArea.firstChild) {
      this.projectsArea.removeChild(this.projectsArea.firstChild);
    }

    // Create a container for each project section
    const projectSectionContainer = document.createElement("div");
    projectSectionContainer.classList.add("project-section-container");

    // Create a title for the project
    const projectTitle = document.createElement("h2");
    projectTitle.textContent = project.getName();
    projectTitle.classList.add("project-title-container");
    projectSectionContainer.appendChild(projectTitle);

    // Create a section for the TodoLists
    const todoListsSection = document.createElement("div");
    todoListsSection.classList.add("todolists-container");
    projectSectionContainer.appendChild(todoListsSection);

    // Loop through each TodoList in the project and create a card for it
    project.collection.forEach((todoList) => {
      const todoListCard = document.createElement("div");
      todoListCard.classList.add("card");

      const todoListName = document.createElement("h3");
      todoListName.textContent = todoList.getName();
      todoListCard.appendChild(todoListName);

      // Returns a div of all items of the todo
      todoListCard.appendChild(this.renderTodos(todoList));

      todoListsSection.appendChild(todoListCard);
    });

    // Append the project section container to the main projects area
    this.projectsArea.appendChild(projectSectionContainer);
  }

  openNewProjectModal() {
    this.modalWrapper.classList.remove("hidden");
  }

  closeNewProjectModal() {
    this.modalWrapper.classList.add("hidden");
  }

  submitNewProjectForm(e) {
    // Prevent the form from causing a page reload
    e.preventDefault();

    // Create new project and set its name
    const newProject = new Project();
    newProject.setName(this.newProjectNameInput.value);

    // Add the new project to the dashboard
    this.dashboard.addItem(newProject);

    // Clear the form and hide the modal
    this.newProjectNameInput.value = "";
    this.closeNewProjectModal();

    // Rerender dashboard
    this.renderDashboard();
  }
}
