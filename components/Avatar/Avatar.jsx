import React from "react";
import styles from "./Avatar.module.css";
import Image from "next/image";

export default function Avatar({ imageSource }) {
  return (
    <div className={styles.avatarContainer}>
      <Image
        src={imageSource}
        alt="User Avatar"
        className={styles.avatarImage}
        fill
        sizes="(min-width: 768px) 100vw"
      />
    </div>
  );
}
