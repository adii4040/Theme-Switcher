import React, { createContext, useContext, useState } from 'react';



// Created a context for the theme
const ThemeContext = createContext();  


//To provide the theme context to the components, I created a ThemeProvider component
const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Custom hook to use the ThemeContext within components and access the theme and toggle function
const useTheme = () => {
  const context = useContext(ThemeContext); // Accessing the context
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider'); 
  }
  return context;
};


export { ThemeProvider, useTheme };