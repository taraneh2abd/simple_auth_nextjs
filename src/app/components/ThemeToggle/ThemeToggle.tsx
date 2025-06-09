"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  return (
// در ThemeToggle
<button
  onClick={toggleTheme}
  style={{
    padding: 9, // کمتر شد
    borderRadius: "999px",
    border: "none",
    background: darkMode ? "#7882ad" : "#ffffff",
    color: darkMode ? "#1f1f1f" : "#e0e0e0",
    fontSize: 30, // کوچکتر شد
    cursor: "pointer",
    transition: "background 0.3s ease, color 0.3s ease",
    boxShadow: "0 3px 10px rgba(0,0,0,0.2)",
    margin: "0 10px",
    marginBottom: "25px",
    // boxShadow: "0 5px 15px rgba(0, 0, 0, 0.25)"
  }}
>
  {darkMode ? "🌞" : "🌙"}
</button>

  );
}
