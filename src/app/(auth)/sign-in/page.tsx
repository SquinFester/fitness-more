"use client";

import { signIn } from "next-auth/react";

export default function Page() {
  const logIn = async () => {
    try {
      signIn("google");
    } catch (error) {
      console.log("sa");
    }
  };

  return (
    <div>
      <button onClick={logIn}>log</button>
    </div>
  );
}
