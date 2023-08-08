import { getAuthSession } from "@/lib/auth";
import Link from "next/link";

export const Header = async () => {
  // const signActionHandler = async () => {
  const session = await getAuthSession();
  //   if (session) {
  // const user = await db.user.findFirst({
  //   where: {
  //     id: session?.user.id,
  //   },
  // });
  //     return <Link href="/sign-out">{user?.name} Sign out</Link>;
  //   } else {
  //     return <Link href="/sign-in">Sign in</Link>;
  //   }
  // };

  return (
    <header>
      <h1>Fitness more</h1>
      {!session ? (
        <Link href="/sign-in">sign in</Link>
      ) : (
        <Link href="/sign-out">sign out</Link>
      )}
    </header>
  );
};
