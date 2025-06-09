"use client";
import ThemeToggle from "@/app/components/ThemeToggle/ThemeToggle";
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
      alert("error in logging in");
    }
    setLoading(false);
  };

return (
  <div className={styles.wrapper}>
    <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
      <ThemeToggle />
      {/* <ThemeToggle />
      <ThemeToggle /> */}
    </div>

        <form className={styles.container} onSubmit={handleLogin}>
            <span>hello!</span>
      <h1>please click below to redirect to dashboard</h1>
      {/* اگر input داری اینجا بذار */}
      <AuthButton loading={loading} onClick={() => {}} disabled={loading}>
        login
      </AuthButton>
    </form>
  </div>
);

}
