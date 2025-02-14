import { Task, Category } from "./types/types.js";
import { renderTasks } from "./helpers/render-tasks.helper.js";
import { renderCategories } from "./helpers/render-categories.helper.js";
import { TaskClass } from "./classes/classTask.js";

const tasksContainerElement: HTMLElement = document.querySelector(".tasks");
const tasksInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector("button");
const categoriesContainerElement: HTMLElement =
  document.querySelector(".categories");

const categories: Category[] = [
  Category.GENERAL,
  Category.WORK,
  Category.SPORT,
  Category.HOBBY,
];

let selectedCategory: Category;

const tasks: Task[] = [
  { name: "Zadanie nr 1", done: false, category: Category.GENERAL },
  { name: "Zadanie nr 2", done: false, category: Category.WORK },
  { name: "Zadanie nr 3", done: false, category: Category.GENERAL },
  { name: "Zadanie nr 4", done: false, category: Category.SPORT },
  { name: "Zadanie nr 5", done: false, category: Category.HOBBY },
];

const addTask = (task: Task) => {
  tasks.push(task);
};

const updateSelectedCategory = (newCategory: Category) => {
  selectedCategory = newCategory;
};

addButtonElement.addEventListener("click", (event: Event) => {
  event.preventDefault();
  addTask({
    name: tasksInputElement.value,
    done: false,
    category: selectedCategory,
  });
  renderTasks(tasks, tasksContainerElement);
});

addTask({ name: "Zadanie ready", done: true, category: Category.SPORT });
addTask({ name: "Zrobić trening", done: false, category: Category.SPORT });

renderCategories(
  categories,
  categoriesContainerElement,
  updateSelectedCategory
);

renderTasks(tasks, tasksContainerElement);

const TaskClassInstance = new TaskClass("zadanie z konstruktora", false);
console.log(TaskClassInstance);
