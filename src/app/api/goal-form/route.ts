import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { GoalFormValidator } from "@/lib/validators/goal-form";
import { z } from "zod";

export const POST = async (req: Request) => {
  try {
    const session = await getAuthSession();
    if (!session) return new Response("Unauthorized", { status: 401 });

    const body = await req.json();

    const { goal, age, gender, height, weight, goalWeight, activityLevel } =
      GoalFormValidator.parse(body);

    const formGoal = await db.formGoal.findFirst({
      where: {
        userId: session.user.id,
      },
    });

    if (formGoal) {
      await db.formGoal.update({
        where: {
          userId: session.user.id,
        },
        data: {
          goal,
          age,
          gender,
          height,
          weight,
          goalWeight: goalWeight ? goalWeight : weight,
          activityLevel,
          userId: session.user.id,
        },
      });
    } else {
      await db.formGoal.create({
        data: {
          goal,
          age,
          gender,
          height,
          weight,
          goalWeight: goalWeight ? goalWeight : weight,
          activityLevel,
          userId: session.user.id,
        },
      });
    }

    await db.weight.create({
      data: {
        userId: session.user.id,
        weight: weight,
        date: new Date(),
      },
    });

    return new Response("success");
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(error.message, { status: 422 });
    }
    return new Response("Could not send a form", { status: 500 });
  }
};
