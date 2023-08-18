import { GoalFormType } from "./validators/goal-form";

const calculateCalories = ({
  age,
  weight,
  height,
  goal,
  activityLevel,
  gender,
}: GoalFormType) => {
  let bmr;
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
};
