import React, { useContext, useRef, useState } from "react";
import TodoContext from "../context/todo/todo-context";
import { Todo } from "../models/todo";
import { v4 as uuid4 } from "uuid";

const NewTaskForm = () => {
  const [todoText, setTodotext] = useState<string>("");

  const todoItemChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTodotext(event.target.value);
  };

  const todoCtx = useContext(TodoContext);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    if (todoText.trim().length === 0) {
      return;
    }

    const todoItem: Todo = {
      id: uuid4(),
      title: todoText,
      status: "active",
      createdAt: new Date(),
    };

    todoCtx.addItem(todoItem);
    setTodotext("");
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <button
        aria-label="Add new item"
        type="submit"
        className="input-check"
      ></button>
      <input
        type="text"
        placeholder="Create a new todo..."
        value={todoText}
        onChange={todoItemChangeHandler}
      />
    </form>
  );
};

export default NewTaskForm;
