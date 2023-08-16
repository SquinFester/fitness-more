import { z } from "zod";

export const addWeightScheme = z.object({
  date: z.date(),
  weight: z.preprocess(
    (a) => parseInt(z.string().parse(a), 10),
    z.number().min(30).max(200)
  ),
});

export const addWeightValidator = z.object({
  date: z.string().pipe(z.coerce.date()),
  weight: z.number().min(30).max(200),
});

export type addWeightType = z.infer<typeof addWeightScheme>;
