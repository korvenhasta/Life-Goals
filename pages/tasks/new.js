import Link from "next/link";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import TaskContextProvider from "../../contexts/TaskContext";
import AddingTask from "../../components/AddingTask/AddingTask";

export default function NewTask() {
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
        <Link href="/">Go back</Link>
        <AddingTask />
      </main>
    </TaskContextProvider>
  );
}
