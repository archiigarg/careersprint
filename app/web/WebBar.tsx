import React from 'react'
import Image from 'next/image';
import homeIcon from "@/public/homeicon.svg";
import sectionsIcon from "@/public/sectionsicon.svg";
import progressIcon from "@/public/progressicon.svg";
import profileIcon from "@/public/profileicon.svg";
import moreIcon from "@/public/moreicon.svg";
import { useRouter } from 'next/navigation';
export const WebBar = () => {
  const router = useRouter();
  const profile = () => {
    void router.push("/web/profilepage");
  };
  const home = () => {
    void router.push("/web/home");
  };
  return (
    <section>
        <div className='bg-white h-screen w-[250px] border-r-2 border-gray-300 flex flex-col items-left justify-start gap-6 py-16 px-6 fixed top-0 left-0'>
          <button className='text-2xl font-semibold text-left text-[#ff3131] font-abeezee'>
            CareerSprint
          </button>
          <div className='flex flex-row'>
            <Image alt="home" src={homeIcon} className='h-16 w-16'/>
            <button className='home-btn' onClick={home}>HOME</button>
          </div>
          <div className='flex flex-row'>
          <Image alt="home" src={sectionsIcon} className='h-16 w-16'/>
            <button className='home-btn'>SECTIONS</button>
          </div>
          <div className='flex flex-row'>
          <Image alt="home" src={progressIcon} className='h-16 w-16'/>
            <button className='home-btn'>PROGRESS</button>
          </div>
          <div className='flex flex-row'>
          <Image alt="home" src={profileIcon} className='h-16 w-16'/>
            <button className='home-btn' onClick={profile}>PROFILE</button>
          </div>
          <div className='flex flex-row'>
          <Image alt="home" src={moreIcon} className='h-16 w-16'/>
            <button className='home-btn'>MORE</button>
          </div>
        </div>

    </section>

)
};
