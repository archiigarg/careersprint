"use client";
import React from "react";

interface FeatureCardProps {
  number: string;
  title: string;
  subtitle: string;
  color: string;
}

export const FeatureCard2: React.FC<FeatureCardProps> = ({
  number,
  title,
  subtitle,
  color,
}) => {
  return (
    <div className="relative bg-white shadow-lg rounded-xl p-5 w-80 h- flex flex-col gap-3 border border-gray-200">
      <span className={`text-${color}-500 font-semibold text-lg`}>{number}</span>
      <h3 className="text-lg font-bold text-black">{title}</h3>
      <p className="text-gray-600 text-sm">{subtitle}</p>
      <div className={`absolute w-4 h-4 bg-${color}-500 rounded-full top-2 left-2 shadow-md`}></div>
    </div>
  );
};

export const Features = () => {
  return (
    <div className="mt-10 pb-20 md:pt-20 bg-white h-screen overflow-hidden">
      <h2 className="text-center font-ptserif font-bold text-black text-5xl leading-normal">
        Our {" "}
        <span className="text-transparent bg-gradient-to-b from-[#ff3131] to-[#ff914d] bg-clip-text">
          Features
        </span>
      </h2>

      <div className="mx-auto max-w-screen-lg p-4 pt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-2">
          <FeatureCard2
            number="01"
            title="Learning Paths"
            subtitle="Tailored learning experiences that adapt to your goals and skill levels, guiding you through every step of your career journey."
            color="orange"
          />

          <FeatureCard2
            number="02"
            title="Skill Development"
            subtitle="Master all aspects of placement preparations with our defined task lists that make you job ready by helping you build a multifaceted portfolio."
            color="blue"
          />

          <FeatureCard2
            number="03"
            title="Progress Tracking"
            subtitle="Track your develeopment across all key areas with our mileston-based system, ensuring you are fully prepared for placement day."
            color="purple"
          />

          
        </div>
      </div>
    </div>
  );
};
