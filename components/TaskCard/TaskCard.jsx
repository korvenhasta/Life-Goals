import React from "react";
import styles from "./TaskCard.module.css";
import Subtitle from "../Subtitle/Subtitle";
import Paragraph from "../Paragraph/Paragraph";
import Button from "../Button/Button";
import Container from "../Container/Container";
import Popup from "reactjs-popup";
import DeletingPopUp from "../DeletingPopUp/DeletingPopUp";

export default function TaskCard(props) {
  return (
    <div className={styles.taskCard + " p-m"}>
      <Subtitle>{props.taskName}</Subtitle>
      <Paragraph>Estimated due date: {props.taskDate}</Paragraph>
      <Container>
        <Button variant={"button_primary"}>Complete</Button>

        <Container>
          <Button variant={"button_edit"}>Edit</Button>

          {/* <Popup
            trigger={
              <Button
                variant={"button_danger"}
                onClick={() => {
                  props.handleDeleteTask(props.taskId);
                }}
              >
                Delete
              </Button>
            }
            position="right center"
          >
            <div>
              <DeletingPopUp />
            </div>
          </Popup> */}

          <Button
            variant={"button_danger"}
            onClick={() => {
              props.handleDeleteTask(props.taskId);
            }}
          >
            Delete
          </Button>
        </Container>
      </Container>
    </div>
  );
}
