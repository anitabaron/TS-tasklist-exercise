import { Category } from "../types/types.js";

const handleCategoryChange = (category: Category) => {
  if (category === "general") {
    console.log("category general");
  } else if (category === "work") {
    console.log("category work");
  } else if (category === "sport") {
    console.log("category sport");
  } else if (category === "hobby") {
    console.log("category hobby");
  }
};

export const renderCategories = (
  categories: Category[],
  categoriesContainerElement: HTMLElement,
  inputChangeCallback: (category: Category) => void
) => {
  categories.forEach((category) => {
    const categoryElement: HTMLElement = document.createElement("li");

    const radioInputElement: HTMLInputElement = document.createElement("input");
    radioInputElement.type = "radio";
    radioInputElement.name = "category";
    radioInputElement.value = category;
    radioInputElement.id = `category-${category}`;
    radioInputElement.addEventListener("change", () => {
      inputChangeCallback(category);
      handleCategoryChange(category);
    });

    const labelElement: HTMLLabelElement = document.createElement("label");
    labelElement.setAttribute("for", `category-${category}`);
    labelElement.innerText = category;

    categoryElement.appendChild(radioInputElement);
    categoryElement.appendChild(labelElement);

    categoriesContainerElement.appendChild(categoryElement);
  });
};
