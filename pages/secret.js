import { getServerSession } from "next-auth";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function secret() {
  // const { data: session } = useSession();
  // const router = useRouter();

  // // 1. Check: are you logged in?
  // console.log(session);

  // // undefined (session loading?)
  // // null (we are not logged in)
  // // object with user (we are logged in)

  // useEffect(() => {
  //   if (session === null) {
  //     // 2. If you are not logged in -> send you to home page
  //     router.push("/");
  //   }
  // }, [session]);

  // 3. If you are logged in -> display page
  return (
    <div>
      <h1>WOW! A secret page!</h1>
    </div>
  );
}

export function getServerSideProps() {
  const session = getSession();
  console.log(session);
  if (session === null) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return { props: {} };
}
