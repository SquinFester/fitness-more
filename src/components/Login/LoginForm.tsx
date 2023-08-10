"use client";

import Image from "next/image";
import { Button } from "../ui/Button";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useToast } from "../ui/use-toast";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

export const LoginForm = ({ isModal }: { isModal?: boolean }) => {
  const [isLogging, setIsLogging] = useState(false);
  const { toast } = useToast();
  const logIn = async () => {
    setIsLogging(true);
    try {
      signIn("google");
    } catch (error) {
      toast({
        title: "Log in error",
        description: "Something went wrong, cannot sign in, try again later",
        variant: "destructive",
      });
    } finally {
      setIsLogging(false);
    }
  };

  const router = useRouter();

  return (
    <section className="px-4 max-w-xl w-full shadow-around text-center flex flex-col gap-10 rounded-lg h-96 justify-center bg-white relative">
      {isModal ? (
        <X
          className="w-4 h-4 absolute top-2 right-2 cursor-pointer"
          onClick={() => router.back()}
        />
      ) : null}
      <h1 className="text-primaryblue font-bold text-3xl">fitnessMore</h1>
      <h1 className="text-2xl font-bold">
        Welcome,
        <br /> join our community:
      </h1>
      <Button
        onClick={logIn}
        disabled={isLogging}
        isLoading={isLogging}
        className="text-lg max-w-md mx-auto"
        variant="outline"
      >
        {!isLogging ? (
          <Image
            src="./googleIcon.svg"
            alt="google icon"
            width={15}
            height={15}
            className="mr-2"
          />
        ) : null}
        Sign in by Google
      </Button>
    </section>
  );
};
