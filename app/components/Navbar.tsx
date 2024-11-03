// Navbar.jsx
import React from "react";
import { Bell, Search, Moon, Sun } from "lucide-react";

type Props = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

const Navbar = ({ darkMode, toggleDarkMode }: Props) => {
  return (
    <nav className="fixed top-0 left-0 right-0 backdrop-blur-md bg-white/70 dark:bg-gray-800/70 shadow-lg border-b border-white/20 dark:border-gray-700/30 px-6 py-4 z-20">
      <div className="flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 text-transparent bg-clip-text">
            HealthCare+
          </h1>
        </div>

        {/* Search Bar */}
        <div className="flex-grow max-w-3xl relative">
          <Search className="absolute left-3 top-1/2 h-5 w-5 text-gray-400 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search patients, appointments, records..."
            className="w-full pl-10 pr-4 py-2 rounded-lg 
              backdrop-blur-lg bg-white/50 dark:bg-gray-700/50 
              border border-gray-200/50 dark:border-gray-600/50
              focus:outline-none focus:ring-2 focus:ring-blue-500/50
              text-gray-700 dark:text-gray-100 
              placeholder-gray-500 dark:placeholder-gray-400"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4 flex-shrink-0">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full
              backdrop-blur-lg bg-white/50 dark:bg-gray-700/50
              hover:bg-white/80 dark:hover:bg-gray-700/80
              transition-colors duration-200"
          >
            {darkMode ? (
              <Sun className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            ) : (
              <Moon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            )}
          </button>

          {/* Notifications */}
          <button
            className="p-2 rounded-full
            backdrop-blur-lg bg-white/50 dark:bg-gray-700/50
            hover:bg-white/80 dark:hover:bg-gray-700/80
            transition-colors duration-200"
          >
            <Bell className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          </button>

          {/* User Profile */}
          <div
            className="flex items-center space-x-2 p-1 rounded-full
            backdrop-blur-lg bg-white/50 dark:bg-gray-700/50"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-medium">
              DR
            </div>
            <span className="font-medium text-gray-900 dark:text-gray-100 pr-2">
              Dr. Roberts
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
