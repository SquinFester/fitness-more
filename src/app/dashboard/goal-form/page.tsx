import { GoalForm } from "@/components/GoalForm/GoalForm";

function Page() {
  return (
    <main className="w-full">
      <h1 className="text-center text-5xl font-bold text-primaryblue my-5 ">
        Fill form
      </h1>
      <p className="text-center text-zinc-500 mb-4">
        fill out the form to start using all the features of our application
      </p>
      <GoalForm />
    </main>
  );
}
export default Page;
