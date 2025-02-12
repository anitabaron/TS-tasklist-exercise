export enum Category {
  GENERAL = "general",
  WORK = "work",
  SPORT = "sport",
  HOBBY = "hobby",
}

// poniższe są równoważne
export interface Task {
  name: string;
  done: boolean;
  category?: Category;
}

export type TaskType = {
  name: string;
  done: boolean;
  category?: Category;
};
