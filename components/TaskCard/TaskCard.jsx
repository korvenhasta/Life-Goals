import React, { useState } from "react";
import styles from "./TaskCard.module.css";
import Subtitle from "../Subtitle/Subtitle";
import Paragraph from "../Paragraph/Paragraph";
import Button from "../Button/Button";
import Container from "../Container/Container";
import Modal from "../../pages/Modal";

export default function TaskCard(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.taskCard + " p-m"}>
      <Subtitle>{props.taskName}</Subtitle>
      <Paragraph>Estimated due date: {props.taskDate}</Paragraph>
      <Container>
        <Button variant={"button_primary"}>Complete</Button>

        <Container>
          <Button variant={"button_edit"}>Edit</Button>
          <Button
            variant={"button_danger"}
            onClick={() => {
              setIsOpen(true);
            }}
          >
            Delete
          </Button>
        </Container>
      </Container>
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onClickDelete={() => props.handleDeleteTask(props.taskId)}
      ></Modal>
    </div>
  );
}
