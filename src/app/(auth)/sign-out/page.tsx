"use client";

import { signOut } from "next-auth/react";

export default function Page() {
  const logIn = async () => {
    try {
      signOut({
        callbackUrl: "/",
      });
    } catch (error) {
      console.log("sa");
    }
  };

  return (
    <div>
      <button onClick={logIn}>out</button>
    </div>
  );
}
