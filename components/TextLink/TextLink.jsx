import React from "react";
import styles from "./TextLink.module.css";

export default function TextLink({ children, ...props }) {
  return (
    <a {...props} className={styles.textLink}>
      {children}
    </a>
  );
}
