import { Carousel } from "@/components/Carousel/Carousel";
import { FlexDescription } from "@/components/HomePageElements/FlexDescription";
import { OfferSection } from "@/components/HomePageElements/OfferSection";
import { RecipesCard } from "@/components/HomePageElements/RecipesCard";
import { ToolsDescription } from "@/components/HomePageElements/ToolsDescription";
import { Button, buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <main className="mt-10 flex flex-col justify-center gap-20 ">
        <FlexDescription>
          <section className="flex flex-col text-center gap-4  sm:gap-8">
            <h1 className="text-4xl sm:text-7xl font-extrabold">
              Good health starts with what you eat.
            </h1>
            <p>
              Want to eat more mindfully? Track meals, learn about your habits,
              and reach your goals with MyFitnessPal.
            </p>
            <Link
              href="/dashboard"
              className={cn(
                buttonVariants(),
                "uppercase w-full font-bold text-lg sm:w-3/4 mx-auto py-6"
              )}
            >
              Start for free
            </Link>
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
      </main>
      <OfferSection
        title="The Tools for Your Goals"
        description="Trying to lose weight, tone up, lower your BMI, or invest in your overall health? We give you the right features to get there."
      >
        <section className="grid grid-cols-1 sm:grid-cols-3 content-between gap-10">
          <ToolsDescription
            imageSrc={"/tool-icons/book.svg"}
            alt="book"
            title="Learn. Track. Improve."
            description="Keeping a food diary helps you understand your habits and increases your likelihood of hitting your goals."
          />
          <ToolsDescription
            imageSrc={"/tool-icons/radiator.svg"}
            alt="radiator"
            title="Logging Simplified."
            description="Scan barcodes, save meals and recipes, and use Quick Tools for fast and easy food tracking."
          />
          <ToolsDescription
            imageSrc={"/tool-icons/shoe.svg"}
            alt="shoe"
            title="Stay Motivated."
            description="Join the World&#x27;s Largest Fitness Community for advice, tips, and support 24/7."
          />
        </section>
      </OfferSection>
      <OfferSection
        title="Victory Stories"
        description="Every day, more than 3,000 members reach their goals with MyFitnessPal. Get inspired for the journey ahead."
      >
        <Carousel />
        <Link
          href="/dashboard"
          className={cn(
            buttonVariants(),
            "uppercase w-full font-bold text-lg sm:max-w-lg mx-auto py-6 mt-10"
          )}
        >
          Start your journey today
        </Link>
      </OfferSection>
      <OfferSection
        title="Recipes & Inspiration"
        description="Get nutritionist-approved recipes and motivational workout tips from MyFitnessPal experts."
      >
        <section className="grid grid-cols-1 sm:grid-cols-3 content-between gap-10 ">
          <RecipesCard
            href="https://blog.myfitnesspal.com/10-make-ahead-breakfasts-under-300-calories/"
            imageSrc="/recipes/rice.png"
            alt="rice"
            title="15 Make-Ahead Breakfasts Under 300 Calories"
          />
          <RecipesCard
            href="https://blog.myfitnesspal.com/the-problem-with-cheat-days/"
            imageSrc="/recipes/cheat-day.png"
            alt="cheat day"
            title="The Problem With Cheat Days"
          />
          <RecipesCard
            href="https://blog.myfitnesspal.com/essential-guide-to-movement-activity/"
            imageSrc="/recipes/jog.png"
            alt="jogging woman"
            title="Essentail Guide to Getting Moving"
          />
        </section>
      </OfferSection>
      <OfferSection
        title="Connect with over 50 apps."
        description="Easily link your MyFitnessPal account with apps that support your healthier lifestyle. It&#x27;s not just about calories. It&#x27;s about feeling better, looking better, and living better."
      >
        <Image
          src="/apps.png"
          alt="apps composition"
          width={600}
          height={600}
          className="mx-auto"
        />
        <p className="text-xs text-zinc-600 mt-10 max-w-2xl text-center mx-auto">
          MyFitnessPal is one of the best weight loss apps and fitness apps,
          helping nearly 1 million members reach their nutrition and fitness
          goals every year. Members use it as a calories tracker and calorie
          counter to log their foods, and take advantage of the app&#x27;s food
          database that contains over 14 million foods. It&#x27;s not just a
          free calorie counter app — it&#x27;s also the best calorie counter app
          for people who are looking to take back control of their health and
          fitness.
        </p>
      </OfferSection>
    </>
  );
}
