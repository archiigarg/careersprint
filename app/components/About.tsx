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
    <section className="relative bg-black overflow-hidden flex items-center justify-center h-[90vh] " id="aboutus"> 
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-[#ff6b1c] to-transparent opacity-40 blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-[#ff6b1c] to-transparent opacity-40 blur-2xl"></div>
      </div>
      <div className="flex items-center justify-between w-full ">
       
        <div className="md:w-1/2 flex justify-center md:justify-start relative ml-20">
          <div className="relative w-full max-w-7xl">
            <Image 
              src={aboutImage} 
              alt="CareerSprint: Your Career Acceleration Platform" 
              className="w-full shadow-xl rounded-xl"
              priority
            />
          </div>
        </div>

        <div className="md:w-1/2 flex flex-col space-y-6 mx-24">
          <h2 className="font-poppins font-black text-white text-6xl leading-tight tracking-tight text-center ">
            About <span className="text-transparent bg-gradient-to-r from-[#ff6b1c] to-[#ff914d] bg-clip-text">CareerSprint</span>
          </h2>
          <div >
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
              variants={textVariants}
              className="text-2xl font-inter text-gray-300 leading-relaxed"
            >
              A <span className="text-[#ff6b1c] font-semibold">Handshake survey</span> revealed a stark reality: 
              <span className="font-bold text-white"> 70% of students</span> feel 
              <span className="italic text-[#ff914d]"> lost in the complex job market</span>.
              We understand your journey. That&apos;s why 
              <span className="text-transparent bg-gradient-to-r from-[#ff6b1c] to-[#ff914d] bg-clip-text font-bold"> CareerSprint </span> 
              exists to transform uncertainty into opportunity.
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
