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
    <button
      onClick={toggleTheme}
      style={{
        position: "fixed",
        bottom: 40,
        left: 40,
        padding: 20,
        borderRadius: "999px",
        border: "none",
        background: darkMode ? "#7882ad" : "#194369",
        color: darkMode ? "#1f1f1f" : "#e0e0e0",
        fontSize: 36, // بزرگ‌تر شد
        cursor: "pointer",
        transition: "background 0.3s ease, color 0.3s ease",
        boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
      }}
      aria-label="Toggle theme"
    >
      {darkMode ? "🌞" : "🌙"}
    </button>
  );
}
