import { useState } from "react";
import LandingPage from "./components/LandingPage";
import TodoProvider from "./context/todo/TodoProvider";

function App() {
  const colorTheme = localStorage.getItem("theme") || "dark";
  const [currentTheme, setCurrentTheme] = useState<string>(colorTheme);

  const toggleThemeHandler = (): void => {
    setCurrentTheme((prevTheme) => {
      if (prevTheme === "dark") {
        localStorage.setItem("theme", "light");
        return "light";
      } else {
        localStorage.setItem("theme", "dark");
        return "dark";
      }
    });
  };
  return (
    <TodoProvider>
      <div className="App">
        <LandingPage theme={currentTheme} toggleTheme={toggleThemeHandler} />
      </div>
    </TodoProvider>
  );
}

export default App;
