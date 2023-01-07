import React, { useContext } from "react";
import TodoContext from "../context/todo/todo-context";
import { Todo } from "../models/todo";
import TodoFilter from "./TodoFilter";
import TodoItem from "./TodoItem";

const Todos = () => {
  const todosCtx = useContext(TodoContext);
  const {
    allItems,
    completedItems,
    activeItems,
    itemsLeft,
    type,
    getActiveItems,
    getCompletedItems,
    getAllItems,
    clearCompleted,
  } = todosCtx;

  let data: Todo[] =
    type === "active"
      ? activeItems
      : type === "completed"
      ? completedItems
      : allItems;

  const filterChangeHandler = (selectedFilter: string) => {
    if (selectedFilter === "active") {
      getActiveItems();
    } else if (selectedFilter === "completed") {
      getCompletedItems();
    } else {
      getAllItems();
    }
  };

  return (
    <>
      <section className="todos-container">
        <ul className="list-items">
          {data.map((element) => (
            <TodoItem
              key={element.id}
              id={element.id}
              title={element.title}
              status={element.status}
            />
          ))}
        </ul>
        <div className="todo-list-footer">
          <div className="items-left">{itemsLeft} items left.</div>
          <TodoFilter
            selectedFilter={type}
            updateFilter={filterChangeHandler}
          />
          <button
            aria-label="Clear Completed"
            className="btn-clear"
            onClick={() => clearCompleted()}
          >
            Clear Completed
          </button>
        </div>
      </section>
      <div className="filter-mobile">
        <TodoFilter selectedFilter={type} updateFilter={filterChangeHandler} />
      </div>
    </>
  );
};

export default Todos;
