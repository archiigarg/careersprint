"use client";
import { FeatureCard2 } from "../components/FeatureCard";

export const Features = () => {
  return (
    <div className="mt-10 pb-20 md:pt-20  bg-white h-screen overflow-hidden">
      <h2 className="text-center font-ptserif font-bold text-black text-5xl leading-normal">
        Our{" "}
        <span className="text-transparent bg-gradient-to-b from-[#ff3131] to-[#ff914d] bg-clip-text">
          Features
        </span>
      </h2>

      <div className="mx-auto max-w-screen-lg p-4 pt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-2 h-[400px]">
          <FeatureCard2
            title={"Learning Paths"}
            subtitle={
              "Tailored learning experiences that adapt to your goals and skill levels, guiding you through every step of your career journey."
            }
          />

          <FeatureCard2
            title={"Skill Development"}
            subtitle={
              "Master all aspects of placement preparations with our defined task lists that make you job ready by helping you build a multifaceted portfolio."
            }
          />
          <FeatureCard2
            title={"Progress Tracking"}
            subtitle={
              "Track your develeopment across all key areas with our mileston-based system, ensuring you are fully prepared for placement day."
            }
          />
        </div>
      </div>
    </div>
  );
};