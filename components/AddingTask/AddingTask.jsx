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
import { useFormContext } from "../../pages";
import { useRouter } from "next/router";

export default function AddingTask() {
  const { handleSubmit } = useFormContext();
  const router = useRouter();
  const [taskName, setTaskName] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function createTask(event) {
    setLoading(true);
    event.preventDefault();

    const response = await fetch("/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: taskName, date: taskDate }),
    });
    const data = await response.json();
    if (response.status === 200) {
      router.push(`/tasks/${data.id}`);
      // if they stay on the same page -> setState (show them what happened)
    } else {
      setError(data.message);
      setLoading(false);
    }
  }

  return (
    <div className={styles.addingTask + " p-m"}>
      <AddTaskImg />
      <Title>New Task</Title>

      <Form onSubmit={handleSubmit} noValidate schema={taskSchema}>
        <FormLabel htmlFor="Task Name">Task Name</FormLabel>
        <Paragraph>Add a short, descriptive headline</Paragraph>
        <Input
          id="taskName"
          type="text"
          name="taskName"
          placeholder="Task name"
          // value={taskName}
          // onChange={(event) => setTaskName(event.target.value)}
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
          // value={taskDate}
          // onChange={(event) => setTaskDate(event.target.value)}
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
