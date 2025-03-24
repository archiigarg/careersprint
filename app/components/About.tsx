"use client";

import aboutImage from "@/public/about.svg";
import Image from "next/image";
import { motion } from "framer-motion";

export const About = () => {
  const textVariants = {
    hidden: { 
      y: 50, 
      opacity: 0 
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="bg-black overflow-hidden flex items-center justify-center min-h-screen px-6 md:px-20 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-10 md:gap-16">
        <div className="md:w-1/2 flex justify-center md:justify-start">
          <div className="relative w-full max-w-md md:max-w-lg">
            <Image 
              src={aboutImage} 
              alt="CareerSprint: Your Career Acceleration Platform" 
              className="w-full shadow-lg rounded-xl" 
              priority
            />
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          <h2 className="font-poppins font-black text-white text-4xl md:text-5xl leading-tight tracking-tight">
            About <span className="text-transparent bg-gradient-to-r from-[#ff6b1c] to-[#ff914d] bg-clip-text">CareerSprint</span>
          </h2>
          <div className="w-full max-w-md space-y-6">
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
              variants={textVariants}
              className="text-lg font-inter text-gray-300 leading-relaxed"
            >
              A <span className="text-[#ff6b1c] font-semibold">Handshake survey</span> revealed a stark reality: 
              <span className="font-bold text-white"> 70% of students</span> feel 
              <span className="italic text-[#ff914d]"> lost in the complex job market</span>.
            </motion.p>
            
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
              variants={textVariants}
              className="text-lg font-inter text-gray-300 leading-relaxed"
            >
              We understand your journey. That's why 
              <span className="text-transparent bg-gradient-to-r from-[#ff6b1c] to-[#ff914d] bg-clip-text font-bold"> CareerSprint</span> 
              exists – to transform uncertainty into opportunity.
            </motion.p>
            
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
              variants={textVariants}
              className="text-lg font-inter text-gray-300 leading-relaxed"
            >
              Our mission: Provide a 
              <span className="text-[#ff914d] font-semibold"> holistic career acceleration</span> 
              platform that equips you with the 
              <span className="italic text-white"> strategic tools</span> to 
              <span className="text-[#ff6b1c] font-bold"> excel professionally</span>.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
