import Image from "next/image";
import React from "react";
import FormImageContainer from "../FormImageContainer/FormImageContainer";
import styles from "./AddTaskImg.module.css";

export default function AddTaskImg() {
  return (
    <FormImageContainer>
      <Image
        src="/addtask.svg"
        alt="Picture of the adding a new task"
        className={styles.addTaskImg}
        fill
        sizes="(min-width: 768px) 100vw"
      />
    </FormImageContainer>
  );
}
