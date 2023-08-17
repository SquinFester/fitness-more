import { LineChart } from "@/components/DashboardMainPage/UserWeightStats/LineChart";
import { UserProfilePreview } from "@/components/DashboardMainPage/UserProfilePreview";
import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import Link from "next/link";
import { AddWeight } from "@/components/DashboardMainPage/UserWeightStats/AddWeight";

export default async function Dashboard() {
  const session = await getAuthSession();
  const user = await db.user.findFirst({
    where: {
      id: session?.user.id,
    },
  });
  const userForm = await db.formGoal.findFirst({
    where: {
      userId: session?.user.id,
    },
  });
  if (!session || !user)
    return (
      <div>
        <h1>you have to be logged</h1>
        <Link href="/sign-in">Log in</Link>
      </div>
    );

  return (
    <main className="mt-10 space-y-10">
      <UserProfilePreview
        image={user.image}
        name={user.name}
        formInfo={userForm}
      />
      <LineChart
        userWeight={[
          {
            date: "10-10-2023",
            weight: 130,
          },
          {
            date: "10-10-2023",
            weight: 200,
          },
          {
            date: "10-10-2023",
            weight: 110,
          },
          {
            date: "12-10-2023",
            weight: 150,
          },
        ]}
      />
      <AddWeight />
      <p>
        here should be a grapth with weight and button to set current weight
        update your weight your workout your proggress
      </p>
    </main>
  );
}
