import React, { useState, useEffect } from "react";
import Routes from "./containers/Routes";
import { ThemeProvider } from "styled-components";
import services from "./services";

import "./App.css";

const App = () => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    services.getMode().then((mode) => {
      setTheme(mode || "light");
    });
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      services.setMode("dark");
    } else {
      setTheme("light");
      services.setMode("light");
    }
  };

  return (
    <ThemeProvider theme={{ mode: theme }}>
      <div className="App">
        <Routes toggleTheme={toggleTheme} darkMode={theme === "dark"} />
      </div>
    </ThemeProvider>
  );
};

export default App;
