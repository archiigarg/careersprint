"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";

const useGradientHover = (circleSize = 256) => {
  const [circlePosition, setCirclePosition] = useState({
    x: -circleSize,
    y: -circleSize,
  });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    setCirclePosition({ x, y });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setCirclePosition({ x: -circleSize, y: -circleSize });
  };

  return {
    circlePosition,
    isHovered,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
  };
};
interface FeatureCardProps {
  title: string;
  subtitle: string;
}

export const FeatureCard2: React.FC<FeatureCardProps> = ({
  title,
  subtitle,
}) => {
  const {
    circlePosition,
    isHovered,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
  } = useGradientHover();

  return (
    <div
      className="relative overflow-hidden rounded-3xl border-4 border-gray-500 border-gradient-to-r from-red-500 to-orange-400 bg-white p-6 hover:border-red-600"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ height: "auto", width: "100%" }}
    >
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:`radial-gradient(circle at ${circlePosition.x}px ${circlePosition.y}px, rgba(255, 99, 71, 0.1), transparent 80%)`,
            transition: "background 0.3s ease-out",
          }}
        ></div>
      )}
      <div className="flex flex-col items-center justify-between">
        <div className="text-center font-montserrat bg-gradient-to-r from-red-500 to-orange-400 text-white font-bold py-2 px-4 rounded-full w-full ">
          {title}
        </div>
        <p className="text-md font-montserrat text-black text-center py-5">{subtitle}</p>
      </div>
    </div>
  );
};