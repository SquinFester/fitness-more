"use client";

import { FormControl, FormItem, FormLabel } from "../ui/Form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/Select";

const SelectInput = ({
  options,
  label,
  field,
  placeholder,
}: {
  options: string[];
  label: string;
  placeholder: string;
  field: any;
}) => {
  return (
    <FormItem>
      <FormLabel>{label}:</FormLabel>
      <Select onValueChange={field.onChange} defaultValue={field.value}>
        <FormControl>
          <SelectTrigger>
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          {options.map((option, index) => (
            <SelectItem key={index} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </FormItem>
  );
};
export default SelectInput;
