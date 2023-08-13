"use client";

import { ControllerRenderProps } from "react-hook-form";
import { FormControl, FormItem, FormLabel } from "../ui/Form";

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
  const renderOptions = options.map((option, index) => (
    <SelectItem key={index} value={option}>
      {option}
    </SelectItem>
  ));

  return (
    <FormItem>
      <FormLabel>{label}:</FormLabel>
      <Select onValueChange={field.onChange} defaultValue={field.value}>
        <FormControl>
          <SelectTrigger>
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
        </FormControl>
        <SelectContent>{renderOptions}</SelectContent>
      </Select>
    </FormItem>

    // <>
    //   <label htmlFor={name}>{label}:</label>
    //   <select id={name} {...field}>
    //     {renderOptions}
    //   </select>
    // </>
  );
};
export default SelectInput;
