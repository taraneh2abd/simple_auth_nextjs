"use client";
import { useEffect, useState } from "react";

export default function BackButton() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDark = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    checkDark();

    // برای وقتی که کاربر تغییر داد
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
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
        background: isDark ? "#7882ad" : "#ffffff",
        color: isDark ? "#1f1f1f" : "#e0e0e0",
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
