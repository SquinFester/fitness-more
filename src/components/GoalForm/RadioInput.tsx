"use client";

import { FormControl, FormItem, FormLabel } from "../ui/Form";
import { RadioGroupItem, RadioGroup } from "../ui/RadioGroup";

export const RadioInput = ({
  options,
  label,
  field,
}: {
  options: string[];
  label: string;
  field: any;
}) => {
  return (
    <FormItem>
      <FormLabel>{label}:</FormLabel>
      <FormControl>
        <RadioGroup
          onValueChange={field.onChange}
          defaultValue={field.value}
          className="flex gap-10"
        >
          {options.map((option, index) => (
            <FormItem key={index} className="space-x-2">
              <FormControl>
                <RadioGroupItem value={option} />
              </FormControl>
              <FormLabel>{option}</FormLabel>
            </FormItem>
          ))}
        </RadioGroup>
      </FormControl>
    </FormItem>
  );
};
