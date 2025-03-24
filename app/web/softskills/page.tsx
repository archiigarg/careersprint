"use client";
import { WebBar } from "../WebBar";
import React, { useState } from "react";


import YouTubeSidebar from "@/app/components/YoutubeSideBar";
import TasksCard from "@/app/components/TasksCard";
interface Task {
  label: string;
  completed: boolean;
  time: string;
}
const comms: Task[] = [
  { label: "Engage in group discussions to enhance verbal communication", completed: false, time: "10:00" },
  { label: "Develop a concise personal pitch highlighting your background", completed: false, time: "11:00" },
  { label: "Enroll in an online course or workshop on business communication", completed: false, time: "14:00" },
];

const team:Task[]=[
  { label: "Participate in a group project or hackathon for diverse teamwork", completed: false, time: "09:30" },
  { label: "Practice constructive feedback exchange within a collaborative environment", completed: false, time: "13:00" },
  { label: "Utilize collaboration tools to effectively coordinate and manage projects", completed: false, time: "15:30" },
];

const prob:Task[]=[
  { label: "Address real-world issues by identifying, brainstorming solutions", completed: false, time: "08:00" },
  { label: "Engage in puzzles or games to enhance logical problem-solving skills", completed: false, time: "12:00" },
  { label: "Reflect on a past challenge and document your approach and solution", completed: false, time: "16:00" },
];

const SoftSkills: React.FC = () => {
  const [communicationTasks] = useState<Task[]>(comms);
  const [teamworkTasks] = useState<Task[]>(team);
  const [problemSolvingTasks] = useState<Task[]>(prob);
  
  return (
    <section className="min-h-screen bg-white ">
      <WebBar />
      <TasksCard task={communicationTasks} name="Communication Skills" />
      <TasksCard task={teamworkTasks} name="Teamwork Skills" />
      <TasksCard task={problemSolvingTasks} name="Problem Solving"/>
      <YouTubeSidebar queries={["soft skills"]} />
    </section>
  );
};

export default SoftSkills;
