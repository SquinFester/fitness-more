import { GoalFormType } from "./validators/goal-form";

export const dailyCalories = ({
  age,
  weight,
  height,
  goal,
  activityLevel,
  gender,
}: GoalFormType) => {
  let bmr: number;
  if (gender === "male") {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  const activityFactors = {
    sedentary: 1.2,
    "lightly active": 1.375,
    "moderately active": 1.55,
    "very active": 1.725,
  };

  const activityFactor =
    activityFactors[
      activityLevel.toLowerCase() as keyof typeof activityFactors
    ];

  const tdee = () => {
    if (goal === "Weight Loss") {
      return bmr * activityFactor * 0.85;
    } else if (goal === "Weight Gain") {
      return bmr * activityFactor * 1.1;
    } else {
      return bmr * activityFactor;
    }
  };

  const proteinGrams = (0.25 * tdee()) / 4;
  const carbGrams = (0.45 * tdee()) / 4;
  const fatGrams = (0.3 * tdee()) / 9;

  return {
    calories: tdee().toFixed(0),
    proteinGrams: proteinGrams.toFixed(0),
    carbGrams: carbGrams.toFixed(0),
    fatGrams: fatGrams.toFixed(0),
  };
};
