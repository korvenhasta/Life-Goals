import React from "react";
import styles from "./PageWrapper.module.css";

export default function PageWrapper({ children, ...props }) {
  return (
    <div {...props} className={styles.pageWrapper}>
      {children}
    </div>
  );
}
