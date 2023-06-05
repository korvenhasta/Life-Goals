import React from "react";
import styles from "./Paragraph.module.css";

export default function Paragraph({ children, className, ...props }) {
  return (
    <p {...props} className={`${styles.paragraph} ${className}`}>
      {children}
    </p>
  );
}
