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
            <h1>
              Welcome,{" "}
              <span className={styles.username}>
                {user?.name?.first ?? "User"}!
              </span>
            </h1>

            <div className={styles.tableWrapper}>
              <table>
                <tbody>
                  <TableRow
                    label="Full Name"
                    value={`${user?.name?.title ?? ""} ${user?.name?.first ?? ""} ${user?.name?.last ?? ""}`}
                  />
                  <TableRow label="Email" value={user?.email ?? "N/A"} />
                  <TableRow label="Username" value={user?.login?.username ?? "N/A"} />
                  <TableRow label="Phone" value={user?.phone ?? "N/A"} />
                  <TableRow label="Gender" value={user?.gender ?? "N/A"} />
                  <TableRow label="City" value={user?.location?.city ?? "N/A"} />
                  <TableRow label="Country" value={user?.location?.country ?? "N/A"} />
                  <TableRow label="Age" value={user?.dob?.age ?? "N/A"} />
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

function TableRow({ label, value }: { label: string; value?: string | number }) {
  return (
    <tr>
      <td className={styles.labelCell}>{label}</td>
      <td className={styles.valueCell}>{value ?? "N/A"}</td>
    </tr>
  );
}
