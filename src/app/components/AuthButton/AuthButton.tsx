"use client";

import React from "react";
import styles from "./AuthButton.module.scss";

interface AuthButtonProps {
  onClick: () => void;
  loading: boolean;
  children: React.ReactNode;
  disabled?: boolean;
}


export default function AuthButton({ onClick, loading, children, disabled }: AuthButtonProps) {
    return (
    <button
      className={styles.authButton}
      onClick={onClick}
      disabled={disabled}
        type="submit"
    >
      {loading ? "please wait...." : children}
    </button>
  );
}
