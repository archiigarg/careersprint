"use client";
import React, { useState } from 'react';

import { WebBar } from '../WebBar';
import TasksCard from '@/app/components/TasksCard';


interface Task {
  label: string;
  completed: boolean;
  time: string;
}

const ResumeBuilding: React.FC = () => {
  const [contentTasks] = useState<Task[]>([
    { label: "Tailor your resume to each job by emphasizing relevance", completed: false, time: "09:00" },
    { label: "Employ a clear format: Contact, Summary, Skills, Experience", completed: false, time: "10:00" },
    { label: "Craft a summary highlighting career goals and your value", completed: false, time: "11:00" },
    { label: "Use industry-specific keywords to navigate ATS effectively", completed: false, time: "12:00" },
    { label: "Enumerate both hard and soft skills, emphasizing those relevant", completed: false, time: "13:00" },
    { label: "Use reverse chronological order, listing recent experiences first", completed: false, time: "14:00" },
    { label: "Include relevant educational qualifications and job-specific training", completed: false, time: "15:00" },
  ]);
  
  const [designTasks] = useState<Task[]>([
    { label: "Use consistent fonts, sizes, and spacing; choose professional layouts", completed: false, time: "10:30" },
    { label: "Use a professional, clean, readable, and ATS-friendly resume format", completed: false, time: "11:30" },
    { label: "For creative roles, add icons without distracting from content", completed: false, time: "14:30" },
    { label: "Submit your resume in PDF format to preserve consistent formatting", completed: false, time: "16:00" },
  ]);
  

  return (
    <section className='min-h-screen bg-white overflow-hidden'>
      
        <WebBar/>

        <TasksCard task={contentTasks} name="Content To Add"/>
        <TasksCard task={designTasks} name="Design Tips"/>

      
    </section>
  );
};

export default ResumeBuilding;
