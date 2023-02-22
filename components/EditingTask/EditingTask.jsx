import React from "react";
import styles from "./EditingTask.module.css";
import Form from "../Form/Form";
import Title from "../Title/Title";
import FormLabel from "../FormLabel/FormLabel";
import Input from "../Input/Input";
import Paragraph from "../Paragraph/Paragraph";
import Container from "../Container/Container";
import Button from "../Button/Button";
import EditTaskImg from "../EditTaskImg/EditTaskImg";
import { taskSchema } from "../../validationConfig/yupSchemas";
import { useFormContext } from "../../pages";

export default function AddingTask() {
  const { handleSubmit } = useFormContext();

  return (
    <div className={styles.editingTask + " p-m"}>
      <EditTaskImg />
      <Title>Editing task</Title>

      <Form
        onSubmit={handleSubmit}
        noValidate
        schema={taskSchema}
        defaultValues={{
          taskName: "testing",
          taskDate: "2025-01-01",
        }}
      >
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
          <Button variant={"button_primary"} type="submit">
            Save changes
          </Button>
          <Button variant={"button_secondary"}>Cancel</Button>
        </Container>
      </Form>
    </div>
  );
}
