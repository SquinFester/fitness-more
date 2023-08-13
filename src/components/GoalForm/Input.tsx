export const Input = ({
  placeholder,
  label,
  name,
  type,
  field,
}: {
  placeholder: string;
  label: string;
  name: string;
  type?: string;
  field: any;
}) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input type={type} {...field} name={name} placeholder={placeholder} />
    </>
  );
};
