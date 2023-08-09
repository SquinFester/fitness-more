import Image from "next/image";
type CardThemeProps = {
  imageSrc: string;
  title: string;
  description: string;
  name: string;
};

export const CardTheme = ({
  imageSrc,
  title,
  description,
  name,
}: CardThemeProps) => {
  return (
    <article className="flex flex-col items-center gap-12 max-w-3xl mx-auto">
      <Image
        src={imageSrc}
        alt="user profile"
        width={150}
        height={150}
        className="rounded-full"
      />
      <div className="text-center  flex flex-col gap-3">
        <div className="w-fit relative mx-auto">
          <h1 className="text-2xl font-semibold relative">{title}</h1>
          <Image
            src="/quotation-mark-svgrepo-com.svg"
            alt="quotation-mark"
            width={80}
            height={80}
            className="opacity-40 absolute -top-[50px] left-0 rotate-12 -z-10"
          />
        </div>
        <i>"{description}"</i>
        <p className="w-full text-right text-lg">~{name}</p>
      </div>
    </article>
  );
};
