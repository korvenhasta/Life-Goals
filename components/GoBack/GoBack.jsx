import React from "react";
import styles from "./GoBack.module.css";
import Paragraph from "../Paragraph/Paragraph";

export default function GoBack() {
  return (
    <div className={styles.goBack}>
      <img
        className={styles.goBackImg}
        src="/back_arrow.svg"
        alt="Back arrow"
      />
      <Paragraph>Go Back</Paragraph>
    </div>
  );
}
