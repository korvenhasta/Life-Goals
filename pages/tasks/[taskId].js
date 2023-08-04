import { useState, createContext, useContext } from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { prisma } from "../../prisma/client";
import TaskContextProvider from "../../contexts/TaskContext";
import TaskCard from "../../components/TaskCard/TaskCard";

export default function Tasks(props) {
  return (
    <TaskContextProvider>
      <Head>
        <title>Life Goals</title>
        <meta
          name="description"
          content="Help people to reach their goals through links between tasks and goals with timeline."
        />
        <meta name="og:title" value={props.task.name} />
      </Head>
      <main className={styles.main + " p-m"}>
        <Link href="/">Go back</Link>
        <TaskCard
          taskId={props.task.id}
          taskName={props.task.name}
          taskDate={props.task.date}
        />
      </main>
    </TaskContextProvider>
  );
}

export async function getServerSideProps(req) {
  const task = await prisma.task.findUnique({
    where: {
      id: req.params.taskId,
    },
  });

  if (!task) {
    return { notFound: true };
  }

  // return as props
  return {
    props: { task: JSON.parse(JSON.stringify(task)) },
  };
}
