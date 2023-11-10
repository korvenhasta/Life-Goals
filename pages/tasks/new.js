import Link from "next/link";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import TaskContextProvider from "../../contexts/TaskContext";
import AddingTask from "../../components/AddingTask/AddingTask";
import GoBack from "../../components/GoBack/GoBack";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import Navbar from "../../components/Navbar/Navbar";
import ActionBar from "../../components/ActionBar/ActionBar";

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
      <PageWrapper>
        <Navbar />
        <main className={styles.main}>
          <ActionBar>
            <Link href="/">
              <GoBack />
            </Link>
          </ActionBar>

          <AddingTask />
        </main>
      </PageWrapper>
    </TaskContextProvider>
  );
}
