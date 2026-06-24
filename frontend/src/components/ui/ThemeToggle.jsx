"use client";

import { useTheme } from "@/context/ThemeProvider";


export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Current Theme: {theme}
    </button>
  );
}