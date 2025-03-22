import uspImage from "@/public/usp.svg";
import Image from "next/image";

export const USP = () => {
  return (
    <section className="md:pb-10 bg-white h-screen overflow-hidden">
      <div className="container">
        <div className="flex items-center justify-around px-48 py-20">
        <div className="md:w-[478px] flex flex-col justify-around pr-10">
          <h2 className="font-ptserif font-bold text-black mt-6 text-5xl leading-tight"><span className="text-transparent bg-gradient-to-b from-[#ff3131] to-[#ff914d] bg-clip-text">CareerSprint</span> : <br/> Your <br/> Competitive Edge</h2>
          <div className="w-[440px] h-[190px] border-2 border-black rounded-2xl mt-6">
            <div>
              <p className="para">Our <span className="italic underline">progress tracking system</span> along with the <br/><span className="italic underline">industry-verified metrics</span>, <span  className="italic underline">defined milestones</span>, <br/>and <span  className="italic underline">personalized guidance </span> ensures you’re <br/> always moving forward, making <span className="font-bold">CareerSprint</span><br/> the ultimate companion on your journey to a<br/> fulfilling career.</p>
            </div>
          </div>
        </div>
        <div className="justify-between items-center scale-125 pl-10">
          <Image src={uspImage} alt="usp" className=""/> 
        </div>
      </div>
      </div>
    </section>
  );
};

