"use client"
import heroImage from "@/public/hero.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const Hero = () => {
  const router = useRouter();
  const handleSubmit = () => {
    void router.push("http://localhost:3000/login");
  };
  return (
    <section className=" md:pt-10 md:pb-2 bg-black h-screen overflow-hidden">
      
      <div className="container">
        
        <div className="flex flex-col md:flex-row items-center px-16 md:pl-6 lg:px-56 lg:pl-16">
          
          <div className="lg:w-[560px] items-center text-center md:text-left">
            <h1 className="font-ptserif font-bold text-white mt-6 text-5xl lg:text-7xl leading-tight">Accelerate on <br/> the Path to your <br/> <span className="text-transparent bg-gradient-to-b from-[#ff3131] to-[#ff914d] bg-clip-text">Dream Job</span> </h1>
            <p className="text-base lg:text-lg text-white tracking-tight mt-6 font-montserrat">Celebrate the joy of accomplishment with an app <br className="hidden md:block lg:hidden"/>designed to track your progress, motivate your efforts,<br className="hidden md:block lg:hidden"/> and celebrate your success.</p>

            <div className="items-center gap-1 mt-[30px]">
            <button className="rounded-full px-6 py-3 text-white font-semibold text-base bg-gradient-to-r from-[#ff3131] to-[#ff914d] hover:bg-[#ff3131]" onClick={handleSubmit}>
  Start Your Sprint Today ⇲
</button>

            </div>
          </div>
        
          <div className="md:h-[648px] lg:scale-110 lg:block">
            <Image src={heroImage} alt="hero" className="md:absolute md:h-full md:w-[600px] lg:max-w-none md:right-0 lg:w-auto lg:left-0"/> 
          </div>
      
        </div>
      
      </div>
    </section>
  );
};

