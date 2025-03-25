"use client";
import React from "react";

interface FeatureCardProps {
  number: string;
  title: string;
  subtitle: string;
}

export const FeatureCard2: React.FC<FeatureCardProps> = ({
  number,
  title,
  subtitle,
}) => {
  return (
    <div
      className="relative bg-white shadow-lg rounded-xl p-6 w-80 flex flex-col gap-3 border border-gray-200 transition-transform duration-300 hover:scale-105 hover:shadow-2xl group"
    >
      <span className="text-black font-semibold text-xl group-hover:text-orange-500 transition-colors duration-300">
        {number}
      </span>
      <h3 className="text-lg font-bold text-black">{title}</h3>
      <p className="text-gray-600 text-sm">{subtitle}</p>
      <div className="absolute w-4 h-4 bg-black rounded-full top-2 left-2 shadow-md group-hover:bg-orange-500 transition-colors duration-300"></div>
    </div>
  );
};

export const Features = () => {
  return (
    <div
      className="mt-10 pb-20 md:pt-20 min-h-screen flex flex-col items-center bg-white"
    >
      <h2 className="text-center font-ptserif font-bold text-black text-5xl leading-normal">
        Our{" "}
        <span className="text-transparent bg-gradient-to-b from-[#ff3131] to-[#ff914d] bg-clip-text">
          Features
        </span>
      </h2>

      <div className="mx-auto max-w-screen-lg p-6 pt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard2
            number="01"
            title="Learning Paths"
            subtitle="Tailored learning experiences that adapt to your goals and skill levels, guiding you through every step of your career journey."
          />
          <FeatureCard2
            number="02"
            title="Skill Development"
            subtitle="Master all aspects of placement preparations with our defined task lists that make you job ready by helping you build a multifaceted portfolio."
          />
          <FeatureCard2
            number="03"
            title="Progress Tracking"
            subtitle="Track your development across all key areas with our milestone-based system, ensuring you are fully prepared for placement day."
          />
          <FeatureCard2
            number="04"
            title="Mock Interviews"
            subtitle="Prepare for real interviews with mock sessions, personalized feedback, and expert tips to boost your confidence and performance."
          />
          <FeatureCard2
            number="05"
            title="Resume Building"
            subtitle="Craft a professional resume with expert guidance, ensuring you stand out in the competitive job market."
          />
          <FeatureCard2
            number="06"
            title="Placement Assistance"
            subtitle="Get access to exclusive job postings, internships, and placement support to kickstart your career journey."
          />
        </div>
      </div>
    </div>
  );
};
