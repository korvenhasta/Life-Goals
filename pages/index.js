import { useState, createContext, useContext } from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import TaskCard from "../components/TaskCard/TaskCard";
import AddingTask from "../components/AddingTask/AddingTask";
import EditingTask from "../components/EditingTask/EditingTask";
import { prisma } from "../prisma/client";
import TaskContextProvider from "../contexts/TaskContext";
import LoginControls from "../components/LoginControls/LoginControls";

export default function Home(props) {
  const [tasks, setTasks] = useState([]);

  const [taskId, setTaskId] = useState(0);

  function deleteTask(taskId) {
    setTasks(
      tasks.filter((task) => {
        return task.id != taskId;
      })
    );
  }

  return (
    <TaskContextProvider>
      <Head>
        <title>Life Goals</title>
        <meta
          name="description"
          content="Help people to reach their goals through links between tasks and goals with timeline."
        />
      </Head>
      <main className={styles.main + " p-m"}>
        <LoginControls />
        <Link href="/secret">TO THE SECRET PAGE</Link>
        <Link href="/tasks/new">New task</Link>
        {/* <AddingTask />
        <EditingTask /> */}
        {props.tasks.map((task) => {
          return (
            <Link
              className={styles.taskCardLink}
              key={task.id}
              href={`/tasks/${task.id}`}
            >
              <TaskCard
                key={task.id}
                taskId={task.id}
                taskName={task.name}
                taskDate={task.date}
                handleDeleteTask={deleteTask}
              />
            </Link>
          );
        })}
      </main>
    </TaskContextProvider>
  );
}

export async function getServerSideProps(req) {
  const tasks = await prisma.task.findMany();
  return { props: { tasks: JSON.parse(JSON.stringify(tasks)) } };
}
