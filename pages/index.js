import { useState, createContext, useContext } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import TaskCard from "../components/TaskCard/TaskCard";
import AddingTask from "../components/AddingTask/AddingTask";
import DeletingPopUp from "../components/DeletingPopUp/DeletingPopUp";

const formContext = createContext({});

export function useFormContext() {
  return useContext(formContext);
}

export default function Home() {
  const [tasks, setTasks] = useState([]);

  const [taskId, setTaskId] = useState(0);

  function addTask(task) {
    setTasks([
      ...tasks,
      {
        id: taskId,
        task: task.taskName,
        date: new Date(task.taskDate).toLocaleDateString(),
      },
    ]);
    setTaskId(taskId + 1);
  }

  function deleteTask(taskId) {
    setTasks(
      tasks.filter((task) => {
        return task.id != taskId;
      })
    );
  }

  console.log("TASKS: ", tasks);

  return (
    <formContext.Provider
      value={{
        handleSubmit: addTask,
      }}
    >
      <>
        <Head>
          <title>Awesome ToDo List</title>
          <meta
            name="description"
            content="Help people to reach their goals through links between tasks and goals with timeline."
          />
        </Head>
        <main className={styles.main + " p-m"}>
          {/* <DeletingPopUp /> */}

          <AddingTask />
          {tasks.map((task) => {
            return (
              <TaskCard
                key={task.id}
                taskId={task.id}
                taskName={task.task}
                taskDate={task.date}
                handleDeleteTask={deleteTask}
              />
            );
          })}
        </main>
      </>
    </formContext.Provider>
  );
}
