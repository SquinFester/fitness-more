import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { addWeightValidator } from "@/lib/validators/add-weight";
import { z } from "zod";

export async function POST(req: Request) {
  try {
    const session = await getAuthSession();
    if (!session) return new Response("Unauthorized", { status: 401 });
    const formIsFilled = await db.formGoal.findFirst({
      where: {
        userId: session.user.id,
      },
    });
    if (!formIsFilled) return new Response("fill form first", { status: 406 });
    const body = await req.json();
    const { weight, date } = addWeightValidator.parse(body);
    await db.weight.create({
      data: {
        userId: session.user.id,
        weight,
        date,
      },
    });
    return new Response("success");
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response("error", { status: 422 });
    }
    return new Response("error", { status: 500 });
  }
}
