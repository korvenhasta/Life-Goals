import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import TaskCard from "../components/TaskCard/TaskCard";
import tasks from "../dummyData/tasks";
import { useState } from "react";
import AddingTask from "../components/AddingTask/AddingTask";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Awesome ToDo List</title>
        <meta
          name="description"
          content="Help people to reach their goals through links between tasks and goals with timeline."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Marina Kenina" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main + " p-m"}>
        <AddingTask />
        {tasks.map((task) => {
          return <TaskCard key={task.id} title={task.task} date={task.date} />;
        })}
      </main>
    </>
  );
}
