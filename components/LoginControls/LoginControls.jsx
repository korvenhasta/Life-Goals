import { useSession, signIn, signOut } from "next-auth/react";
import styles from "./LoginControls.module.css";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";

export default function Component() {
  const { data: session } = useSession();
  if (session?.user) {
    return (
      <div className={styles.avatarContainer}>
        <Avatar imageSource={session.user.image} />
        {/* <Button variant="primary" onClick={() => signOut()}>
          Sign out
        </Button> */}
        <button className={styles.signButton} onClick={() => signOut()}>
          Sign out
        </button>
      </div>
    );
  }
  return (
    <>
      <button className={styles.signButton} onClick={() => signIn()}>
        Sign in
      </button>
    </>
  );
}
