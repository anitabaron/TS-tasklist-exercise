import { Category } from "../types/types.js";

interface Logger {
  logCreationDate: (addition: string) => void;
}

export class TaskClass implements Logger {
  name: string;
  done: boolean;
  category?: Category;
  createdAt: Date;

  constructor(
    name: string,
    done: boolean,
    category: Category = Category.GENERAL
  ) {
    this.name = name;
    this.done = done;
    this.category = category;
    this.createdAt = new Date();
  }
  logCreationDate(extra: string) {
    console.log(`Zadanie stworzone: ${this.createdAt}`);
  }
}
