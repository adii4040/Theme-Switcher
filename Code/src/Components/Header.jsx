import React from 'react';
import { useTheme } from '../Context/ThemeProvider';


const Header = () => {
    const { theme, toggleTheme } = useTheme();  //this the theme state and toggleTheme function from the context provided by the useTheme hook to access the current theme and toggle it

    return (
        <header className={`p-4 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
            } shadow-md`}>
            <div className="flex justify-between items-center max-w-4xl mx-auto">
                <h1 className="text-2xl font-bold">Theme Switcher App</h1>
                <button
                    onClick={toggleTheme}
                    className={`px-4 py-2 rounded ${theme === 'dark'
                        ? 'bg-gray-600 hover:bg-gray-700'
                        : 'bg-gray-200 hover:bg-gray-300'
                        }`}
                >
                    {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
                </button>
            </div>
        </header>
    );
};

export default Header;