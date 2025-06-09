"use client";

import React from "react";
import styles from "./auth.module.scss";

interface AuthButtonProps {
  onClick: () => void;
  loading: boolean;
  children: React.ReactNode;
  disabled?: boolean;  // این خط رو اضافه کن
}


export default function AuthButton({ onClick, loading, children, disabled }: AuthButtonProps) {
    return (
    <button
      className={styles.authButton}
      onClick={onClick}
      disabled={disabled}
      type="submit" // بهتر بذاری اینجا چون دکمه submit هست
    >
      {loading ? "please wait...." : children}
    </button>
  );
}
