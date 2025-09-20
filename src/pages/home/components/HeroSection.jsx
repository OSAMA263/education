import heroImg from "@/assets/home-hero.png";
import BlueDots from "@/assets/blue-dots.svg";
import { Button, Float } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="grid lg:grid-cols-2 items-center gap-2 lg:gap-12 lg:h-[80dvh]"
    >
      <div className="space-y-10">
        <h1 className="2xl:text-5xl xl:text-4xl text-2xl font-bold">
          Learn at Your Own Pace, from Anywhere in the World
        </h1>
        <p className="text-secondary lg:text-xl">
          Welcome to EduSphere, your digital learning companion designed for
          students and lifelong learners alike. Our platform offers expertly
          crafted video lessons, live classes, and personalized progress
          tracking to make education accessible and affordable. Join thousands
          of global learners and transform the way you learn today.
        </p>
        <div className="space-x-6">
          <Button asChild>
            <NavLink to="/lessons">Get Started</NavLink>
          </Button>
          <Button asChild className="!bg-secondary !text-gray-200">
            <NavLink to="/about">Learn More</NavLink>
          </Button>
        </div>
      </div>
      {/* hero img and the blue dots */}
      <div className="relative max-lg:hidden">
        <img src={heroImg} className="w-full" alt="hero img" />
        <Float
          _dark={{ opacity: 0.2 }}
          placement={"bottom-start"}
          className="-z-10"
        >
          <img src={BlueDots} alt="dots" />;
        </Float>
        <Float
          _dark={{ opacity: 0.2 }}
          right={"36"}
          top={"20"}
          className="w-fit -z-10"
        >
          <img src={BlueDots} alt="dots" />;
        </Float>
      </div>
    </section>
  );
}
