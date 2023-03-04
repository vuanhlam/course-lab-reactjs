import { useState, useEffect } from "react";
import { createContext } from "react";

const themes = {
  dark: {
    backgroundColor: "#141414",
    color: "#ffff",
  },
  light: {
    backgroundColor: "#ffff",
    color: "#141414",
  },
};

const initialState = {
  dark: false,
  themeUI: themes.light,
  toggle: () => {},
};

const ThemeContext = createContext(initialState);

function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false); // Default theme is light

  // On mount, read the preferred theme from the persistence
  useEffect(() => {
    const isDark = localStorage.getItem("dark") === "true";
    setDark(isDark);
  }, [dark]);
  // To toggle between dark and light modes

  const toggle = () => {
    console.log('toggle cliked');
    const isDark = !dark;
    localStorage.setItem("dark", JSON.stringify(isDark));
    setDark(isDark);
  };
  
  const themeUI = dark ? themes.dark : themes.light;
  
  return (
    <ThemeContext.Provider value={{ themeUI, dark, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext };
