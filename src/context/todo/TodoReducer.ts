import { Todo, TodosInitialState, ActionType } from "../../models/todo";
import { todoTypes } from "../todo-types";

const countItemsLeft = (items: Todo[], status: string): number => {
  return items.reduce((acc, currentValue) => {
    if (currentValue.status !== status) {
      acc++;
    }
    return acc;
  }, 0);
};

const TodoReducer = (
  state: TodosInitialState,
  action: ActionType
): TodosInitialState => {
  const { type, payload } = action;

  switch (type) {
    case todoTypes.ADD_ITEM:
      return {
        ...state,
        allItems: [payload, ...state.allItems],
        itemsLeft: countItemsLeft([...state.allItems, payload], "completed"),
      };
    case todoTypes.MARK_COMPLETE:
      return {
        ...state,
        allItems: state.allItems.map((item) =>
          item.id === payload ? { ...item, status: "completed" } : item
        ),
        completedItems: state.completedItems.map((item) =>
          item.id === payload ? { ...item, status: "completed" } : item
        ),
        activeItems: state.activeItems.map((item) =>
          item.id === payload ? { ...item, status: "completed" } : item
        ),
        itemsLeft: countItemsLeft(
          state.allItems.map((item) =>
            item.id === payload ? { ...item, status: "completed" } : item
          ),
          "completed"
        ),
      };
    case todoTypes.UNDO_COMPLETE:
      return {
        ...state,
        allItems: state.allItems.map((item) =>
          item.id === payload ? { ...item, status: "active" } : item
        ),
        completedItems: state.completedItems.map((item) =>
          item.id === payload ? { ...item, status: "active" } : item
        ),
        activeItems: state.activeItems.map((item) =>
          item.id === payload ? { ...item, status: "active" } : item
        ),

        itemsLeft: countItemsLeft(
          state.allItems.map((item) =>
            item.id === payload ? { ...item, status: "active" } : item
          ),
          "completed"
        ),
      };
    case todoTypes.GET_ACTIVE:
      return {
        ...state,
        activeItems: [...state.allItems].filter(
          (item) => item.status === "active"
        ),
        type: "active",
      };
    case todoTypes.GET_COMPLETED:
      return {
        ...state,
        completedItems: [...state.allItems].filter(
          (item) => item.status === "completed"
        ),
        type: "completed",
      };
    case todoTypes.GET_ALL:
      return {
        ...state,
        type: "all",
      };
    case todoTypes.DELETE_ITEM:
      return {
        ...state,
        allItems: [...state.allItems].filter((item) => item.id !== payload),
        activeItems: [...state.activeItems].filter(
          (item) => item.id !== payload
        ),
        completedItems: [...state.completedItems].filter(
          (item) => item.id !== payload
        ),
        itemsLeft: countItemsLeft(
          [...state.allItems].filter((item) => item.id !== payload),
          "completed"
        ),
      };
    case todoTypes.CLEAR_COMPLETED:
      return {
        ...state,
        allItems: [...state.allItems].filter(
          (item) => item.status !== "completed"
        ),
        completedItems: [],
      };
    default:
      return state;
  }
};

export default TodoReducer;
