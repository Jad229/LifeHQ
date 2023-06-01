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
class DashboardUI {
  constructor(dashboard) {
    this.dashboard = dashboard;
    this.addProjectButton = document.getElementById("add-project-button");
    this.addProjectButton.addEventListener("click", () => {
      this.dashboard.forEach((project) => {
        this.addProject(project);
      });
    });

    this.dashboardArea = document.getElementById("dashboard-area");
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
    this.dashboardArea.appendChild(projectCard);
  }

  openProject(project) {
    // TODO: write openProject function that opens the clicked project
  }
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ0o7QUFDTjtBQUNRO0FBQ0s7QUFDOUM7QUFDQSxzQkFBc0IseURBQVM7QUFDL0IscUJBQXFCLHVEQUFPO0FBQzVCLHFCQUFxQix1REFBTztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsMERBQVc7Ozs7Ozs7Ozs7Ozs7OztBQ2xCcEI7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QnNDO0FBQ3ZCLHdCQUF3QixtREFBVTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0xzQztBQUN2QixzQkFBc0IsbURBQVU7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDTmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1BzQztBQUN2Qix1QkFBdUIsbURBQVU7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0xlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xpZmVocS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9saWZlaHEvLi9zcmMvbW9kZWxzL2NvbGxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vbGlmZWhxLy4vc3JjL21vZGVscy9kYXNoYm9hcmQuanMiLCJ3ZWJwYWNrOi8vbGlmZWhxLy4vc3JjL21vZGVscy9wcm9qZWN0LmpzIiwid2VicGFjazovL2xpZmVocS8uL3NyYy9tb2RlbHMvdG9kby5qcyIsIndlYnBhY2s6Ly9saWZlaHEvLi9zcmMvbW9kZWxzL3RvZG9MaXN0LmpzIiwid2VicGFjazovL2xpZmVocS8uL3NyYy92aWV3cy9EYXNoYm9hcmRVSS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGFzaGJvYXJkIGZyb20gXCIuL21vZGVscy9kYXNoYm9hcmRcIjtcclxuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vbW9kZWxzL3Byb2plY3RcIjtcclxuaW1wb3J0IFRvZG8gZnJvbSBcIi4vbW9kZWxzL3RvZG9cIjtcclxuaW1wb3J0IFRvZG9MaXN0IGZyb20gXCIuL21vZGVscy90b2RvTGlzdFwiO1xyXG5pbXBvcnQgRGFzaGJvYXJkVUkgZnJvbSBcIi4vdmlld3MvRGFzaGJvYXJkVUlcIjtcclxuXHJcbmNvbnN0IGRhc2hib2FyZCA9IG5ldyBEYXNoYm9hcmQoKTtcclxuY29uc3QgcHJvamVjdDEgPSBuZXcgUHJvamVjdCgpO1xyXG5jb25zdCBwcm9qZWN0MiA9IG5ldyBQcm9qZWN0KCk7XHJcblxyXG5wcm9qZWN0MS5zZXROYW1lKFwiTGlmZSBIUVwiKTtcclxucHJvamVjdDIuc2V0TmFtZShcIk1lVm8gQ29kZXhcIik7XHJcblxyXG5kYXNoYm9hcmQuYWRkSXRlbShwcm9qZWN0MSk7XHJcbmRhc2hib2FyZC5hZGRJdGVtKHByb2plY3QyKTtcclxuXHJcbmNvbnNvbGUubG9nKGRhc2hib2FyZCk7XHJcblxyXG5jb25zdCBkYXNoYm9hcmRVSSA9IG5ldyBEYXNoYm9hcmRVSShkYXNoYm9hcmQpO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xsZWN0aW9uIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuX25hbWU7XHJcbiAgICB0aGlzLmNvbGxlY3Rpb24gPSBbXTtcclxuICB9XHJcblxyXG4gIHNldE5hbWUobmFtZSkge1xyXG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgfVxyXG4gIGdldE5hbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcclxuICB9XHJcbiAgYWRkSXRlbShpdGVtKSB7XHJcbiAgICB0aGlzLmNvbGxlY3Rpb24ucHVzaChpdGVtKTtcclxuICB9XHJcbiAgcmVtb3ZlTGlzdChpdGVtKSB7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuY29sbGVjdGlvbi5pbmRleE9mKGl0ZW0pO1xyXG5cclxuICAgIGlmIChpbmRleCAhPSAtMSkge1xyXG4gICAgICAvL2lmIGNvbGxlY3Rpb24gaXMgZm91bmQgcmVtb3ZlIGl0XHJcbiAgICAgIHRoaXMuY29sbGVjdGlvbi5zcGxpY2UoaW5kZXgsIDEpOyAvL3NwbGljZSBhdCBpbmRleCBhbmQgcmVtb3ZlIDEgZWxlbWVudFxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgQ29sbGVjdGlvbiBmcm9tIFwiLi9jb2xsZWN0aW9uXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhc2hib2FyZCBleHRlbmRzIENvbGxlY3Rpb24ge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IENvbGxlY3Rpb24gZnJvbSBcIi4vY29sbGVjdGlvblwiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IGV4dGVuZHMgQ29sbGVjdGlvbiB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuICAvL1BvdGVudGlhbCBGZWF0dXJlOiBQcm9ncmVzc2lvbiBTdGF0dXMgb2YgUHJvamVjdFxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG8ge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBDb2xsZWN0aW9uIGZyb20gXCIuL2NvbGxlY3Rpb25cIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0xpc3QgZXh0ZW5kcyBDb2xsZWN0aW9uIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIERhc2hib2FyZFVJIHtcclxuICBjb25zdHJ1Y3RvcihkYXNoYm9hcmQpIHtcclxuICAgIHRoaXMuZGFzaGJvYXJkID0gZGFzaGJvYXJkO1xyXG4gICAgdGhpcy5hZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtcHJvamVjdC1idXR0b25cIik7XHJcbiAgICB0aGlzLmFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgdGhpcy5kYXNoYm9hcmQuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICAgIHRoaXMuYWRkUHJvamVjdChwcm9qZWN0KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmRhc2hib2FyZEFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhc2hib2FyZC1hcmVhXCIpO1xyXG4gIH1cclxuXHJcbiAgYWRkUHJvamVjdChwcm9qZWN0KSB7XHJcbiAgICAvLyBGaXJzdCBjcmVhdGVzIHRoZSBjYXJkIGZvciB0aGUgcHJvamVjdFxyXG4gICAgY29uc3QgcHJvamVjdENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcHJvamVjdENhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XHJcblxyXG4gICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIHRvIG9wZW4gdGhlIHByb2plY3RcclxuICAgIHByb2plY3RDYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMub3BlblByb2plY3QocHJvamVjdCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBDcmVhdGluZyB0aGUgdGl0bGUgb2Ygb3VyIHByb2plY3QgYW5kIGFwcGVuZCBpdCB0byBvdXIgcHJvamVjdCBjYXJkXHJcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gcHJvamVjdC5nZXROYW1lKCk7XHJcbiAgICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XHJcblxyXG4gICAgLy8gQXBwZW5kIFByb2plY3QgQ2FyZCB0byBEYXNoYm9hcmRcclxuICAgIHRoaXMuZGFzaGJvYXJkQXJlYS5hcHBlbmRDaGlsZChwcm9qZWN0Q2FyZCk7XHJcbiAgfVxyXG5cclxuICBvcGVuUHJvamVjdChwcm9qZWN0KSB7XHJcbiAgICAvLyBUT0RPOiB3cml0ZSBvcGVuUHJvamVjdCBmdW5jdGlvbiB0aGF0IG9wZW5zIHRoZSBjbGlja2VkIHByb2plY3RcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9