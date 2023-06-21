import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import Title from "../Title/Title";
import TimelineImg from "../TimelineImg/TimelineImg";

export default function Navbar() {
  return (
    <nav className={styles.navbar + " p-m"}>
      <Link href="/" className={styles.textLink}>
        LIFE GOALS
      </Link>

      <Link href="/timeline">
        <TimelineImg />
      </Link>
    </nav>
  );
}
