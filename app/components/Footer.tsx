import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logoImage from "@/public/logo.svg";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Features", href: "/features" },
  { label: "Register", href: "/register" },
];

export const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 space-y-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-6 md:mb-0">
            <Image 
              src={logoImage} 
              alt="CareerSprint Logo" 
              width={60} 
              height={60} 
              className="transition-transform hover:scale-110"
            />
            <span className="text-xl font-bold text-transparent bg-gradient-to-r from-[#ff6b1c] to-[#ff914d] bg-clip-text">
              CareerSprint
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-4 md:gap-8">
            {footerLinks.map((link) => (
              <Link 
                key={link.label} 
                href={link.href} 
                className="text-gray-300 hover:text-white transition-colors duration-300 text-sm uppercase tracking-wider"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="text-center border-t border-gray-800 pt-6">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} CareerSprint. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;