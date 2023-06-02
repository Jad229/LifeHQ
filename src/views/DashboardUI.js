import Project from "../models/project";

export default class DashboardUI {
  constructor(dashboard) {
    this.dashboard = dashboard;
    this.addProjectButton = document.getElementById("add-project-button");
    this.newProjectModal = document.getElementById("new-project-modal");
    this.newProjectForm = document.getElementById("new-project-form");
    this.newProjectNameInput = document.getElementById("new-project-name");
    this.projectsArea = document.getElementById("projects");

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
    // TODO: finish project view
    // Clear the projectsArea
    while (this.projectsArea.firstChild) {
      this.projectsArea.removeChild(this.projectsArea.firstChild);
    }

    // Create a title for the project
    const projectTitle = document.createElement("h2");
    projectTitle.textContent = project.getName();
    this.projectsArea.appendChild(projectTitle);

    // Create a back button to go back to the dashboard
    const backButton = document.createElement("button");
    backButton.textContent = "Back to Dashboard";
    backButton.addEventListener("click", () => {
      this.renderDashboard();
    });
    this.projectsArea.appendChild(backButton);

    // Create a section for the TodoLists
    const todoListsSection = document.createElement("div");
    this.projectsArea.appendChild(todoListsSection);

    // Loop through each TodoList in the project and create a card for it
    project.collection.forEach((todoList) => {
      const todoListCard = document.createElement("div");
      todoListCard.classList.add("card");

      // Add event listener to open the TodoList
      todoListCard.addEventListener("click", () => {
        this.openTodoList(todoList);
      });

      const todoListName = document.createElement("h3");
      todoListName.textContent = todoList.getName();
      todoListCard.appendChild(todoListName);

      todoListsSection.appendChild(todoListCard);
    });
  }

  openNewProjectModal() {
    this.newProjectModal.style.display = "block";
  }

  closeNewProjectModal() {
    this.newProjectModal.style.display = "none";
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
