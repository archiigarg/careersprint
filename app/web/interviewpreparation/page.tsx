"use client";
import React, { useState } from 'react';
import mileStone from "@/public/milestoneicon.svg";
import Image from 'next/image';
import { WebBar } from '../WebBar';

interface Task {
  label: string;
  completed: boolean;
}

const InterviewPreparation: React.FC = () => {
  const [companyResearchTasks, setCompanyResearchTasks] = useState<Task[]>([
    { label: "Examine the company's mission, values, products, and services", completed: false },
    { label: 'Research on recent news, press releases, and financial reports', completed: false },
    { label: 'Investigate company culture, environment, and employee reviews', completed: false },
  ]);

  const [jobRoleTasks, setJobRoleTasks] = useState<Task[]>([
    { label: 'Analyze the job description for key responsibilities and skills', completed: false },
    { label: 'Match your skills to job requirements with specific examples', completed: false },
    { label: 'Investigate typical tasks, tools, and challenges of the role', completed: false },
  ]);

  const [technicalInterviewTasks, setTechnicalInterviewTasks] = useState<Task[]>([
    { label: 'Practice coding problems on LeetCode, HackerRank, or Codeforces', completed: false },
    { label: 'Review data structures, algorithms, and common interview questions', completed: false },
    { label: 'Conduct mock coding interviews with peers or online tools', completed: false },
  ]);

  const handleCheckboxChange = (taskList: Task[], setTaskList: React.Dispatch<React.SetStateAction<Task[]>>, index: number) => {
    const newTasks = [...taskList];
    newTasks[index].completed = !newTasks[index].completed;
    setTaskList(newTasks);
  };

  return (
    <section className='min-h-screen bg-white overflow-hidden'>
      <div className='flex'>        
        <WebBar/>

        <div className='flex-grow flex flex-col py-16 ml-[280px]'>
          
          <div className='flex items-center mb-8'>
            <div className='bg-gradient-to-r from-[#ff3131] to-[#ff914d] rounded-full py-2 px-8 mr-[108px] w-[700px]'>
              <h1 className='text-white text-lg font-semibold font-abeezee'>
                INTERVIEW PREPARATION
              </h1>
            </div>
          </div>

          
          <div className='space-y-6 w-full px-20 mx-auto'>
            <div>
              <div className='flex flex-row'>
                <Image src={mileStone} alt="mil" className="h-20 w-20"/>
                <h2 className='section-headings'>RESEARCH THE COMPANY</h2>
              </div>
              <ul className='ul-styles'>
                {companyResearchTasks.map((task, index) => (
                  <li key={index} className='ul-text'>
                    <input
                      type='checkbox'
                      checked={task.completed}
                      className='checkbox-styles'
                      onChange={() => handleCheckboxChange(companyResearchTasks, setCompanyResearchTasks, index)}
                    /> {task.label}
                  </li>
                ))}
              </ul>
            </div>

            <div>
            <div className='flex flex-row'>
                <Image src={mileStone} alt="mil" className="h-20 w-20"/>
                <h2 className='section-headings'>JOB ROLE</h2>
              </div>
              <ul className='ul-styles'>
                {jobRoleTasks.map((task, index) => (
                  <li key={index} className='ul-text'>
                    <input
                      type='checkbox'
                      checked={task.completed}
                      className='checkbox-styles'
                      onChange={() => handleCheckboxChange(jobRoleTasks, setJobRoleTasks, index)}
                    /> {task.label}
                  </li>
                ))}
              </ul>
            </div>

            <div>
            <div className='flex flex-row'>
                <Image src={mileStone} alt="mil" className="h-20 w-20"/>
                <h2 className='section-headings'>TECHNICAL INTERVIEWS</h2>
              </div>
              <ul className='ul-styles'>
                {technicalInterviewTasks.map((task, index) => (
                  <li key={index} className='ul-text'>
                    <input
                      type='checkbox'
                      checked={task.completed}
                      className='checkbox-styles'
                      onChange={() => handleCheckboxChange(technicalInterviewTasks, setTechnicalInterviewTasks, index)}
                    /> {task.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        
        <div className='flex flex-col items-center justify-center pr-20'>
          <div className='bg-white border-2 border-[#ff3131] rounded-3xl p-6 mt-6 text-center w-[250px] h-[400px]'>
            <h2 className='font-abeezee font-extrabold text-base py-4 underline text-[#ff3131] '>INTERVIEW TIPS</h2>
            <p className='text-sm font-semibold font-montserrat py-4'>Key points to remember before your interview : </p>
            <p className='text-sm font-montserrat font-semibold text-black py-4'>Prepare for problem solving on the spot!</p>
            <p className='text-sm font-montserrat font-semibold text-black py-4'>Map your skills to the Job Description!</p>
            <p className='text-sm font-montserrat font-semibold text-black py-4'>Practice common questions!</p>
          </div>
        </div>
      </div>
    </section>
  );
};


export default InterviewPreparation;
