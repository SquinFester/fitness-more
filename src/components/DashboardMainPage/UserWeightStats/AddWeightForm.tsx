"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Calendar } from "@/components/ui/Calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/Popover";
import { addWeightScheme, addWeightType } from "@/lib/validators/add-weight";
import { InputWithLabel } from "@/components/GoalForm/InputWithLabel";

export const AddWeightForm = () => {
  const form = useForm<addWeightType>({
    resolver: zodResolver(addWeightScheme),
    defaultValues: {
      // @ts-expect-error
      weight: "",
    },
  });

  const { handleSubmit, control } = form;

  const onSubmit = (data: addWeightType) => console.log(data);

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="my-5 space-y-4">
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date of measure</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "pl-3 text-left font-normal w-full",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="weight"
          render={({ field }) => (
            <>
              <InputWithLabel
                type="number"
                field={field}
                label="type your weight"
                placeholder="type ypur weight"
              />
              <FormMessage />
            </>
          )}
        />
        <Button type="submit" className="w-full md:w-1/3">
          Submit
        </Button>
      </form>
    </Form>
  );
};
