import React, { useState } from "react";
import styles from "./TaskCard.module.css";
import Subtitle from "../Subtitle/Subtitle";
import Paragraph from "../Paragraph/Paragraph";
import Button from "../Button/Button";
import Container from "../Container/Container";
import Modal from "../../pages/Modal";
import EditingTask from "../EditingTask/EditingTask";
import { DateTime } from "luxon";
import Link from "next/link";
import { useRouter } from "next/router";

export default function TaskCard(props) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  function editCompanyHandler() {
    router.push(`/tasks/edit/${props.taskId}`);
  }

  function openTask() {
    router.push(`/tasks/${props.taskId}`);
  }

  return (
    <div className={styles.taskCard + " p-s"}>
      <Subtitle onClick={openTask}>{props.taskName}</Subtitle>
      <Paragraph>
        Estimated due date:{" "}
        {DateTime.fromISO(props.taskDate).toFormat("dd-MM-yyyy")}
      </Paragraph>
      <Container>
        <Button variant={"button_primary"}>Complete</Button>

        <Container>
          <Button onClick={editCompanyHandler} variant={"button_edit"}>
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
    </div>
  );
}
