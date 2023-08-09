import Image from "next/image";
import Link from "next/link";

type RecipesCardProps = {
  href: string;
  imageSrc: string;
  alt: string;
  title: string;
};

export const RecipesCard = ({
  href,
  imageSrc,
  alt,
  title,
}: RecipesCardProps) => {
  return (
    <Link
      href={href}
      className="flex flex-col items-center rounded-xl shadow-md overflow-hidden group"
      target="_blank"
    >
      <div className="overflow-hidden">
        <Image
          src={imageSrc}
          alt={alt}
          width={300}
          height={300}
          className="transition group-hover:scale-110"
        />
      </div>
      <div className="text-left p-4">
        <h1 className="text-lg font-semibold">{title}</h1>
        <p className="mt-2 font-medium text-primaryblue">MyFitnessPal Blog</p>
      </div>
    </Link>
  );
};
