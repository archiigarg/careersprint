"use client";
import React from "react";
import Image from "next/image";
import { WebBar } from "../WebBar";
import section1Img from "@/public/section1.svg";
import section2Img from "@/public/section2.svg";
import section3Img from "@/public/section3.svg";
import section4Img from "@/public/section4.svg";
import section5Img from "@/public/section5.svg";
import section6Img from "@/public/section6.svg";
import section7Img from "@/public/section7.svg";
import { useRouter } from "next/navigation";

const Homie = () => {
  const router = useRouter();

  const sections = [
    { title: "Technical Skills", img: section1Img, route: "/web/technicalskills" },
    { title: "Soft Skills", img: section2Img, route: "/web/softskills" },
    { title: "Project Experience", img: section3Img, route: "" },
    { title: "Interview Preparation", img: section4Img, route: "/web/interviewpreparation" },
    { title: "Certifications", img: section5Img, route: "/web/certifications" },
    { title: "Resume Building", img: section6Img, route: "/web/resumebuilding" },
    { title: "Networking", img: section7Img, route: "/web/networking" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50 p-6">
      <div className="bg-white shadow-xl rounded-3xl overflow-hidden w-full max-w-6xl ml-50">
        
        <WebBar />

       
        <div className=" mt-10 text-center px-6">
          <h1 className="text-4xl font-semibold text-gray-800 font-mono">
            Hi there, what's your current focus for the day?
          </h1>
        </div>

       
        <div className="mt-8 px-8 space-y-4 ">
          {sections.map((section, index) => (
            <div
              key={index}
              onClick={() => section.route && router.push(section.route)}
              className="section-body flex items-center justify-between bg-gray-100 p-4 rounded-lg border border-gray-300 hover:border-orange-600 cursor-pointer transition"
            >
              <span className="text-white text-xl">SECTION {index + 1}: {section.title}</span>
              <Image src={section.img} alt={`section${index + 1}`} className="h-12 w-12 rounded-lg" />
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-6 text-center pb-6 px-6">
          <p className="text-gray-600 italic">
            Keep learning and improving every day!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Homie;
