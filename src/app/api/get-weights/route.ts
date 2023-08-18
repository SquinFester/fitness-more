import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { z } from "zod";

export async function GET() {
  try {
    const session = await getAuthSession();
    if (!session) return new Response("Unauthorized", { status: 401 });

    const userWeights = await db.weight.findMany({
      where: {
        userId: session?.user.id,
      },
      orderBy: {
        date: "asc",
      },
    });
    if (!userWeights)
      return new Response("user haven't added weight", { status: 406 });

    return new Response(JSON.stringify(userWeights));
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(error.message, { status: 422 });
    }
    return new Response("could fetch data", { status: 500 });
  }
}
