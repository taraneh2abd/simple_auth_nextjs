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
        bottom: 520,    // بهتره مقادیر px رو عدد بذاری، راحت‌تره
        left: 20,
        padding: 10,
        borderRadius: "999px",
        border: "none",
        background: darkMode ? "#901E3E" : "#121212",
        color: darkMode ? "#1f1f1f" : "#e0e0e0",
        fontSize: 20,
        cursor: "pointer",
        transition: "background 0.3s ease, color 0.3s ease",
      }}
      aria-label="Toggle theme"
    >
      {darkMode ? "🌞" : "🌙"}
    </button>
  );
}
