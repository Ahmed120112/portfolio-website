import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isArabic, setIsArabic] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const toggleLanguage = () => setIsArabic(!isArabic);

  return (
    <ThemeContext.Provider value={{ isDarkMode, isArabic, toggleDarkMode, toggleLanguage }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}