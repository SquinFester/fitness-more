"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { CardTheme } from "./CardTheme";

const data = [
  {
    imageSrc: "/people/person1.png",
    title: "Education helped her lose 30 pounds.",
    description:
      "MyFitnessPal gave me a wake up call to the way I was eating and made things clear what I needed to change.",
    name: "Stephanie",
  },
  {
    imageSrc: "/people/person2.png",
    title: "From fast-food addict to mindful eater.",
    description:
      "I naturally fell into the concept of mindful eating… it takes 15-20 minutes for the food to hit your stomach, so I started eating slower.",
    name: "Eric",
  },
  {
    imageSrc: "/people/person3.png",
    title: "She was eager to make a change.",
    description:
      "Now, when I have friends starting to run and getting frustrated, I tell them to just stick with it, eventually, you’ll get faster.",
    name: "Lori",
  },
];

export const Carousel = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      loop
      modules={[Autoplay, Pagination]}
      className="container"
    >
      {data.map((d, i) => (
        <SwiperSlide key={i}>
          <CardTheme
            imageSrc={d.imageSrc}
            title={d.title}
            description={d.description}
            name={d.name}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
