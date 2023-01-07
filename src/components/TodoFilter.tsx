import React from "react";

type PropsType = {
  selectedFilter: string;
  updateFilter: (selected: string) => void;
};

const TodoFilter: React.FC<PropsType> = (props) => {
  const clickHandler = (selected: string) => {
    props.updateFilter(selected);
  };

  return (
    <div className="filter-wrapper">
      <button
        type="button"
        className={`filter-option ${
          props.selectedFilter === "all" ? "active" : ""
        }`}
        onClick={() => clickHandler("all")}
        aria-label="Select all items"
      >
        All
      </button>
      <button
        type="button"
        className={`filter-option ${
          props.selectedFilter === "active" ? "active" : ""
        }`}
        onClick={() => clickHandler("active")}
        aria-label="Select active items"
      >
        Active
      </button>
      <button
        type="button"
        className={`filter-option ${
          props.selectedFilter === "completed" ? "active" : ""
        }`}
        onClick={() => clickHandler("completed")}
        aria-label="Select all completed items."
      >
        Completed
      </button>
    </div>
  );
};

export default TodoFilter;
