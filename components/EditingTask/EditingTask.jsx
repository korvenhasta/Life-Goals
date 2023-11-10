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
import day from "dayjs";
import { useTasks } from "../../contexts/TaskContext";
import { useRouter } from "next/router";

export default function EditingTask({ taskName, taskDate, taskId }) {
  const { updateTask } = useTasks();

  const router = useRouter();

  function closeEditing() {
    router.push("/");
  }

  const handleSubmit = (task) => {
    updateTask(task.taskName, task.taskDate, taskId);
    closeEditing();
  };

  const formSubmit = async (data) => {
    try {
      const response = await axios.patch(`/api/companies/${company.id}`, data);
      router.push(`/companies/${company.id}`);
    } catch (error) {
      console.error("EditCompanyForm - Error editing company:", error);
    }
  };

  return (
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
          <Button variant={"button_secondary"} onClick={closeEditing}>
            Cancel
          </Button>
        </Container>
      </Form>
    </div>
  );
}
