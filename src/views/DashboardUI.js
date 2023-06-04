import Project from "../models/project";
import Todo from "../models/todo";

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
    this.newTodoModalWrapper =
      document.querySelector(".new-todo-modal").parentElement;
    this.newTodoModal = document.getElementById("new-todo-modal");
    this.newTodoForm = document.getElementById("new-task-form");
    this.newTodoInput = document.getElementById("new-task-input");

    this.closeProjectModalButton = document.getElementById(
      "close-project-modal-button"
    );

    this.closeProjectModalButton.addEventListener("click", () =>
      this.closeNewProjectModal()
    );

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
    const todoItems = document.createElement("ol");
    todoItems.classList.add("todos-section");

    todolist.collection.forEach((todo, index) => {
      const itemContainer = document.createElement("li");
      itemContainer.classList.add("todo-item");

      // add a unique ID to the li
      itemContainer.id = `todo-${index}`;

      const itemTitle = document.createElement("h4");
      itemTitle.textContent = todo.title;
      itemContainer.appendChild(itemTitle);

      const itemStatus = document.createElement("input");
      itemStatus.classList.add("item-status");
      itemStatus.type = "checkbox";
      itemStatus.addEventListener("change", () => {
        if (itemStatus.checked) {
          itemStatus.classList.add("checked");
        } else {
          itemStatus.classList.remove("checked");
        }
      });
      itemContainer.appendChild(itemStatus);

      //creates delete button for todo item
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => {
        todolist.collection.splice(index, 1); // Remove the todo from the collection
        const itemToRemove = document.getElementById(`todo-${index}`); // Get the li by its ID
        itemToRemove.remove(); // Remove the li from the DOM
      });

      itemContainer.appendChild(deleteButton);

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

      // Creates a button to add a task to the todolist
      const newTodoButton = document.createElement("button");
      newTodoButton.textContent = "Add Task";
      newTodoButton.classList.add("new-task-button");

      newTodoButton.addEventListener("click", (e) => {
        this.openNewTodoModal();
      });
      todoListCard.appendChild(newTodoButton);

      todoListsSection.appendChild(todoListCard);
    });

    // Append the project section container to the main projects area
    this.projectsArea.appendChild(projectSectionContainer);
  }

  openNewTodoModal() {
    this.newTodoModalWrapper.classList.remove("hidden");
  }

  // Include a method to close the new todo modal
  closeNewTodoModal() {
    this.newTodoModalWrapper.classList.add("hidden");
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

  submitNewTodoForm(e, todolist, id) {
    // Prevent the form from causing a page reload
    e.preventDefault();

    // Create new task
    const newTodo = new Todo();
    newTodo.setTitle(this.newTodoInput.value);

    // Add the new task to the todolist
    todolist.addItem(newTodo);

    // Remove the old todoList from the DOM
    const oldTodoList = document.getElementById(`todoList-${id}`);
    oldTodoList.remove();

    // Render the updated todoList
    const updatedTodoList = this.renderTodos(todolist, id);
    this.projectsArea.appendChild(updatedTodoList);

    // Clear the form and hide the modal
    this.newTodoInput.value = "";
    this.closeNewTodoModal();
  }
}
