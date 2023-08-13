"use client";

import {
  GoalFormType,
  GoalFormValidator,
  activityLevelOptions,
  genderOptions,
  goalOptions,
} from "@/lib/validators/goal-form";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import SelectInput from "./SelectInput";
import { RadioInput } from "./RadioInput";
import { Input } from "./Input";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/Form";
import { Button } from "../ui/Button";

export const GoalForm = () => {
  const form = useForm<GoalFormType>({
    resolver: zodResolver(GoalFormValidator),
  });
  const { handleSubmit, control } = form;

  const onSubmit: SubmitHandler<GoalFormType> = (data) => console.log(data);

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
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
          name="goalWeight"
          render={({ field }) => (
            <FormItem>
              <FormLabel>goalWeight</FormLabel>
              <SelectInput
                options={[...goalOptions]}
                label="goal"
                field={field}
                placeholder="choose your goal"
              />
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
      <Button type="submit">click</Button>
    </Form>
    // <form
    //   onSubmit={handleSubmit(onSubmit)}
    //   className="flex flex-col justify-between items-start gap-10"
    // >
    //   <Controller
    //     name="goal"
    //     control={control}
    //     rules={{ required: true }}
    //     render={({ field }) => (
    //       <SelectInput
    //         options={[...goalOptions]}
    //         label="Your goal"
    //         name="goal"
    //         field={field}
    //       />
    //     )}
    //   />
    //   <Controller
    //     name="activityLevel"
    //     control={control}
    //     rules={{ required: true }}
    //     render={({ field }) => (
    //       <SelectInput
    //         options={[...activityLevelOptions]}
    //         label="Your activityLevel"
    //         name="activity-lvl"
    //         field={field}
    //       />
    //     )}
    //   />
    //   {errors.age?.message && <p>{errors.age?.message}</p>}
    //   <Controller
    //     name="gender"
    //     control={control}
    //     rules={{ required: true }}
    //     render={({ field }) => (
    //       <FormItem>
    //         <FormLabel>Gender:</FormLabel>
    //         <RadioInput
    //           options={[...genderOptions]}
    //           label="Gender"
    //           name="gender"
    //           field={field}
    //         />
    //       </FormItem>
    //     )}
    //   />
    //   <Controller
    //     name="age"
    //     control={control}
    //     rules={{ required: true }}
    //     render={({ field }) => (
    //       <Input
    //         placeholder="age..."
    //         label="Type your age"
    //         name={"age"}
    //         type="number"
    //         field={field}
    //       />
    //     )}
    //   />
    //   <Controller
    //     name="height"
    //     control={control}
    //     rules={{ required: true }}
    //     render={({ field }) => (
    //       <Input
    //         placeholder="height..."
    //         label="Type your height"
    //         name={"height"}
    //         type="number"
    //         field={field}
    //       />
    //     )}
    //   />
    //   <Controller
    //     name="weight"
    //     control={control}
    //     rules={{ required: true }}
    //     render={({ field }) => (
    //       <Input
    //         placeholder="weight..."
    //         label="Type your weight"
    //         name={"weight"}
    //         type="number"
    //         field={field}
    //       />
    //     )}
    //   />
    //   <Controller
    //     name="goalWeight"
    //     control={control}
    //     rules={{ required: true }}
    //     render={({ field }) => (
    //       <Input
    //         placeholder="Your goal weight..."
    //         label="Type your goal weight"
    //         name={"goalWeight"}
    //         type="number"
    //         field={field}
    //       />
    //     )}
    //   />
    //   <button type="submit">submit</button>
    // </form>
  );
};
