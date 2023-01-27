import Head from "next/head";
import styles from "../styles/Home.module.css";
import TaskCard from "../components/TaskCard/TaskCard";
import tasks from "../dummyData/tasks";
import AddingTask from "../components/AddingTask/AddingTask";

export default function Home() {
  return (
    <>
      <Head>
        <title>Awesome ToDo List</title>
        <meta
          name="description"
          content="Help people to reach their goals through links between tasks and goals with timeline."
        />
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
