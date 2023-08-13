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

export const GoalForm = () => {
  const form = useForm<GoalFormType>({
    resolver: zodResolver(GoalFormSchema),
    defaultValues: {
      age: "",
      height: "",
      weight: "",
      goalWeight: "",
    },
  });
  const { handleSubmit, control } = form;

  const onSubmit: SubmitHandler<GoalFormType> = (data) => console.log(data);

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={control}
          name="gender"
          render={({ field }) => (
            <>
              <RadioInput
                options={[...genderOptions]}
                field={field}
                label="gender"
              />
              <FormMessage />
            </>
          )}
        />
        <FormField
          control={control}
          name="goal"
          render={({ field }) => (
            <>
              <SelectInput
                options={[...goalOptions]}
                label="goal"
                field={field}
                placeholder="choose your goal"
              />
              <FormMessage />
            </>
          )}
        />
        <FormField
          control={control}
          name="activityLevel"
          render={({ field }) => (
            <>
              <SelectInput
                options={[...activityLevelOptions]}
                label="activity"
                field={field}
                placeholder="choose your avtivity level"
              />
              <FormMessage />
            </>
          )}
        />
        <FormField
          control={control}
          name="age"
          render={({ field }) => (
            <>
              <InputWithLabel
                placeholder="type your age..."
                label="Your age"
                type="number"
                field={field}
              />
              <FormMessage />
            </>
          )}
        />
        <FormField
          control={control}
          name="height"
          render={({ field }) => (
            <>
              <InputWithLabel
                placeholder="type your height..."
                label="Your height"
                type="number"
                field={field}
              />
              <FormMessage />
            </>
          )}
        />
        <FormField
          control={control}
          name="weight"
          render={({ field }) => (
            <>
              <InputWithLabel
                placeholder="type your weight..."
                label="Your weight"
                type="number"
                field={field}
              />
              <FormMessage />
            </>
          )}
        />
        <FormField
          control={control}
          name="goalWeight"
          render={({ field }) => (
            <>
              <InputWithLabel
                placeholder="type your goalWeight..."
                label="Your goalWeight"
                type="number"
                field={field}
              />
              <FormMessage />
            </>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
