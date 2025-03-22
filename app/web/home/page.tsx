"use client"
import Image from 'next/image';
import React from 'react'
import { WebBar } from '../WebBar';
import section1Img from "@/public/section1.svg";
import section2Img from "@/public/section2.svg";
import section3Img from "@/public/section3.svg";
import section4Img from "@/public/section4.svg";
import section5Img from "@/public/section5.svg";
import section6Img from "@/public/section6.svg";
import section7Img from "@/public/section7.svg";
import { useRouter } from 'next/navigation';
const Homie = () =>{ 
  const router = useRouter();
  const technical = () => {
    void router.push("/web/technicalskills");
  };
  const network = () => {
    void router.push("/web/networking");
  };
  const certification = () => {
    void router.push("/web/certifications");
  };
  const resume = () => {
    void router.push("/web/resumebuilding");
  };
  const interview = () => {
    void router.push("/web/interviewpreparation");
  };
  const softskill= () => {
    void router.push("/web/softskills");
  };
  return( 
     
    <section className='h-fit bg-white overflow-hidden'>
      <h1 className=' font-montserrat font-bold bg-gradient-to-r from-[#ff3131] to-[#ff914d] text-transparent bg-clip-text text-center ml-44 text-5xl mt-10 px-[280px]'>Hi there, what's your current focus for the day?</h1>
      <div className='flex flex-row'>
        <WebBar/>
        <div className='flex flex-col items-center justify-start gap-6 py-16 px-[380px]'>
          <div className='section-body'>
            <button className='section-text' onClick={technical}>SECTION 1 : TECHNICAL SKILLS</button>
            <Image src={section1Img} alt="section1" className='section-img'/>
          </div>
          <div className='section-body'>
            <button className='section-text' onClick={softskill}>SECTION 2 : SOFT SKILLS</button>
            <Image src={section2Img} alt="section2" className='section-img'/>
          </div>
          <div className='section-body'>
            <button className='section-text'>SECTION 3 : PROJECT EXPERIENCE</button>
            <Image src={section3Img} alt="section3" className='section-img'/>
          </div>
          <div className='section-body'>
            <button className='section-text' onClick={interview}>SECTION 4 : INTERVIEW PREPARATION</button>
            <Image src={section4Img} alt="section4" className='section-img'/>
          </div>
          <div className='section-body'>
            <button className='section-text' onClick={certification}>SECTION 5 : CERTIFICATIONS</button>
            <Image src={section5Img} alt="section5" className='section-img'/>
          </div>
          <div className='section-body'>
            <button className='section-text' onClick={resume}>SECTION 6 : RESUME BUILDING</button>
            <Image src={section6Img} alt="section6" className='section-img'/>
          </div>
          <div className='section-body'>
            <button className='section-text' onClick={network}>SECTION 7 : NETWORKING</button>
            <Image src={section7Img} alt="section" className='section-img'/>
          </div>
        </div>
      </div>
    </section>
    )}
;
export default Homie;
