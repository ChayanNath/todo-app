import React, { useContext, useRef } from "react";
import TodoContext from "../context/todo/todo-context";
import { Todo } from "../models/todo";
import { v4 as uuid4 } from "uuid";

const NewTaskForm = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const todoCtx = useContext(TodoContext);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    const todoItem: Todo = {
      id: uuid4(),
      title: enteredText,
      status: "active",
      createdAt: new Date(),
    };

    todoCtx.addItem(todoItem);
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
        ref={todoTextInputRef}
      />
    </form>
  );
};

export default NewTaskForm;
