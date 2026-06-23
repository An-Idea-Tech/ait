"use client"

import { themeContext } from "@/context/themeContext";
import { useContext } from "react"

export default function Home() {

  const { theme, setTheme } = useContext(themeContext)
  
  return (
    <>
      <button onClick={()=> setTheme(theme==='light'? 'dark':'light')}>Change theme</button>
      <h1 className="text-5xl text-black">hello this is a {theme} theme</h1>
    </>
  );
}
