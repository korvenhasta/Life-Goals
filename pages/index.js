import { useState, createContext, useContext } from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import TaskCard from "../components/TaskCard/TaskCard";
import AddingTask from "../components/AddingTask/AddingTask";
import EditingTask from "../components/EditingTask/EditingTask";
import { prisma } from "../prisma/client";
import TaskContextProvider from "../contexts/TaskContext";
import Navbar from "../components/Navbar/Navbar";
import PageWrapper from "../components/PageWrapper/PageWrapper";
import ActionBar from "../components/ActionBar/ActionBar";
import TimelineImg from "../components/TimelineImg/TimelineImg";
import Button from "../components/Button/Button";

export default function Home(props) {
  const [tasks, setTasks] = useState([]);

  // const [taskId, setTaskId] = useState(0);

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
      <PageWrapper>
        <Navbar />
        <main className={styles.main}>
          <ActionBar>
            <Link href="/timeline">
              <TimelineImg />
            </Link>
            <Link href="/tasks/new">
              <Button variant="button_primary">New task</Button>
            </Link>
          </ActionBar>
          {/* <Link href="/secret">TO THE SECRET PAGE</Link> */}
          {/* <Link href="/list">TO THE LIST PAGE</Link> */}

          {props.tasks.map((task) => {
            return (
              // <Link
              //   className={styles.taskCardLink}
              //   key={task.id}
              //   href={`/tasks/${task.id}`}
              // >
              <TaskCard
                key={task.id}
                taskId={task.id}
                taskName={task.name}
                taskDate={task.date}
                handleDeleteTask={deleteTask}
              />
              // </Link>
            );
          })}
        </main>
      </PageWrapper>
    </TaskContextProvider>
  );
}

export async function getServerSideProps(req) {
  const tasks = await prisma.task.findMany();
  return { props: { tasks: JSON.parse(JSON.stringify(tasks)) } };
}
