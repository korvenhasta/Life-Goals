import Image from "next/image";
import React from "react";
import FormImageContainer from "../FormImageContainer/FormImageContainer";
import styles from "./EditTaskImg.module.css";

export default function EditTaskImg() {
  return (
    <FormImageContainer>
      <Image
        src="/edittask.svg"
        alt="Picture of the editing a task"
        className={styles.editTaskImg}
        fill
        sizes="(min-width: 768px) 100vw"
      />
    </FormImageContainer>
  );
}
