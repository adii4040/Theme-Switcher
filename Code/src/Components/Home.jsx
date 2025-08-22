import React from 'react';
import { useTheme } from '../Context/ThemeProvider';

const Home = () => {
    const { theme } = useTheme(); // this the theme state from the context provided by the useTheme hook to access the current theme

    return (
        <main className={`min-h-screen p-8 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
            }`}>
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-4">Welcome to the Theme Switcher!</h2>
                <p className="text-lg mb-6">
                    Click the theme button in the header to switch between light and dark modes.
                </p>
                <div className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                    } shadow-md`}>
                    <h3 className="text-xl font-semibold mb-2">Current Theme: {theme}</h3>
                    <p>This content changes appearance based on the selected theme.</p>
                </div>
            </div>
        </main>
    );
};

export default Home;