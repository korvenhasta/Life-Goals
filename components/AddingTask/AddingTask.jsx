import React from "react";
import styles from "./AddingTask.module.css";
import validationConfig from "../../validationConfig/validationConfig";
import Form from "../Form/Form";
import Title from "../Title/Title";
import FormLabel from "../FormLabel/FormLabel";
import Input from "../Input/Input";
import Subtitle from "../Subtitle/Subtitle";
import Paragraph from "../Paragraph/Paragraph";
import Container from "../Container/Container";
import Button from "../Button/Button";
import AddTaskImg from "../AddTaskImg/AddTaskImg";
import { useForm } from "react-hook-form";

export default function AddingTask() {
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={styles.addingTask + " p-m"}>
      <AddTaskImg />
      <Title>New Task</Title>

      <Form onSubmit={onSubmit}>
        <FormLabel htmlFor="taskName">Task Name</FormLabel>
        <Paragraph>Add a short, descriptive headline</Paragraph>
        <Input
          id="taskName"
          type="text"
          name="taskName"
          validationConfig={validationConfig.addingTask.taskName}
        />
        <FormLabel htmlFor="taskDate">Estimated due date</FormLabel>
        <Paragraph>
          Add a date when you think this task should be completed
        </Paragraph>
        <Input
          id="taskDate"
          type="date"
          name="taskDate"
          validationConfig={validationConfig.addingTask.taskDate}
        />
        <Container>
          <Button variant={"button_primary"} type="submit">
            Add Task
          </Button>
          <Button variant={"button_secondary"}>Cancel</Button>
        </Container>
      </Form>
    </div>
  );
}
