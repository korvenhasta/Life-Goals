import React from "react";
import styles from "./FormImageContainer.module.css";

export default function FormImageContainer({ children, ...props }) {
  return (
    <div {...props} className={styles.formImageContainer}>
      {children}
    </div>
  );
}
