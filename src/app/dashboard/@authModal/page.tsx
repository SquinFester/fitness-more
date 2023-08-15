"use client";

import { LoginForm } from "@/components/Login/LoginForm";

export default function Page() {
  return (
    <>
      <div className="fixed inset-0 z-10 w-full h-full flex justify-center items-center bg-black/30">
        <LoginForm />
      </div>
    </>
  );
}
