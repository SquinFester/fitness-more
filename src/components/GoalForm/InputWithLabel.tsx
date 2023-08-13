import { FormControl, FormItem, FormLabel } from "../ui/Form";
import { Input } from "../ui/Input";

export const InputWithLabel = ({
  placeholder,
  label,
  type,
  field,
}: {
  placeholder: string;
  label: string;
  type?: string;
  field: any;
}) => {
  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <FormControl>
        <Input placeholder={placeholder} {...field} type={type} />
      </FormControl>
    </FormItem>
  );
};
