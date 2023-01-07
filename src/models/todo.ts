export type Todo = {
  id: string;
  title: string;
  status: string;
  createdAt: Date;
};

export type TodosInitialState = {
  allItems: Todo[];
  completedItems: Todo[];
  activeItems: Todo[];
  type: string;
  itemsLeft: number;
};

export type TodosContextObject = {
  allItems: Todo[];
  completedItems: Todo[];
  activeItems: Todo[];
  type: string;
  itemsLeft: number;
  addItem: (todo: Todo) => void;
  markComplete: (id: string, type: boolean) => void;
  getActiveItems: () => void;
  getCompletedItems: () => void;
  getAllItems: () => void;
  deleteItem: (id: string) => void;
  clearCompleted: () => void;
};

export type ActionType = {
  type: string;
  payload?: any;
};
