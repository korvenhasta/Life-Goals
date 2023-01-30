import React from "react";
import styles from "./AddingTask.module.css";
import Form from "../Form/Form";
import Title from "../Title/Title";
import FormLabel from "../FormLabel/FormLabel";
import Input from "../Input/Input";
import Paragraph from "../Paragraph/Paragraph";
import Container from "../Container/Container";
import Button from "../Button/Button";
import AddTaskImg from "../AddTaskImg/AddTaskImg";
import { taskSchema } from "../../validationConfig/yupSchemas";

export default function AddingTask() {
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={styles.addingTask + " p-m"}>
      <AddTaskImg />
      <Title>New Task</Title>

      <Form onSubmit={onSubmit} noValidate schema={taskSchema}>
        <FormLabel htmlFor="Task Name">Task Name</FormLabel>
        <Paragraph>Add a short, descriptive headline</Paragraph>
        <Input id="taskName" type="text" name="taskName" />
        <FormLabel htmlFor="taskDate">Estimated due date</FormLabel>
        <Paragraph>
          Add a date when you think this task should be completed
        </Paragraph>
        <Input id="taskDate" type="date" name="taskDate" />
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
