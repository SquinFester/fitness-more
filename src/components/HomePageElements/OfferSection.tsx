type OfferSectionProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export const OfferSection = ({
  title,
  description,
  children,
}: OfferSectionProps) => {
  return (
    <section className="text-center flex flex-col justify-center gap-5 container mt-24">
      <h1 className="text-3xl sm:text-5xl font-extrabold">{title}</h1>
      <p className="md:w-2/3 md:mx-auto mb-10">{description}</p>
      {children}
    </section>
  );
};
