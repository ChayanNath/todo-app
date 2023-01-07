import { useState } from "react";
import LandingPage from "./components/LandingPage";
import TodoProvider from "./context/todo/TodoProvider";

function App() {
  const [currentTheme, setCurrentTheme] = useState<string>("dark");

  const toggleThemeHandler = (): void => {
    setCurrentTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
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
