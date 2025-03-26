"use client";
import { useRouter } from "next/navigation";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BsX } from "react-icons/bs";
import menu from "@/public/menu.svg";

const navlinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about-us" },
  { label: "Features", href: "#features" },
] as const;

const STYLES = {
  navLinks:
    "text-white text-base hover:bg-slate-800 rounded-3xl px-4 py-2 my-4 lg:py-1.5 ease-in-out duration-300",
};

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  const router = useRouter();
  const handleSubmit = () => {
    void router.push("/login");
  };

  return (
    <header>
      <div className="fixed left-[4%] top-0 z-20 my-2 w-[92%] rounded-full bg-gray-900 py-2 lg:left-1/4 lg:mx-auto lg:w-1/2">
        <nav className="mx-auto flex w-[92%] items-center justify-between">
          <div className="flex w-full flex-row items-center justify-between lg:mx-auto">
            <h1 className="text-base font-montserrat cursor-pointer font-semibold text-white">
              CareerSprint
            </h1>
            <div className="relative mt-0 hidden space-y-1 p-0 font-montserrat font-medium lg:block">
              {navlinks.map((link, index) => (
                <Link key={index} href={link.href} className={STYLES.navLinks}>
                  {link.label}
                </Link>
              ))}
            </div>
            <button
              onClick={handleSubmit}
              className="hidden lg:block px-4 py-2 rounded-3xl text-white font-semibold text-base bg-gradient-to-r from-[#ff3131] to-[#ff914d] hover:bg-[#ff3131]"
            >
              Join Us ⇲
            </button>
          </div>

          <div onClick={toggleMenu}>
            <Image
              src={menu as StaticImageData}
              alt="menulist"
              height={26}
              width={26}
              className="cursor-pointer lg:hidden"
            />
          </div>

          <div
            className={`fixed top-0 h-screen w-3/4 bg-gray-900 p-10 duration-700 ease-in-out lg:hidden ${
              menuOpen ? "left-0 " : "left-[-100%]"
            }`}
          >
            <>
              <div className="flex w-full items-center justify-end">
                <div onClick={toggleMenu} className="cursor-pointer">
                  <BsX className="h-6 w-6 text-white" />
                </div>
              </div>

              <div className="my-6 flex flex-col items-center justify-between py-4 lg:hidden">
                {navlinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={STYLES.navLinks}
                  >
                    {link.label}
                  </Link>
                ))}
                <button
                  onClick={handleSubmit}
                  className="my-6 rounded-full bg-gradient-to-tr from-[#ff3131] to-[#ff914d] px-3 py-2 font-montserrat text-sm font-semibold text-white hover:bg-none hover:bg-[#ff3131] lg:hidden"
                >
                  Join Us ⇲
                </button>
                <h1 className="my-6 block cursor-pointer py-6 text-base font-semibold text-white lg:hidden">
                  CareerSprint
                </h1>
              </div>
            </>
          </div>
        </nav>
      </div>
    </header>
  );
};
