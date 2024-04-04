import { useState } from "react";
import "./lightDarkMode.css";
import useLocalStorage from "./useLocalStorage";

export default function LightDarkMode() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  function handleToggle() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <div className='light-dark-mode' data-theme={theme}>
      <div className='container'>
        <h1>Light Mode Dark Mode</h1>
        <button onClick={handleToggle}>Toggle</button>
      </div>
    </div>
  );
}
