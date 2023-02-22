import React from "react";
import styles from "./ButtonContainer.module.css";

export default function ButtonContainer({ children, ...props }) {
  return (
    <div {...props} className={styles.buttonContainer}>
      {children}
    </div>
  );
}
