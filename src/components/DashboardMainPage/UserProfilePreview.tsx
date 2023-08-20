"use client";

import { User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { useAppSelector } from "@/store/store";
import { CaloriesGraph } from "./CaloriesGraph";
import { dailyCalories } from "@/lib/dailyCalories";
import { GoalFormType } from "@/lib/validators/goal-form";

type UserProfilePreviewProps = {
  image: string | undefined | null;
  name: string;
  formInfo: GoalFormType;
};

export const UserProfilePreview = ({
  image,
  name,
  formInfo,
}: UserProfilePreviewProps) => {
  const weights = useAppSelector((state) => state.weightsReducer.currentWeight);
  const { calories, proteinGrams, carbGrams, fatGrams } = dailyCalories({
    age: formInfo.age,
    weight: formInfo.weight,
    height: formInfo.height,
    goal: formInfo.goal,
    activityLevel: formInfo.activityLevel,
    gender: formInfo.gender,
  });

  return (
    <section className="grid md:grid-cols-3 shadow-md md:divide-x-2 py-4 rounded-md ">
      <div className="flex justify-center items-center col-span-1 flex-col gap-4">
        <Avatar className="w-20 h-20">
          {image ? (
            <AvatarImage src={image} alt="user's profile" />
          ) : (
            <AvatarFallback>
              <User />
            </AvatarFallback>
          )}
        </Avatar>
        <h1 className="text-lg font-semibold">{name}</h1>
      </div>
      <div className=" p-5 col-span-1">
        <h1 className="text-xl font-semibold">Your infromation:</h1>
        <p>
          <span className="font-medium">Goal: </span>
          {formInfo.goal}
        </p>
        <p>
          <span className="font-medium">Age: </span>
          {formInfo.age}
        </p>
        <p>
          <span className="font-medium">Gender: </span>
          {formInfo.gender}
        </p>
        <p>
          <span className="font-medium">Height: </span>
          {formInfo.height} cm
        </p>
        <p>
          <span className="font-medium">Weight: </span>
          {weights} kg
        </p>
        {formInfo.goal === "Maintain Weight" ? null : (
          <p>
            <span className="font-medium">Target weight: </span>
            {formInfo.goalWeight} kg
          </p>
        )}
        <p>
          <span className="font-medium">Activity level: </span>
          {formInfo.activityLevel}
        </p>
        <p>
          <span className="font-medium">Daily calories: </span>
          {calories}
        </p>
      </div>
      <div className="flex w-full justify-center md:h-[250px] col-span-1">
        <CaloriesGraph
          proteinGrams={+proteinGrams}
          carbGrams={+carbGrams}
          fatGrams={+fatGrams}
        />
      </div>
    </section>
  );
};
