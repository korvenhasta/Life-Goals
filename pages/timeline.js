import styles from "../styles/Home.module.css";
import Timeline from "../components/Timeline/Timeline";
import PageWrapper from "../components/PageWrapper/PageWrapper";
import Navbar from "../components/Navbar/Navbar";
import ActionBar from "../components/ActionBar/ActionBar";
import GoBack from "../components/GoBack/GoBack";
import Link from "next/link";

export default function TimelinePage() {
  return (
    <PageWrapper>
      <Navbar />

      <main className={styles.main}>
        <ActionBar>
          <Link href="/">
            <GoBack />
          </Link>
        </ActionBar>
        <Timeline />
      </main>
    </PageWrapper>
  );
}
