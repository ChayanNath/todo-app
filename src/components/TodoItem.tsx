import React, { useContext, useState } from "react";
import { ReactComponent as ClearIcon } from "../assets/images/icon-cross.svg";
import TodoContext from "../context/todo/todo-context";

type TodoItemType = {
  id: string;
  title: string;
  status: string;
};

const TodoItem: React.FC<TodoItemType> = (props) => {
  const todosCtx = useContext(TodoContext);

  const [complete, setComplete] = useState<boolean>(true);

  const markAsCompleteClickHandler = () => {
    setComplete(!complete);
    todosCtx.markComplete(props.id, complete);
  };

  return (
    <li
      className={`todo-item ${props.status === "completed" ? "completed" : ""}`}
    >
      <div className="item-check-wrapper" onClick={markAsCompleteClickHandler}>
        <div
          className={`item-check ${
            props.status === "completed" ? "completed" : ""
          }`}
        ></div>
        <span>{props.title}</span>
      </div>
      <button
        aria-label="Delete task"
        className={`delete-icon enabled`}
        onClick={() => todosCtx.deleteItem(props.id)}
      >
        <ClearIcon />
      </button>
    </li>
  );
};

export default TodoItem;
