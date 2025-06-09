"use client";
import ThemeToggle from "@/app/components/ThemeToggle/ThemeToggle";
import BackgroundToggle from "@/app/components/BackgroundToggle/BackgroundToggle";
import AuthButton from "@/app/components/AuthButton/AuthButton";
import React, { useEffect, useState } from "react";
import styles from "./auth.module.scss";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const [loading, setLoading] = useState(false);
  const [isBgVisible, setIsBgVisible] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const router = useRouter();

  const darkImage = "./dark.jpg";
  const lightImage = "./light.jpg";

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

  const toggleBackground = () => {
    setIsBgVisible((v) => !v);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const user = { name: "Sample User" };
      localStorage.setItem("user", JSON.stringify(user));
      router.push("/dashboard");
    } catch {
      alert("error in logging in");
    }
    setLoading(false);
  };

  return (
    <div
      className={styles.wrapper}
      style={{
        backgroundImage: isBgVisible
          ? `url(${isDark ? darkImage : lightImage})`
          : undefined,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundColor: "transparent",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
        <ThemeToggle />
        <BackgroundToggle
          isBgVisible={isBgVisible}
          toggleBackground={toggleBackground}
          isDark={isDark}
        />
      </div>

      <form className={styles.container} onSubmit={handleLogin}>
        <span>hello!</span>
        <h1>please click below to redirect to dashboard</h1>
        <AuthButton loading={loading} onClick={() => {}} disabled={loading}>
          login
        </AuthButton>
      </form>
    </div>
  );
}
