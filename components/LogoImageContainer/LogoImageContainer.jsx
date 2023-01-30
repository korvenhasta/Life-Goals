import React from "react";
import styles from "./LogoImageContainer.module.css";

export default function ImageContainer({ children, ...props }) {
  return (
    <div {...props} className={styles.logoImageContainer}>
      {children}
    </div>
  );
}
