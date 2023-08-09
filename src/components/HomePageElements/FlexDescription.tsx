type FlexDescriptionProps = {
  children: React.ReactNode;
};

export const FlexDescription = ({ children }: FlexDescriptionProps) => {
  return (
    <section className="flex flex-col items-center gap-5 lg:flex-row lg:justify-center">
      {children}
    </section>
  );
};
