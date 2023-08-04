import { getServerSession } from "next-auth";
import { getSession, useSession } from "next-auth/react";
import React from "react";

export default function secret() {
  return (
    <div>
      <h1>WOW! A secret page!</h1>
    </div>
  );
}

// export function getServerSideProps() {
//   const session = getSession();
//   console.log(session);
//   if (session === null) {
//     return {
//       redirect: {
//         destination: "/",
//         permanent: false,
//       },
//     };
//   }
//   return { props: {} };
// }
