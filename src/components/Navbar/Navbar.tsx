import Link from "next/link";
import { LoginButtons } from "./LoginButtons";
export const Navbar = () => {
  return (
    <header className="w-full py-4 shadow-md">
      <div className=" container flex items-center justify-between">
        <Link href="/" className="text-primaryblue font-bold text-3xl">
          fitnessMore
        </Link>
        <LoginButtons />
      </div>
    </header>
  );
};
