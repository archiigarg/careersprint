import aboutImage from "@/public/about.svg";
import Image from "next/image";

export const About = () => {
  return (
    <section className="bg-black overflow-hidden flex items-center justify-center h-screen px-6 md:px-20">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-10 md:gap-16">
        <div className="md:w-1/2 flex justify-center">
          <Image 
            src={aboutImage} 
            alt="About CareerSprint" 
            className="w-full max-w-md md:max-w-lg" 
          />
        </div>
        <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="font-poppins font-black text-white text-4xl md:text-5xl leading-tight tracking-tight">
            About <span className="text-transparent bg-gradient-to-r from-[#ff3131] to-[#ff914d] bg-clip-text">CareerSprint</span>
          </h2>
          <div className="w-full max-w-md border-2 border-gray-700 rounded-2xl mt-6 p-6 text-white shadow-lg">
            <p className="mb-4 text-lg font-inter">
              A survey by <span className="font-semibold">Handshake</span> revealed that
              <span className="text-[#ff3131] font-bold"> 70%</span> of students were
              <span className="italic"> unsure about job market conditions</span> and how to
              effectively navigate them post-graduation.
            </p>
            <p className="mb-4 text-lg font-inter">
              If that sounds like you too... Welcome to
              <span className="text-transparent bg-gradient-to-r from-[#ff3131] to-[#ff914d] bg-clip-text font-bold"> CareerSprint</span>!
            </p>
            <p className="text-lg font-inter">
              Let us be your <span className="italic"> upper hand leverage</span> for a
              <span className="font-semibold"> holistic placement preparation </span>to achieve success in
              today's competitive job market.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};