"use client";
import { useEffect, useState } from "react";

export default function BackButton() {
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

  const goBack = () => {
    window.history.back();
  };

  return (
    <button
      onClick={goBack}
      style={{
        padding: 9,
        borderRadius: "999px",
        border: "none",
        background: darkMode ? "#7882ad" : "#ffffff",
        color: darkMode ? "#1f1f1f" : "#e0e0e0",
        fontSize: 30,
        cursor: "pointer",
        transition: "background 0.3s ease, color 0.3s ease",
        boxShadow: "0 3px 10px rgba(0,0,0,0.2)",
        margin: "0 10px",
        marginBottom: "25px"
      }}
    >
      {"👈"}
    </button>
  );
}
