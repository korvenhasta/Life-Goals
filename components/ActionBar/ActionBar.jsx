import React from "react";
import styles from "./ActionBar.module.css";
import Link from "next/link";
import TimelineImg from "../TimelineImg/TimelineImg";
import Button from "../Button/Button";

export default function ActionBar({ children }) {
  return <div className={styles.actionBar + " p-s"}>{children}</div>;
}
