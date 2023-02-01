import React from "react";
import styles from "./TaskCard.module.css";
import Subtitle from "../Subtitle/Subtitle";
import Paragraph from "../Paragraph/Paragraph";
import Button from "../Button/Button";
import Container from "../Container/Container";

export default function TaskCard(props) {
  return (
    <div className={styles.taskCard + " p-m"}>
      <Subtitle>{props.taskName}</Subtitle>
      <Paragraph>Estimated due date: {props.taskDate}</Paragraph>
      <Container>
        <Button variant={"button_primary"}>Complete</Button>

        <Container>
          <Button variant={"button_edit"}>Edit</Button>
          <Button variant={"button_danger"}>Delete</Button>
        </Container>
      </Container>
    </div>
  );
}
