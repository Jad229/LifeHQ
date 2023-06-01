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
    // TODO: write openProject function that opens the clicked project
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
