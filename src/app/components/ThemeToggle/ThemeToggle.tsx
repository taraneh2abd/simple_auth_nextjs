"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      style={{
        position: "fixed",
        bottom: "520px",
        left: "20px",
        padding: "10px",
        borderRadius: "999px",
        border: "none",
        background: darkMode ? "#f5f5f5" : "#121212",
        color: darkMode ? "#1f1f1f" : "#e0e0e0",
        fontSize: "20px",
        cursor: "pointer",
      }}
    >
      {darkMode ? "🌞" : "🌙"}
    </button>
  );
}
