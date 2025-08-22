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

## 🔧 Technical Implementation

### Context Architecture

**ThemeContext.js**
- Creates the React context using `createContext()`
- Foundation for sharing theme state across the component tree

**ThemeProvider.jsx**
- Manages theme state using `useState` hook
- Provides `theme` (current theme) and `toggleTheme` (switch function)
- Wraps child components to provide global access

**useTheme.js**
- Custom hook for consuming theme context
- Includes error boundary for proper usage validation
- Simplifies theme access in components

### State Management Flow

1. **Provider Setup**: `ThemeProvider` wraps the entire application
2. **State Creation**: `useState` manages theme state ('light' or 'dark')
3. **Context Distribution**: Theme data flows to all child components
4. **Component Consumption**: Components use `useTheme()` hook to access theme
5. **State Updates**: `toggleTheme()` updates global state, triggering re-renders
