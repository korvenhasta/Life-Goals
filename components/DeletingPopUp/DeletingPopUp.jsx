import React from "react";
import Button from "../Button/Button";
import Container from "../Container/Container";
import Paragraph from "../Paragraph/Paragraph";
import Title from "../Title/Title";
import styles from "./DeletingPopUp.module.css";

export default function DeletingPopUp() {
  return (
    <div className={styles.delitingPopup + " p-m"}>
      <Title>Delete task?</Title>
      <Paragraph>
        The task will be deleted permanently. There is no undo here.
      </Paragraph>
      <Container>
        <Button variant={"button_danger"}>Delete</Button>
        <Button variant={"button_secondary"}>Cancel</Button>
      </Container>
    </div>
  );
}
