import Dashboard from "./models/dashboard";
import Project from "./models/project";
import Todo from "./models/todo";
import TodoList from "./models/todoList";
import "./styles.css";
import DashboardUI from "./views/DashboardUI";
const dashboard = new Dashboard();
const project1 = new Project();
const project2 = new Project();
const todolist = new TodoList();
const todolist2 = new TodoList();
const todo = new Todo(
  "Research designs",
  "Seek inspiration for MeVo design and some modern UI",
  5
);

todolist.addItem(todo);
todolist.addItem(todo);
todolist.addItem(todo);
todolist.addItem(todo);
todolist.addItem(todo);

todolist.setName("Design MeVo Codex");
todolist2.setName("Build MeVo Codex");

project1.setName("Life HQ");
project2.setName("MeVo Codex");

project2.addItem(todolist);
project2.addItem(todolist2);

dashboard.addItem(project1);
dashboard.addItem(project2);

console.log(dashboard);

const dashboardUI = new DashboardUI(dashboard);
