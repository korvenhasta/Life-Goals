import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import TaskCard from "../components/TaskCard/TaskCard";
import tasks from "./tasks";
import { useState } from "react";
import AddingTask from "../components/AddingTask/AddingTask";

const inter = Inter({ subsets: ["latin"] });

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className={styles.main}>
        <AddingTask />
        {tasks.map((task) => {
          return <TaskCard key={task.id} title={task.task} date={task.date} />;
        })}
      </main>
    </>
  );
}
