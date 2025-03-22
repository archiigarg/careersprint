"use client"
import ctaImage from "@/public/cta.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export const CTA = () => {
  const router = useRouter();
  const handleSubmit = () => {
    void router.push("http://localhost:3000/signup");
  };
  return (
    <section className=" lg:pt-5 lg:pb-10 bg-black md:h-screen ">
      <div className="container mt-6">
        <div className="flex items-center justify-between md:px-36">
        <div className="hidden md:block justify-between items-center scale-110 py-10 md:py-28">
        <Image src={ctaImage} alt="cta" className=""/> 
        </div>
        <div className="lg:w-[478px] flex flex-col px-8 gap-4 items-center justify-between">
           <h2 className="font-ptserif font-bold text-center text-white mt-6 text-5xl leading-tight">Ready To Sprint <br/> Towards <br/> Your <span className="text-transparent bg-gradient-to-r from-[#ff3131] to-[#ff914d] bg-clip-text"> Career Goals</span>?</h2>
           <p className="text-base w-[400px] text-white mt-6 font-montserrat text-center">Join CareerSprint today and take the <br/> first step towards unlocking your potential and achieving success in the job market.</p>
           <div className="flex items-center gap-1 mt-[30px]">
            <button className="btn px-8 py-3" onClick={handleSubmit}>Get Started Now</button>
           </div>
        </div>
        </div>
      </div>
    </section>
  );
};
