"use client";
import { useEffect, useState } from "react";
import CircleButton from "@/app/components/CircleButton/CircleButton";

export default function BackButton() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDark = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    checkDark();

    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const goBack = () => {
    window.history.back();
  };

  return (
    <CircleButton onClick={goBack} isDark={isDark}>
      👈
    </CircleButton>
  );
}
