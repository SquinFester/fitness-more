import { z } from "zod";

export const goalOptions = [
  "Weight Loss",
  "Weight Gain",
  "Maintain Weight",
] as const;

export const genderOptions = ["female", "male"] as const;

export const activityLevelOptions = [
  "Sedentary",
  "Lightly Active",
  "Moderately Active",
  "Very Active",
] as const;

export const GoalFormSchema = z.object({
  goal: z.enum([...goalOptions]),
  age: z.preprocess(
    (a) => parseInt(z.string().parse(a), 10),
    z.number().min(8).max(100)
  ),

  gender: z.enum([...genderOptions]),
  height: z.preprocess(
    (a) => parseInt(z.string().parse(a), 10),
    z.number().min(100).max(210)
  ),

  weight: z.preprocess(
    (a) => parseInt(z.string().parse(a), 10),
    z.number().min(30).max(200)
  ),

  goalWeight: z.preprocess(
    (a) => parseInt(z.string().parse(a), 10),
    z.number().min(30).max(200)
  ),
  activityLevel: z.enum([...activityLevelOptions]),
});

export type GoalFormType = z.infer<typeof GoalFormSchema>;
