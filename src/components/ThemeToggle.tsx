import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="flex items-center space-x-1 p-1.5 text-xs bg-gray-200 dark:bg-gray-800 rounded-md shadow-md hover:bg-gray-300 dark:hover:bg-gray-700 transition-all"
    >
      <span>{isDarkMode ? '🌙' : '☀️'}</span>
      <span>{isDarkMode ? 'Dark' : 'Light'}</span>
    </button>
  );
};

export default ThemeToggle;