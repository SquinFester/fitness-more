interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  border?: "overline" | null;
}

export const Button = ({ children, border, ...rest }: ButtonProps) => {
  return (
    <button
      className="font-semibold px-4 py-2 border-primary rounded-md bg-primary text-white flex items-center justify-center leading-none"
      {...rest}
    >
      {children}
    </button>
  );
};
