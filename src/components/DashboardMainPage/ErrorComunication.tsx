import { cn } from "@/lib/utils";
import Link from "next/link";

export const ErrorComunication = ({
  text,
  link,
  linkText,
  styles,
}: {
  text: string;
  link: string;
  linkText: string;
  styles?: string;
}) => {
  return (
    <div className={cn("flex flex-col max-w-fit", styles)}>
      <p>{text}</p>
      <Link
        href={link}
        className="underline text-primaryblue w-full text-right"
      >
        {linkText}
      </Link>
    </div>
  );
};
