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
    <article className="flex flex-col items-center gap-12">
      <Image
        src={imageSrc}
        alt="user profile"
        width={150}
        height={150}
        className="rounded-full"
      />
      <div className="text-center relative">
        <Image
          src="/quotation-mark-svgrepo-com.svg"
          alt="quotation-mark"
          width={80}
          height={80}
          className="opacity-40 absolute -top-[50px] left-0 rotate-12 -z-10"
        />
        <h1 className="text-2xl font-semibold">{title}</h1>
        <i>"{description}"</i>
        <p className="w-full text-right text-lg">~{name}</p>
      </div>
    </article>
  );
};
