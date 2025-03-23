"use client";
import { WebBar } from '../WebBar';
import React, { useState } from 'react';
import Image from 'next/image';
import mileStone from "@/public/milestoneicon.svg";
interface Task {
  label: string;
  completed: boolean;
}

const SoftSkills: React.FC = () => {
  const [communicationTasks, setCommunicationTasks] = useState<Task[]>([
    { label: 'Engage in group discussions to enhance verbal communication', completed: false },
    { label: 'Develop a concise personal pitch highlighting your background', completed: false },
    { label: 'Enroll in an online course or workshop on business communication', completed: false },
  ]);

  const [teamworkTasks, setTeamworkTasks] = useState<Task[]>([
    { label: 'Participate in a group project or hackathon for diverse teamwork', completed: false },
    { label: 'Practice constructive feedback exchange within a collaborative environment', completed: false },
    { label: 'Utilize collaboration tools to effectively coordinate and manage projects', completed: false },
  ]);

  const [problemSolvingTasks, setProblemSolvingTasks] = useState<Task[]>([
    { label: 'Address real-world issues by identifying, brainstorming solutions', completed: false },
    { label: 'Engage in puzzles or games to enhance logical problem solving skills', completed: false },
    { label: 'Reflect on a past challenge and document your approach and solution', completed: false },
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
                SOFT SKILLS
              </h1>
            </div>
          </div>

          
          <div className='space-y-6 w-full px-20 mx-auto'>
            <div>
              <div className='flex flex-row'>
                <Image src={mileStone} alt="mil" className="h-20 w-20"/>
                <h2 className='section-headings'>COMMUNICATION SKILLS</h2>
              </div>
              <ul className='ul-styles'>
                {communicationTasks.map((task, index) => (
                  <li key={index} className='ul-text'>
                    <input
                      type='checkbox'
                      checked={task.completed}
                      className='checkbox-styles'
                      onChange={() => handleCheckboxChange(communicationTasks, setCommunicationTasks, index)}
                    /> {task.label}
                  </li>
                ))}
              </ul>
            </div>

            <div>
            <div className='flex flex-row'>
                <Image src={mileStone} alt="mil" className="h-20 w-20"/>
                <h2 className='section-headings'>TEAMWORK AND COLLABORATION</h2>
              </div>
              <ul className='ul-styles'>
                {teamworkTasks.map((task, index) => (
                  <li key={index} className='ul-text'>
                    <input
                      type='checkbox'
                      checked={task.completed}
                      className='checkbox-styles'
                      onChange={() => handleCheckboxChange(teamworkTasks, setTeamworkTasks, index)}
                    /> {task.label}
                  </li>
                ))}
              </ul>
            </div>

            <div>
            <div className='flex flex-row'>
                <Image src={mileStone} alt="mil" className="h-20 w-20"/>
                <h2 className='section-headings'>PROBLEM SOLVING AND CRITICAL THINKING</h2>
              </div>
              <ul className='ul-styles'>
                {problemSolvingTasks.map((task, index) => (
                  <li key={index} className='ul-text'>
                    <input
                      type='checkbox'
                      checked={task.completed}
                      className='checkbox-styles'
                      onChange={() => handleCheckboxChange(problemSolvingTasks, setProblemSolvingTasks, index)}
                    /> {task.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default SoftSkills;
