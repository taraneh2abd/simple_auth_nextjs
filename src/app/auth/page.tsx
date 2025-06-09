"use client";

import React, { useState } from "react";
import styles from "./auth.module.scss";
import AuthButton from "./AuthButton";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://randomuser.me/api/?results=1&nat=us");
      const data = await res.json();
      const user = data.results[0];
        localStorage.setItem("user", JSON.stringify(user));
        console.log("All localStorage contents:");


        for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key!);
    console.log(`${key}:`, value);
    }

      router.push("/dashboard");
    } catch (error) {
      alert("خطا در ورود");
    }
    setLoading(false);
  };

  return (
    <main className={styles.container}>
      <h1>صفحه ورود</h1>
      <AuthButton onClick={handleLogin} loading={loading}>
        ورود
      </AuthButton>
    </main>
  );
}
