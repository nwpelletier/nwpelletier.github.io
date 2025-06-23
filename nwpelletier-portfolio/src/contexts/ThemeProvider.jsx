import { useState, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider = ({ children }) => {
  const [themeKey, setThemeKey] = useState("blue");

  useEffect(() => {
    document.body.className = `theme-${themeKey}`;
  }, [themeKey]);

  return (
    <ThemeContext.Provider value={{ themeKey, setThemeKey }}>
      {children}
    </ThemeContext.Provider>
  );
};
