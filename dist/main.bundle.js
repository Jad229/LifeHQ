"use strict";
(self["webpackChunklifehq"] = self["webpackChunklifehq"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/dashboard */ "./src/models/dashboard.js");
/* harmony import */ var _models_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/project */ "./src/models/project.js");
/* harmony import */ var _models_todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/todo */ "./src/models/todo.js");
/* harmony import */ var _models_todoList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/todoList */ "./src/models/todoList.js");
/* harmony import */ var _views_DashboardUI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/DashboardUI */ "./src/views/DashboardUI.js");






const dashboard = new _models_dashboard__WEBPACK_IMPORTED_MODULE_0__["default"]();
const project1 = new _models_project__WEBPACK_IMPORTED_MODULE_1__["default"]();
const project2 = new _models_project__WEBPACK_IMPORTED_MODULE_1__["default"]();

project1.setName("Life HQ");
project2.setName("MeVo Codex");

dashboard.addItem(project1);
dashboard.addItem(project2);

console.log(dashboard);

const dashboardUI = new _views_DashboardUI__WEBPACK_IMPORTED_MODULE_4__["default"](dashboard);


/***/ }),

/***/ "./src/models/collection.js":
/*!**********************************!*\
  !*** ./src/models/collection.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Collection)
/* harmony export */ });
class Collection {
  constructor() {
    this._name;
    this.collection = [];
  }

  setName(name) {
    this._name = name;
  }
  getName() {
    return this._name;
  }
  addItem(item) {
    this.collection.push(item);
  }
  removeList(item) {
    const index = this.collection.indexOf(item);

    if (index != -1) {
      //if collection is found remove it
      this.collection.splice(index, 1); //splice at index and remove 1 element
    }
  }
}


/***/ }),

/***/ "./src/models/dashboard.js":
/*!*********************************!*\
  !*** ./src/models/dashboard.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Dashboard)
/* harmony export */ });
/* harmony import */ var _collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collection */ "./src/models/collection.js");

class Dashboard extends _collection__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
  }
}


/***/ }),

/***/ "./src/models/project.js":
/*!*******************************!*\
  !*** ./src/models/project.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collection */ "./src/models/collection.js");

class Project extends _collection__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
  }
  //Potential Feature: Progression Status of Project
}


/***/ }),

/***/ "./src/models/todo.js":
/*!****************************!*\
  !*** ./src/models/todo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todo)
/* harmony export */ });
class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}


/***/ }),

/***/ "./src/models/todoList.js":
/*!********************************!*\
  !*** ./src/models/todoList.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TodoList)
/* harmony export */ });
/* harmony import */ var _collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collection */ "./src/models/collection.js");

class TodoList extends _collection__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
  }
}


/***/ }),

/***/ "./src/views/DashboardUI.js":
/*!**********************************!*\
  !*** ./src/views/DashboardUI.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DashboardUI)
/* harmony export */ });
/* harmony import */ var _models_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/project */ "./src/models/project.js");


class DashboardUI {
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
    const newProject = new _models_project__WEBPACK_IMPORTED_MODULE_0__["default"]();
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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ0o7QUFDTjtBQUNRO0FBQ0s7QUFDOUM7QUFDQSxzQkFBc0IseURBQVM7QUFDL0IscUJBQXFCLHVEQUFPO0FBQzVCLHFCQUFxQix1REFBTztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsMERBQVc7Ozs7Ozs7Ozs7Ozs7OztBQ2xCcEI7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QnNDO0FBQ3ZCLHdCQUF3QixtREFBVTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0xzQztBQUN2QixzQkFBc0IsbURBQVU7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDTmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1BzQztBQUN2Qix1QkFBdUIsbURBQVU7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMd0M7QUFDeEM7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHVEQUFPO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGlmZWhxLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2xpZmVocS8uL3NyYy9tb2RlbHMvY29sbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly9saWZlaHEvLi9zcmMvbW9kZWxzL2Rhc2hib2FyZC5qcyIsIndlYnBhY2s6Ly9saWZlaHEvLi9zcmMvbW9kZWxzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vbGlmZWhxLy4vc3JjL21vZGVscy90b2RvLmpzIiwid2VicGFjazovL2xpZmVocS8uL3NyYy9tb2RlbHMvdG9kb0xpc3QuanMiLCJ3ZWJwYWNrOi8vbGlmZWhxLy4vc3JjL3ZpZXdzL0Rhc2hib2FyZFVJLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEYXNoYm9hcmQgZnJvbSBcIi4vbW9kZWxzL2Rhc2hib2FyZFwiO1xyXG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9tb2RlbHMvcHJvamVjdFwiO1xyXG5pbXBvcnQgVG9kbyBmcm9tIFwiLi9tb2RlbHMvdG9kb1wiO1xyXG5pbXBvcnQgVG9kb0xpc3QgZnJvbSBcIi4vbW9kZWxzL3RvZG9MaXN0XCI7XHJcbmltcG9ydCBEYXNoYm9hcmRVSSBmcm9tIFwiLi92aWV3cy9EYXNoYm9hcmRVSVwiO1xyXG5cclxuY29uc3QgZGFzaGJvYXJkID0gbmV3IERhc2hib2FyZCgpO1xyXG5jb25zdCBwcm9qZWN0MSA9IG5ldyBQcm9qZWN0KCk7XHJcbmNvbnN0IHByb2plY3QyID0gbmV3IFByb2plY3QoKTtcclxuXHJcbnByb2plY3QxLnNldE5hbWUoXCJMaWZlIEhRXCIpO1xyXG5wcm9qZWN0Mi5zZXROYW1lKFwiTWVWbyBDb2RleFwiKTtcclxuXHJcbmRhc2hib2FyZC5hZGRJdGVtKHByb2plY3QxKTtcclxuZGFzaGJvYXJkLmFkZEl0ZW0ocHJvamVjdDIpO1xyXG5cclxuY29uc29sZS5sb2coZGFzaGJvYXJkKTtcclxuXHJcbmNvbnN0IGRhc2hib2FyZFVJID0gbmV3IERhc2hib2FyZFVJKGRhc2hib2FyZCk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbGxlY3Rpb24ge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5fbmFtZTtcclxuICAgIHRoaXMuY29sbGVjdGlvbiA9IFtdO1xyXG4gIH1cclxuXHJcbiAgc2V0TmFtZShuYW1lKSB7XHJcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICB9XHJcbiAgZ2V0TmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gIH1cclxuICBhZGRJdGVtKGl0ZW0pIHtcclxuICAgIHRoaXMuY29sbGVjdGlvbi5wdXNoKGl0ZW0pO1xyXG4gIH1cclxuICByZW1vdmVMaXN0KGl0ZW0pIHtcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5jb2xsZWN0aW9uLmluZGV4T2YoaXRlbSk7XHJcblxyXG4gICAgaWYgKGluZGV4ICE9IC0xKSB7XHJcbiAgICAgIC8vaWYgY29sbGVjdGlvbiBpcyBmb3VuZCByZW1vdmUgaXRcclxuICAgICAgdGhpcy5jb2xsZWN0aW9uLnNwbGljZShpbmRleCwgMSk7IC8vc3BsaWNlIGF0IGluZGV4IGFuZCByZW1vdmUgMSBlbGVtZW50XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBDb2xsZWN0aW9uIGZyb20gXCIuL2NvbGxlY3Rpb25cIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGFzaGJvYXJkIGV4dGVuZHMgQ29sbGVjdGlvbiB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgQ29sbGVjdGlvbiBmcm9tIFwiLi9jb2xsZWN0aW9uXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3QgZXh0ZW5kcyBDb2xsZWN0aW9uIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG4gIC8vUG90ZW50aWFsIEZlYXR1cmU6IFByb2dyZXNzaW9uIFN0YXR1cyBvZiBQcm9qZWN0XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kbyB7XHJcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IENvbGxlY3Rpb24gZnJvbSBcIi4vY29sbGVjdGlvblwiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvTGlzdCBleHRlbmRzIENvbGxlY3Rpb24ge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFByb2plY3QgZnJvbSBcIi4uL21vZGVscy9wcm9qZWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXNoYm9hcmRVSSB7XHJcbiAgY29uc3RydWN0b3IoZGFzaGJvYXJkKSB7XHJcbiAgICB0aGlzLmRhc2hib2FyZCA9IGRhc2hib2FyZDtcclxuICAgIHRoaXMuYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXByb2plY3QtYnV0dG9uXCIpO1xyXG4gICAgdGhpcy5uZXdQcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy1wcm9qZWN0LW1vZGFsXCIpO1xyXG4gICAgdGhpcy5uZXdQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXByb2plY3QtZm9ybVwiKTtcclxuICAgIHRoaXMubmV3UHJvamVjdE5hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXByb2plY3QtbmFtZVwiKTtcclxuICAgIHRoaXMucHJvamVjdHNBcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0c1wiKTtcclxuXHJcbiAgICB0aGlzLmFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+XHJcbiAgICAgIHRoaXMub3Blbk5ld1Byb2plY3RNb2RhbCgpXHJcbiAgICApO1xyXG4gICAgdGhpcy5uZXdQcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PlxyXG4gICAgICB0aGlzLnN1Ym1pdE5ld1Byb2plY3RGb3JtKGUpXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMucmVuZGVyRGFzaGJvYXJkKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJEYXNoYm9hcmQoKSB7XHJcbiAgICAvLyBDbGVhciB0aGUgZGFzaGJvYXJkIGFyZWFcclxuICAgIHdoaWxlICh0aGlzLnByb2plY3RzQXJlYS5maXJzdENoaWxkKSB7XHJcbiAgICAgIHRoaXMucHJvamVjdHNBcmVhLnJlbW92ZUNoaWxkKHRoaXMucHJvamVjdHNBcmVhLmZpcnN0Q2hpbGQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCBhbGwgY3VycmVudCBwcm9qZWN0cyB0byB0aGUgZGFzaGJvYXJkIGFyZWFcclxuICAgIHRoaXMuZGFzaGJvYXJkLmNvbGxlY3Rpb24uZm9yRWFjaCgocHJvamVjdCkgPT4gdGhpcy5hZGRQcm9qZWN0KHByb2plY3QpKTtcclxuICB9XHJcblxyXG4gIGFkZFByb2plY3QocHJvamVjdCkge1xyXG4gICAgLy8gRmlyc3QgY3JlYXRlcyB0aGUgY2FyZCBmb3IgdGhlIHByb2plY3RcclxuICAgIGNvbnN0IHByb2plY3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHByb2plY3RDYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xyXG5cclxuICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lciB0byBvcGVuIHRoZSBwcm9qZWN0XHJcbiAgICBwcm9qZWN0Q2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLm9wZW5Qcm9qZWN0KHByb2plY3QpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQ3JlYXRpbmcgdGhlIHRpdGxlIG9mIG91ciBwcm9qZWN0IGFuZCBhcHBlbmQgaXQgdG8gb3VyIHByb2plY3QgY2FyZFxyXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0TmFtZSgpO1xyXG4gICAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xyXG5cclxuICAgIC8vIEFwcGVuZCBQcm9qZWN0IENhcmQgdG8gRGFzaGJvYXJkXHJcbiAgICB0aGlzLnByb2plY3RzQXJlYS5hcHBlbmRDaGlsZChwcm9qZWN0Q2FyZCk7XHJcbiAgfVxyXG5cclxuICBvcGVuUHJvamVjdChwcm9qZWN0KSB7XHJcbiAgICAvLyBUT0RPOiBmaW5pc2ggcHJvamVjdCB2aWV3XHJcbiAgICAvLyBDbGVhciB0aGUgcHJvamVjdHNBcmVhXHJcbiAgICB3aGlsZSAodGhpcy5wcm9qZWN0c0FyZWEuZmlyc3RDaGlsZCkge1xyXG4gICAgICB0aGlzLnByb2plY3RzQXJlYS5yZW1vdmVDaGlsZCh0aGlzLnByb2plY3RzQXJlYS5maXJzdENoaWxkKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDcmVhdGUgYSB0aXRsZSBmb3IgdGhlIHByb2plY3RcclxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0TmFtZSgpO1xyXG4gICAgdGhpcy5wcm9qZWN0c0FyZWEuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcclxuXHJcbiAgICAvLyBDcmVhdGUgYSBiYWNrIGJ1dHRvbiB0byBnbyBiYWNrIHRvIHRoZSBkYXNoYm9hcmRcclxuICAgIGNvbnN0IGJhY2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgYmFja0J1dHRvbi50ZXh0Q29udGVudCA9IFwiQmFjayB0byBEYXNoYm9hcmRcIjtcclxuICAgIGJhY2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgdGhpcy5yZW5kZXJEYXNoYm9hcmQoKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5wcm9qZWN0c0FyZWEuYXBwZW5kQ2hpbGQoYmFja0J1dHRvbik7XHJcblxyXG4gICAgLy8gQ3JlYXRlIGEgc2VjdGlvbiBmb3IgdGhlIFRvZG9MaXN0c1xyXG4gICAgY29uc3QgdG9kb0xpc3RzU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0aGlzLnByb2plY3RzQXJlYS5hcHBlbmRDaGlsZCh0b2RvTGlzdHNTZWN0aW9uKTtcclxuXHJcbiAgICAvLyBMb29wIHRocm91Z2ggZWFjaCBUb2RvTGlzdCBpbiB0aGUgcHJvamVjdCBhbmQgY3JlYXRlIGEgY2FyZCBmb3IgaXRcclxuICAgIHByb2plY3QuY29sbGVjdGlvbi5mb3JFYWNoKCh0b2RvTGlzdCkgPT4ge1xyXG4gICAgICBjb25zdCB0b2RvTGlzdENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICB0b2RvTGlzdENhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XHJcblxyXG4gICAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgdG8gb3BlbiB0aGUgVG9kb0xpc3RcclxuICAgICAgdG9kb0xpc3RDYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5vcGVuVG9kb0xpc3QodG9kb0xpc3QpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IHRvZG9MaXN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICAgICAgdG9kb0xpc3ROYW1lLnRleHRDb250ZW50ID0gdG9kb0xpc3QuZ2V0TmFtZSgpO1xyXG4gICAgICB0b2RvTGlzdENhcmQuYXBwZW5kQ2hpbGQodG9kb0xpc3ROYW1lKTtcclxuXHJcbiAgICAgIHRvZG9MaXN0c1NlY3Rpb24uYXBwZW5kQ2hpbGQodG9kb0xpc3RDYXJkKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb3Blbk5ld1Byb2plY3RNb2RhbCgpIHtcclxuICAgIHRoaXMubmV3UHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgfVxyXG5cclxuICBjbG9zZU5ld1Byb2plY3RNb2RhbCgpIHtcclxuICAgIHRoaXMubmV3UHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICB9XHJcblxyXG4gIHN1Ym1pdE5ld1Byb2plY3RGb3JtKGUpIHtcclxuICAgIC8vIFByZXZlbnQgdGhlIGZvcm0gZnJvbSBjYXVzaW5nIGEgcGFnZSByZWxvYWRcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAvLyBDcmVhdGUgbmV3IHByb2plY3QgYW5kIHNldCBpdHMgbmFtZVxyXG4gICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KCk7XHJcbiAgICBuZXdQcm9qZWN0LnNldE5hbWUodGhpcy5uZXdQcm9qZWN0TmFtZUlucHV0LnZhbHVlKTtcclxuXHJcbiAgICAvLyBBZGQgdGhlIG5ldyBwcm9qZWN0IHRvIHRoZSBkYXNoYm9hcmRcclxuICAgIHRoaXMuZGFzaGJvYXJkLmFkZEl0ZW0obmV3UHJvamVjdCk7XHJcblxyXG4gICAgLy8gQ2xlYXIgdGhlIGZvcm0gYW5kIGhpZGUgdGhlIG1vZGFsXHJcbiAgICB0aGlzLm5ld1Byb2plY3ROYW1lSW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gICAgdGhpcy5jbG9zZU5ld1Byb2plY3RNb2RhbCgpO1xyXG5cclxuICAgIC8vIFJlcmVuZGVyIGRhc2hib2FyZFxyXG4gICAgdGhpcy5yZW5kZXJEYXNoYm9hcmQoKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9