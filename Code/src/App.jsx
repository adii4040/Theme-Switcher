import React from 'react';
import { ThemeProvider } from './Context/ThemeProvider';
import Header from './Components/Header';
import Home from './Components/Home';

const App = () => {
  return (
    // this wraps the entire application in the ThemeProvider to provide theme context
    <ThemeProvider>
      <div>
        <Header />
        <Home />
      </div>
    </ThemeProvider>
  );
};

export default App;