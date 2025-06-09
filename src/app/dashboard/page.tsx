"use client";
import ThemeToggle from "@/app/components/ThemeToggle/ThemeToggle";
import BackButton from "@/app/components/BackButton/BackButton";
import React, { useEffect, useState } from "react";
import styles from "./dashboard.module.scss";

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
        <BackButton />
        <ThemeToggle />
      </div>

      <div className={styles.container} style={{ marginTop: "0px" }}>
        {user ? (
          <>
            <h1 className={styles.title}>
              Welcome, {user.name.first}!
            </h1>

            <div className={styles.tableWrapper}>
              <table>
                <tbody>
                  <TableRow label="Full Name" value={`${user.name.title} ${user.name.first} ${user.name.last}`} />
                  <TableRow label="Email" value={user.email} />
                  <TableRow label="Username" value={user.login.username} />
                  <TableRow label="Phone" value={user.phone} />
                  <TableRow label="Gender" value={user.gender} />
                  <TableRow label="City" value={user.location.city} />
                  <TableRow label="Country" value={user.location.country} />
                  <TableRow label="Age" value={user.dob.age} />
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <h2 style={{ textAlign: "center", marginTop: "50px" }}>No user data found.</h2>
        )}
      </div>
    </div>
  );
}

function TableRow({ label, value }: { label: string; value: string }) {
  return (
    <tr>
      <td className={styles.labelCell}>{label}</td>
      <td className={styles.valueCell}>{value}</td>
    </tr>
  );
}
