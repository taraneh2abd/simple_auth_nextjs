"use client";

import React from "react";
import styles from "./auth.module.scss";

interface AuthButtonProps {
  onClick: () => void;
  loading: boolean;
  children: React.ReactNode;
}

export default function AuthButton({ onClick, loading, children }: AuthButtonProps) {
  return (
    <button className={styles.authButton} onClick={onClick} disabled={loading}>
      {loading ? "لطفا صبر کنید..." : children}
    </button>
  );
}
