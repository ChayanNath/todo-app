import { useState } from "react";
import LandingPage from "./components/LandingPage";

function App() {
  const [currentTheme, setCurrentTheme] = useState<string>("dark");

  const toggleThemeHandler = (): void => {
    setCurrentTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };
  return (
    <div className="App">
      <LandingPage theme={currentTheme} toggleTheme={toggleThemeHandler} />
    </div>
  );
}

export default App;
