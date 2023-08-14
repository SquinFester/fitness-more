"use client";

import {
  GoalFormType,
  GoalFormSchema,
  genderOptions,
  goalOptions,
  activityLevelOptions,
} from "@/lib/validators/goal-form";
import { useForm, SubmitHandler } from "react-hook-form";
import SelectInput from "./SelectInput";
import { RadioInput } from "./RadioInput";
import { InputWithLabel } from "./InputWithLabel";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormMessage } from "../ui/Form";
import { Button } from "../ui/Button";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import axios from "axios";

export const GoalForm = () => {
  const [showGoalWeight, setshowGoalWeight] = useState(false);
  const form = useForm<GoalFormType>({
    resolver: zodResolver(GoalFormSchema),
    defaultValues: {
      // @ts-expect-error
      age: "",
      // @ts-expect-error
      height: "",
      // @ts-expect-error
      weight: "",
      // goalWeight: "",
    },
  });
  const { handleSubmit, control, watch } = form;

  const onSubmit: SubmitHandler<GoalFormType> = (data) => {
    mutate(data);
  };

  const { mutate, isLoading } = useMutation({
    mutationKey: "formGoal",
    mutationFn: async (information: GoalFormType) => {
      const { data } = await axios.post("/api/goal-form", information);
      return data as string;
    },
    onSuccess: () => console.log("succes"),
    onError: () => console.log("error"),
  });

  useEffect(() => {
    if (watch("goal")) {
      if (watch("goal") !== "Maintain Weight") {
        setshowGoalWeight(true);
      } else {
        setshowGoalWeight(false);
      }
    } else {
      setshowGoalWeight(false);
    }
  }, [watch("goal")]);

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={control}
          name="gender"
          render={({ field }) => (
            <div>
              <RadioInput
                options={[...genderOptions]}
                field={field}
                label="Gender"
              />
              <FormMessage />
            </div>
          )}
        />
        <FormField
          control={control}
          name="goal"
          render={({ field }) => (
            <div>
              <SelectInput
                options={[...goalOptions]}
                label="Your goal"
                field={field}
                placeholder="select your goal"
              />
              <FormMessage />
            </div>
          )}
        />
        {showGoalWeight ? (
          <FormField
            control={control}
            name="goalWeight"
            render={({ field }) => (
              <div>
                <InputWithLabel
                  placeholder="type your goal weight..."
                  label="Your goal weight (kg)"
                  type="number"
                  field={field}
                />
                <FormMessage />
              </div>
            )}
          />
        ) : null}

        <FormField
          control={control}
          name="activityLevel"
          render={({ field }) => (
            <div>
              <SelectInput
                options={[...activityLevelOptions]}
                label="Your avtivity"
                field={field}
                placeholder="select your avtivity level"
              />
              <FormMessage />
            </div>
          )}
        />
        <FormField
          control={control}
          name="age"
          render={({ field }) => (
            <div>
              <InputWithLabel
                label="Your age"
                placeholder="type your age..."
                type="number"
                field={field}
              />
              <FormMessage />
            </div>
          )}
        />
        <FormField
          control={control}
          name="height"
          render={({ field }) => (
            <div>
              <InputWithLabel
                placeholder="type your height..."
                label="Your height (cm)"
                type="number"
                field={field}
              />
              <FormMessage />
            </div>
          )}
        />
        <FormField
          control={control}
          name="weight"
          render={({ field }) => (
            <div>
              <InputWithLabel
                placeholder="type your weight..."
                label="Your weight (kg)"
                type="number"
                field={field}
              />
              <FormMessage />
            </div>
          )}
        />

        <Button
          type="submit"
          className="w-full md:float-right md:w-1/3"
          isLoading={isLoading}
          disabled={isLoading}
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};
