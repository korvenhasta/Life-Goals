import { useState, createContext, useContext } from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import TaskCard from "../components/TaskCard/TaskCard";
import AddingTask from "../components/AddingTask/AddingTask";
import defaultTasks from "../dummyData/tasks";
import Timeline from "../components/Timeline/Timeline";
import TimelineCard from "../components/TimelineCard/TimelineCard";
import EditingTask from "../components/EditingTask/EditingTask";

const formContext = createContext({});

export function useFormContext() {
  return useContext(formContext);
}

export default function Home() {
  const [tasks, setTasks] = useState([]);

  const [taskId, setTaskId] = useState(0);

  function updateTask(taskName, taskDate, taskId) {
    setTasks(
      tasks.map((task) => {
        if (taskId === task.id) {
          task.task = taskName;
          task.date = taskDate;
        }
        return task;
      })
    );
  }

  function addTask(task) {
    setTasks([
      ...tasks,
      {
        id: taskId,
        task: task.taskName,
        date: task.taskDate,
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

  return (
    <formContext.Provider
      value={{
        handleSubmit: addTask,
        updateTask: updateTask,
      }}
    >
      <>
        <Head>
          <title>Life Goals</title>
          <meta
            name="description"
            content="Help people to reach their goals through links between tasks and goals with timeline."
          />
        </Head>
        <main className={styles.main + " p-m"}>
          <AddingTask />
          <EditingTask />
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
          <Link href="/timeline">Timeline</Link>
        </main>
      </>
    </formContext.Provider>
  );
}
