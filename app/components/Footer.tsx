import React from "react";
import Link from "next/link";
import Image from "next/image";
import logoImage from "@/public/logo.svg";

const footerlinks = [
  "Home",
  "About Us",
  "Features",
  "Register",
  "Storyset",
] as const;
const STYLES = {
  footerLinks: "text-white text-base px-1 md:px-8 py-8",
};

export const Footer = () => {
  return (
    <section className="w-full h-[330px] bg-black border-t-2 border-white overflow-y-clip overflow-hidden">
      <div className="flex flex-col items-center justify-between gap-6 py-20 pb-8">
        <div className="font-montserrat font-medium">
          {footerlinks.map((link, index) => (
            <Link href="/" key={index} className={STYLES.footerLinks}>
              {link}
            </Link>
          ))}
        </div>
        <div>
          <Image src={logoImage} alt="logo" className="h-20 w-20 scale-150" />
        </div>
        <p className="text-base text-white font-montserrat">
          Copyright CareerSprint© 2024
        </p>
      </div>
    </section>
  );
};
