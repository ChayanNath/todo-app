import React, { useReducer } from "react";
import { TodosContextObject, Todo, TodosInitialState } from "../../models/todo";
import { todoTypes } from "../todo-types";
import TodoContext from "./todo-context";
import TodoReducer from "./TodoReducer";

const INITIAL_STATE: TodosInitialState = {
  allItems: [],
  completedItems: [],
  activeItems: [],
  type: "all",
  itemsLeft: 0,
};

type Props = {
  children: React.ReactNode;
};

const TodoProvider: React.FC<Props> = (props) => {
  const [state, dispatch] = useReducer(TodoReducer, INITIAL_STATE);

  const addItem = (item: Todo) => {
    dispatch({ type: todoTypes.ADD_ITEM, payload: item });
  };

  const markComplete = (id: string, type: boolean) => {
    if (type) {
      dispatch({ type: todoTypes.MARK_COMPLETE, payload: id });
    } else {
      dispatch({ type: todoTypes.UNDO_COMPLETE, payload: id });
    }
  };

  const getActiveItems = () => {
    dispatch({ type: todoTypes.GET_ACTIVE });
  };
  const getCompletedItems = () => {
    dispatch({ type: todoTypes.GET_COMPLETED });
  };

  const getAllItems = () => {
    dispatch({ type: todoTypes.GET_ALL });
  };

  const deleteItem = (id: string) => {
    dispatch({ type: todoTypes.DELETE_ITEM, payload: id });
  };

  const clearCompleted = () => {
    dispatch({ type: todoTypes.CLEAR_COMPLETED });
  };

  const contextValue: TodosContextObject = {
    allItems: state.allItems,
    completedItems: state.completedItems,
    activeItems: state.activeItems,
    itemsLeft: state.itemsLeft,
    type: state.type,
    addItem,
    markComplete,
    getActiveItems,
    getCompletedItems,
    getAllItems,
    deleteItem,
    clearCompleted,
  };
  return (
    <TodoContext.Provider value={contextValue}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
