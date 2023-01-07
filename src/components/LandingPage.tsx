import React, { useEffect } from "react";
import { ReactComponent as LightIcon } from "../assets/images/icon-sun.svg";
import { ReactComponent as DarkIcon } from "../assets/images/icon-moon.svg";
import NewTaskForm from "./NewTaskForm";
import Todos from "./Todos";

const LandingPage: React.FC<{ theme: string; toggleTheme: () => void }> = (
  props
) => {
  useEffect(() => {
    document.body.className = props.theme;
  }, [props.theme]);
  return (
    <main className="main-section">
      <div className="container flex-column-container">
        <div className="title-section">
          <h1>Todo</h1>
          <button
            aria-label="Switch Theme"
            className="theme-switch"
            onClick={() => props.toggleTheme()}
          >
            {props.theme === "light" ? <DarkIcon /> : <LightIcon />}
          </button>
        </div>
        <NewTaskForm />
        <Todos />
      </div>
    </main>
  );
};

export default LandingPage;
