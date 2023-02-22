import React from "react";
import Button from "../components/Button/Button";
import styles from "../styles/Modal.module.css";
import Title from "../components/Title/Title";
import Paragraph from "../components/Paragraph/Paragraph";
import ButtonContainer from "../components/ButtonContainer/ButtonContainer";

export default function Modal({ open, children, onClose, onClickDelete }) {
  if (!open) return null;
  return (
    <>
      <div className={styles.overlay_styles} onClick={onClose} />
      <div className={styles.modal_styles}>
        <Title>Delete task?</Title>
        <Paragraph>
          The task will be deleted permanently. There is no undo here.
        </Paragraph>
        <ButtonContainer>
          <Button variant={"button_danger"} onClick={onClickDelete}>
            Delete
          </Button>
          <Button variant={"button_secondary"} onClick={onClose}>
            Cancel
          </Button>
        </ButtonContainer>
        {children}
      </div>
    </>
  );
}
