import React from "react";
import styles from "./TimelineContainer.module.css";

export default function TimelineContainer({ children, ...props }) {
  return (
    <div {...props} className={styles.timelineContainer}>
      {children}
    </div>
  );
}
