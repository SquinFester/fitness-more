import { getAuthSession } from "@/lib/auth";
import Link from "next/link";
import { Button } from "../Button";

export const Navbar = async () => {
  const session = await getAuthSession();

  return (
    <header className="w-full py-4 shadow-md">
      <div className=" container flex items-center justify-between">
        <Link href="/" className="text-primary font-bold text-2xl">
          fitnessMore
        </Link>
        {!session ? (
          <Button>
            <Link href="/sign-in">sign in</Link>
          </Button>
        ) : (
          <Button>
            <Link href="/sign-out">sign out</Link>
          </Button>
        )}
      </div>
    </header>
  );
};
