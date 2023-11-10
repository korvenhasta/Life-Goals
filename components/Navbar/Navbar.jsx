import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import LoginControls from "../LoginControls/LoginControls";

export default function Navbar() {
  return (
    <nav className={styles.navbar + " p-s"}>
      <div className={styles.navbarContent}>
        <Link href="/" className={styles.textLink}>
          LIFE GOALS
        </Link>
        <LoginControls />
      </div>
    </nav>
  );
}
