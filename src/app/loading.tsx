import { Loader2 } from "lucide-react";

const Loading = () => {
  return (
    <div className="absolute w-full h-full flex justify-center items-center">
      <Loader2
        width={50}
        height={50}
        className="animate-spin text-primaryblue"
      />
    </div>
  );
};
export default Loading;
