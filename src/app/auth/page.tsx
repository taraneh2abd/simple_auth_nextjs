"use client";

import React, { useState } from "react";
import styles from "./auth.module.scss";
import AuthButton from "./AuthButton";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();  // جلوی رفرش صفحه رو می‌گیره
    setLoading(true);
    try {
      const res = await fetch("https://randomuser.me/api/?results=1&nat=us");
      const data = await res.json();
      const user = data.results[0];
      localStorage.setItem("user", JSON.stringify(user));
      router.push("/dashboard");
    } catch (error) {
      alert("خطا در ورود");
    }
    setLoading(false);
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.container} onSubmit={handleLogin}>
        <h1>صفحه ورود</h1>
        {/* اگر input داری اینجا بذار */}
        <AuthButton loading={loading} onClick={() => {}} disabled={loading}>
          ورود
        </AuthButton>
      </form>
    </div>
  );
}
