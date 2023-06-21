import React from "react";
import styles from "./ImageContainer.module.css";

export default function ImageContainer({ children, ...props }) {
  return (
    <div {...props} className={styles.imageContainer}>
      {children}
    </div>
  );
}
