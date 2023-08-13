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
  const renderOptions = options.map((option, index) => (
    <FormItem key={index}>
      <FormControl>
        <RadioGroupItem value={option} />
      </FormControl>
      <FormLabel>{option}</FormLabel>
    </FormItem>
  ));
  return (
    <FormItem>
      <FormLabel>{label}:</FormLabel>
      <FormControl>
        <RadioGroup onValueChange={field.onChange} defaultValue={field.value}>
          {renderOptions}
        </RadioGroup>
      </FormControl>
    </FormItem>
  );
};
