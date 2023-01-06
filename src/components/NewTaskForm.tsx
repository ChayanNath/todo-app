import React, { useRef } from "react";

const NewTaskForm = () => {
  useRef();
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };
  return (
    <form className="form" onSubmit={submitHandler}>
      <button
        aria-label="Add new item"
        type="submit"
        className="input-check"
      ></button>
      <input type="text" placeholder="Create a new todo..." />
    </form>
  );
};

export default NewTaskForm;
