"use client";
import React, { useState } from 'react';

import { WebBar } from '../WebBar';
import TasksCard from '@/app/components/TasksCard';

interface Task {
  label: string;
  completed: boolean;
  time: string;
}

const InterviewPreparation: React.FC = () => {
  const [companyResearchTasks] = useState<Task[]>([
    { label: "Examine the company's mission, values, products, and services", completed: false, time: "09:00" },
    { label: "Research recent news, press releases, and financial reports", completed: false, time: "10:30" },
    { label: "Investigate company culture, environment, and employee reviews", completed: false, time: "12:00" },
  ]);

  const [jobRoleTasks] = useState<Task[]>([
    { label: "Analyze the job description for key responsibilities and skills", completed: false, time: "13:30" },
    { label: "Match your skills to job requirements with specific examples", completed: false, time: "15:00" },
    { label: "Investigate typical tasks, tools, and challenges of the role", completed: false, time: "16:30" },
  ]);

  const [technicalInterviewTasks] = useState<Task[]>([
    { label: "Practice coding problems on LeetCode, HackerRank, or Codeforces", completed: false, time: "10:00" },
    { label: "Review data structures, algorithms, and common interview questions", completed: false, time: "14:00" },
    { label: "Conduct mock coding interviews with peers or online tools", completed: false, time: "17:00" },
  ]);

  return (
    <section className="min-h-screen bg-white overflow-hidden">
      <WebBar />

      <TasksCard task={companyResearchTasks} name="Company Research" />
      <TasksCard task={jobRoleTasks} name="Job Role Understanding" />
      <TasksCard task={technicalInterviewTasks} name="Technical Interview Prep" />
    </section>
  );
};

export default InterviewPreparation;
