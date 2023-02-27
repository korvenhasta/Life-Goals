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
import day from "dayjs";

export default function EditingTask({
  openEditing,
  onCloseEditing,
  taskName,
  taskDate,
  taskId,
}) {
  const { updateTask } = useFormContext();
  if (!openEditing) return null;

  const handleSubmit = (task) => {
    updateTask(task.taskName, task.taskDate, taskId);
    onCloseEditing();
  };

  return (
    <>
      <div className={styles.overlay_styles} onClick={onCloseEditing} />

      <div className={styles.editingTask + " p-m"}>
        <EditTaskImg />
        <Title>Editing task</Title>

        <Form
          onSubmit={handleSubmit}
          noValidate
          schema={taskSchema}
          defaultValues={{
            taskName: taskName,
            taskDate: day(taskDate).format("YYYY-MM-DD"),
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
            <Button variant={"button_secondary"} onClick={onCloseEditing}>
              Cancel
            </Button>
          </Container>
        </Form>
      </div>
    </>
  );
}
