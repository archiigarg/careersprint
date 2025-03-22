// components/ui/button.tsx
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
}

export const Button: React.FC<ButtonProps> = ({ variant = "default", className, children, ...props }) => {
  return (
    <button
      className={`px-4 py-2 rounded-md font-semibold transition-all ${
        variant === "outline" ? "border border-orange-500 text-orange-500" : "bg-orange-500 text-white"
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
