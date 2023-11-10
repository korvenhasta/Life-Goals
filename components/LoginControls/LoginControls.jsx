import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

export default function Component() {
  const { data: session } = useSession();
  if (session?.user) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <img src={session.user.image} alt="avatar" />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
