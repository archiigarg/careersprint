"use client";
import React, { useState } from 'react';
import mileStone from "@/public/milestoneicon.svg";
import Image from 'next/image';
import { WebBar } from '../WebBar';
import YouTubeSidebar from '@/app/components/YoutubeSideBar';

interface Task {
  label: string;
  completed: boolean;
}

const Technical: React.FC = () => {
  const [programmingTasks, setProgrammingTasks] = useState<Task[]>([
    { label: 'Choose a primary programming language', completed: false },
    { label: 'A beginner to advanced course on your chosen language', completed: false },
    { label: 'Solve 100+ coding problems on platforms like LeetCode', completed: false },
  ]);

  const [webDevTasks, setWebDevTasks] = useState<Task[]>([
    { label: 'Master HTML, CSS, and JavaScript fundamentals', completed: false },
    { label: 'Create a basic portfolio site or web application', completed: false },
    { label: 'Study front-end/back-end frameworks', completed: false },
  ]);

  const [dsaTasks, setDsaTasks] = useState<Task[]>([
    { label: 'Master data structures from basics to trees and graphs', completed: false },
    { label: 'Study the basics of algorithms from sorts to recursion', completed: false },
    { label: 'Solve 50+ DSA problems on LeetCode', completed: false },
    { label: 'Join coding contests to boost problem-solving speed', completed: false },
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
                TECHNICAL SKILLS
              </h1>
            </div>
          </div>

          
          <div className='space-y-6 w-full px-20 mx-auto'>
            <div>
              <div className='flex flex-row'>
                <Image src={mileStone} alt="mil" className="h-20 w-20"/>
                <h2 className='section-headings'>PROGRAMMING PROFICIENCY</h2>
              </div>
              <ul className='ul-styles'>
                {programmingTasks.map((task, index) => (
                  <li key={index} className='ul-text'>
                    <input
                      type='checkbox'
                      checked={task.completed}
                      className='checkbox-styles'
                      onChange={() => handleCheckboxChange(programmingTasks, setProgrammingTasks, index)}
                    /> {task.label}
                  </li>
                ))}
              </ul>
            </div>

            <div>
            <div className='flex flex-row'>
                <Image src={mileStone} alt="mil" className="h-20 w-20"/>
                <h2 className='section-headings'>WEB DEVELOPMENT BASICS</h2>
              </div>
              <ul className='ul-styles'>
                {webDevTasks.map((task, index) => (
                  <li key={index} className='ul-text'>
                    <input
                      type='checkbox'
                      checked={task.completed}
                      className='checkbox-styles'
                      onChange={() => handleCheckboxChange(webDevTasks, setWebDevTasks, index)}
                    /> {task.label}
                  </li>
                ))}
              </ul>
            </div>

            <div>
            <div className='flex flex-row'>
                <Image src={mileStone} alt="mil" className="h-20 w-20"/>
                <h2 className='section-headings'>DATA STRUCTURES AND ALGORITHMS (DSA)</h2>
              </div>
              <ul className='ul-styles'>
                {dsaTasks.map((task, index) => (
                  <li key={index} className='ul-text'>
                    <input
                      type='checkbox'
                      checked={task.completed}
                      className='checkbox-styles'
                      onChange={() => handleCheckboxChange(dsaTasks, setDsaTasks, index)}
                    /> {task.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center justify-center '>
          
          
            <YouTubeSidebar />
          </div>
        
      </div>
    </section>
  );
};

export default Technical;