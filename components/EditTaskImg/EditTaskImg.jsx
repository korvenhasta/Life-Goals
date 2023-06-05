import Image from "next/image";
import React from "react";
import ImageContainer from "../LogoImageContainer/LogoImageContainer";
import styles from "./EditTaskImg.module.css";

export default function EditTaskImg() {
  return (
    <ImageContainer>
      <Image
        src="/edittask.svg"
        alt="Picture of the editing a task"
        className={styles.editTaskImg}
        fill
        sizes="(min-width: 768px) 100vw"
      />
    </ImageContainer>
  );
}
