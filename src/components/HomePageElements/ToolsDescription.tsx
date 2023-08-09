import Image from "next/image";

type ToolsDescriptionProps = {
  imageSrc: string;
  alt: string;
  title: string;
  description: string;
};

export const ToolsDescription = ({
  imageSrc,
  alt,
  title,
  description,
}: ToolsDescriptionProps) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="w-fit rounded-full p-6 shadow-circle">
        <Image src={imageSrc} alt={alt} width={80} height={80} />
      </div>
      <h1 className="text-xl font-bold">{title}</h1>
      <p>{description}</p>
    </div>
  );
};
