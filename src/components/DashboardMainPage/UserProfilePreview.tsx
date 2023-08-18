"use client";

import { User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { FormGoal } from "@prisma/client";
import { ErrorComunication } from "./ErrorComunication";
import { useAppSelector } from "@/store/store";

type UserProfilePreviewProps = {
  image: string | undefined | null;
  name: string;
  formInfo: FormGoal | null;
};

export const UserProfilePreview = ({
  image,
  name,
  formInfo,
}: UserProfilePreviewProps) => {
  const weights = useAppSelector((state) => state.weightsReducer.currentWeight);

  return (
    <section className="grid grid-cols-3 shadow-md divide-x-2 py-4 rounded-md">
      <div className=" flex justify-center items-center">
        <Avatar className="w-20 h-20">
          {image ? (
            <AvatarImage src={image} alt="user's profile" />
          ) : (
            <AvatarFallback>
              <User />
            </AvatarFallback>
          )}
        </Avatar>
      </div>
      <div className="col-span-2 p-5">
        <h1 className="text-lg font-semibold">{name}</h1>
        {formInfo ? (
          <>
            <p>
              <span className="font-medium">Goal: </span>
              {formInfo.goal}
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
          </>
        ) : (
          <ErrorComunication
            text="Complete your profile to take full advantage of our app"
            link="/dashboard/goal-form"
            linkText="fill form"
          />
        )}
      </div>
    </section>
  );
};
