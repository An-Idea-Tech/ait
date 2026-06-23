"use client"

import { createContext, useState } from "react";

export const themeContext = createContext()

export default function ThemeContext({ children }) {
    const [theme, setTheme] = useState('light');

    return (
        <themeContext.Provider value={{ theme, setTheme }}>
            <div className={`min-h-screen flex flex-col transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-950 text-slate-50' : 'bg-slate-50 text-slate-900'}`}>
                {children}
            </div>
        </themeContext.Provider>
    )
}