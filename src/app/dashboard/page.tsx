"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./dashboard.module.scss";

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      router.replace("/auth");
    }
  }, [router]);

  return (
    <main className={styles.wrapper}>
      <div className={styles.container}>
        <h1>Welcome to the Dashboard</h1>
        <p>خوش آمدید! این صفحه داشبورد شما است.</p>
      </div>
    </main>
  );
}
