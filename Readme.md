# Theme Switcher - React Context Global State Management

A React application demonstrating global state management using React Context API to implement a dynamic theme switching feature.

## 🎯 Overview

This project showcases how to use React Context for global state management, eliminating prop drilling and providing a clean architecture for shared application state. The theme switcher allows users to toggle between light and dark modes with real-time updates across all components.

## 🏗️ Project Structure

```
src/
├── Context/
│   ├── ThemeContext.js      # Context creation
│   └── ThemeProvider.jsx    # Provider component with state logic
├── Hooks/
│   └── useTheme.js          # Custom hook for theme consumption
├── Components/
│   ├── Header.jsx           # Header with theme toggle button
│   └── Home.jsx             # Main content component
├── App.jsx                  # Root application component
└── main.jsx                 # Application entry point
```

## 🚀 Features

- **Global Theme State**: Centralized theme management accessible from any component
- **Dynamic Theme Switching**: Toggle between light and dark themes
- **Context API Implementation**: Proper use of React Context for state management
- **Custom Hook Pattern**: Clean interface for consuming theme context
- **Error Handling**: Context validation with helpful error messages
- **Responsive Design**: Tailwind CSS styling that adapts to theme changes


## 📦 Installation

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/adii4040/Theme-Switcher
   cd theme-switcher-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Install required packages** (if not included)
   ```bash
   npm install react react-dom
   npm install -D tailwindcss postcss autoprefixer
   npm install -D @vitejs/plugin-react
   ```

4. **Setup Tailwind CSS** (if not configured)
   ```bash
   npx tailwindcss init -p
   ```

5. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser**
   - Navigate to `http://localhost:5173` (or the URL shown in terminal)
   - Test the theme switching functionality
