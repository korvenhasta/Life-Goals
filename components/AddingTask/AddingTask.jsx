import React, { useState } from "react";
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
import { useTasks } from "../../contexts/TaskContext";

export default function AddingTask() {
  const { handleSubmit, loading } = useTasks();

  return (
    <div className={styles.addingTask + " p-m"}>
      <AddTaskImg />
      <Title>New Task</Title>

      <Form onSubmit={handleSubmit} schema={taskSchema}>
        <FormLabel htmlFor="Task Name">Task Name</FormLabel>
        <Paragraph>Add a short, descriptive headline</Paragraph>
        <Input
          id="taskName"
          type="text"
          name="taskName"
          placeholder="Task name"
        />
        <FormLabel htmlFor="taskDate">Estimated due date</FormLabel>
        <Paragraph>
          Add a date when you think this task should be completed
        </Paragraph>
        <Input
          id="taskDate"
          type="date"
          name="taskDate"
          placeholder="Task date"
        />
        <Container>
          <Button variant={"button_primary"} type="submit" disabled={loading}>
            {loading ? "Loading..." : "Add Task"}
          </Button>
          <Button variant={"button_secondary"}>Cancel</Button>
        </Container>
      </Form>
    </div>
  );
}
