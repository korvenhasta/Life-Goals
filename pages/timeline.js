import styles from "../styles/Home.module.css";
import Timeline from "../components/Timeline/Timeline";

export default function TimelinePage() {
  return (
    <main className={styles.main + " p-m"}>
      <Timeline />
    </main>
  );
}
