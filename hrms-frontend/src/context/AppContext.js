import React, { createContext, useState } from 'react';

// Create a context
export const AppContext = createContext();

// Context Provider Component
export const AppContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  return (
    <AppContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};
