import React from "react";
import { Todo, TodosContextObject } from "../../models/todo";

const TodoContext = React.createContext<TodosContextObject>({
  allItems: [],
  completedItems: [],
  activeItems: [],
  type: "all",
  itemsLeft: 0,
  addItem: (todo: Todo) => {},
  markComplete: (id: string, type: boolean) => {},
  getActiveItems: () => [],
  getCompletedItems: () => [],
  getAllItems: () => [],
  deleteItem: (id: string) => {},
  clearCompleted: () => {},
});

export default TodoContext;
