import Link from "next/link";
import { buttonVariants } from "../ui/Button";
import { cn } from "@/lib/utils";
import { getAuthSession } from "@/lib/auth";
import UserMenu from "./UserMenu";

export const LoginButtons = async () => {
  const session = await getAuthSession();

  return (
    <>
      {!session ? (
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
        <UserMenu fullname={session.user.name} />
      )}
    </>
  );
};
