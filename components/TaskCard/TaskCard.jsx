import React, { useState } from "react";
import styles from "./TaskCard.module.css";
import Subtitle from "../Subtitle/Subtitle";
import Paragraph from "../Paragraph/Paragraph";
import Button from "../Button/Button";
import Container from "../Container/Container";
import Modal from "../../pages/Modal";
import EditingTask from "../EditingTask/EditingTask";
import { DateTime } from "luxon";

export default function TaskCard(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEditing, setIsOpenEditing] = useState(false);

  return (
    <div className={styles.taskCard + " p-m"}>
      <Subtitle>{props.taskName}</Subtitle>
      <Paragraph>
        Estimated due date:{" "}
        {DateTime.fromISO(props.taskDate).toFormat("dd-MM-yyyy")}
      </Paragraph>
      <Container>
        <Button variant={"button_primary"}>Complete</Button>

        <Container>
          <Button
            variant={"button_edit"}
            onClick={() => {
              setIsOpenEditing(true);
            }}
          >
            Edit
          </Button>
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
      <EditingTask
        openEditing={isOpenEditing}
        onCloseEditing={() => setIsOpenEditing(false)}
        taskName={props.taskName}
        taskDate={props.taskDate}
        taskId={props.taskId}
      />
    </div>
  );
}
