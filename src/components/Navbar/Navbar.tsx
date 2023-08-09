import { getAuthSession } from "@/lib/auth";
import Link from "next/link";
import { LoginButtons } from "./LoginButtons";
export const Navbar = async () => {
  const session = await getAuthSession();

  return (
    <header className="w-full py-4 shadow-md">
      <div className=" container flex items-center justify-between">
        <Link href="/" className="text-primaryblue font-bold text-3xl">
          fitnessMore
        </Link>
        <LoginButtons isLogged={!!session} />
      </div>
    </header>
  );
};
