"use client";
import React from "react";
import CircleButton from "@/app/components/CircleButton/CircleButton";

interface BackgroundToggleProps {
  isBgVisible: boolean;
  toggleBackground: () => void;
  isDark: boolean;
}

export default function BackgroundToggle({
  isBgVisible,
  toggleBackground,
  isDark,
}: BackgroundToggleProps) {
  return (
    <CircleButton onClick={toggleBackground} isDark={isDark} isActive={isBgVisible}>
      ⭐
    </CircleButton>
  );
}
