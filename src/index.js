import Dashboard from "./models/dashboard";
import Project from "./models/project";
import Todo from "./models/todo";
import TodoList from "./models/todoList";
import DashboardUI from "./views/DashboardUI";

const dashboard = new Dashboard();
const project1 = new Project();
const project2 = new Project();

project1.setName("Life HQ");
project2.setName("MeVo Codex");

dashboard.addItem(project1);
dashboard.addItem(project2);

console.log(dashboard);

const dashboardUI = new DashboardUI(dashboard);
