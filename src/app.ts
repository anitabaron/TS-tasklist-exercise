import { Task, Category } from "./types/types.js";
import { renderTasks } from "./helpers/render-tasks.helper.js";
import { renderCategories } from "./helpers/render-categories.helper.js";
import { TaskClass } from "./classes/task.js";

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

// addButtonElement.addEventListener("click", (event: Event) => {
//   event.preventDefault();
//   const selectedRadioElement: HTMLInputElement = document.querySelector(
//     "input[type='radio']:checked"
//   );
//   const selectedCategory: Category = selectedRadioElement.value as Category;
//   addTask({
//     name: tasksInputElement.value,
//     done: false,
//     category: selectedCategory,
//   });
//   renderTasks(tasks, tasksContainerElement);
//   tasksInputElement.value = "";
// });

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

// const tasks: string[] = ["Zadanie nr 1", "Zadanie nr 2", "Zadanie nr 3"];

// addTask({ name: "Zadanie ready", done: true });

// <li>
//   <label for="task-1"></label>Zadanie nr 1
// <li>
//   <label for="task-1"></label>Zadanie nr 1
//   <input type="checkbox" id="task-1" name="Zadanie nr 1" />
//  </li>;
// -------------------

// const buyButton = document.querySelector("button");
// const calculatePrice = (originalPrice: number, hasDiscount: boolean) => {
//   return hasDiscount ? originalPrice * 0.8 : originalPrice;
// };

// buyButton.addEventListener("click", () => {
//   const originalPrice: number = 50;
//   const hasDiscount: boolean =
//     new URLSearchParams(window.location.search).get("discount") === "true";
//   console.log(calculatePrice(originalPrice, hasDiscount));
// });

// -----------------

// let age: number | string = 30;
// age = "dwa";

// const logAge = (age: number | string) => {
//   console.log(`Hej mam ${age} lat`);
// };

// logAge(30);
// logAge("trzydzieści");
// -----------------

// const input1Element: HTMLInputElement = document.querySelector("#input1");
// const input2Element: HTMLInputElement = document.querySelector("#input2");
// const addButtonElement = document.querySelector("button");

// const add = (v1: number, v2: number) => v1 + v2;

// addButtonElement.addEventListener("click", () => {
//   const sum = add(Number(input1Element.value), Number(input2Element.value));
//   console.log(sum);
// });

// const sum = add(input1Element.value, input2Element.value);

// -----------------

// let age: number = 30;
// let ageAsString: string = "dwa";

// const add = (v1: number, v2: number) => v1 + v2;
// console.log(add(5, 3));
