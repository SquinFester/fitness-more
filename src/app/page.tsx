import { FlexDescription } from "@/components/FlexDescription";
import { OfferSection } from "@/components/OfferSection";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export default async function Home() {
  return (
    <main className="mt-10 mb-5 flex flex-col justify-center gap-20 container ">
      <FlexDescription>
        <section className="flex flex-col text-center gap-4  sm:gap-8">
          <h1 className="text-4xl sm:text-7xl font-extrabold">
            Good health starts with what you eat.
          </h1>
          <p>
            Want to eat more mindfully? Track meals, learn about your habits,
            and reach your goals with MyFitnessPal.
          </p>
          <Button className="uppercase w-full font-bold text-lg sm:w-3/4 mx-auto py-6">
            Start for free
          </Button>
        </section>
        <Image
          src="/breakfast.png"
          alt="breakfast image"
          width={450}
          height={450}
        />
      </FlexDescription>
      <FlexDescription>
        <section className="flex flex-col text-center gap-4 sm:gap-8 lg:order-2">
          <h1 className="text-3xl sm:text-5xl font-extrabold">
            Log from over 14 million foods.
          </h1>
          <p>
            See a breakdown of calories and nutrients, compare serving sizes,
            and discover how the food you eat supports your goals.
          </p>
        </section>
        <Image
          src="/blueberries.png"
          alt="blueberries image"
          width={450}
          height={450}
        />
      </FlexDescription>
      <OfferSection
        title="The Tools for Your Goals"
        description="Trying to lose weight, tone up, lower your BMI, or invest in your overall health? We give you the right features to get there."
      >
        <h1>ad</h1>
      </OfferSection>
    </main>
  );
}
