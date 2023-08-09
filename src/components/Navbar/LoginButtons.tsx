"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";
import { Button, buttonVariants } from "../ui/Button";
import { cn } from "@/lib/utils";

export const LoginButtons = ({ isLogged }: { isLogged: boolean }) => {
  return (
    <>
      {!isLogged ? (
        <Link
          href="/sign-in"
          className={cn(
            buttonVariants({
              variant: "ghost",
            }),
            "text-lg"
          )}
        >
          Sign in
        </Link>
      ) : (
        <Button
          className={"text-lg"}
          variant="ghost"
          onClick={() => {
            signOut({
              callbackUrl: "/",
            });
          }}
        >
          Sign out
        </Button>
      )}
    </>
  );
};
