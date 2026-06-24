"use client";

import { useTheme } from "@/context/ThemeProvider";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme} 
      className="flex items-center justify-center p-2 rounded-full hover:bg-[var(--text)]/10 transition-colors duration-300"
      aria-label="Toggle Theme"
    >
      {theme === 'light' ? (
        <FiMoon className="w-5 h-5 text-[var(--text)]" />
      ) : (
        <FiSun className="w-5 h-5 text-[var(--text)]" />
      )}
    </button>
  );
}