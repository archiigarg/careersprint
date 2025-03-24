"use client";
import React from "react";

import { WebBar } from "../WebBar";
import YouTubeSidebar from "@/app/components/YoutubeSideBar";

import TasksCard from "@/app/components/TasksCard";
interface Task {
  label: string;
  completed: boolean;
  time: string;
}
const task: Task[] = [
  { label: "Morning Workout", completed: false, time: "07:00" },
  { label: "Team Meeting", completed: true, time: "10:30" },
  { label: "Code Review", completed: false, time: "14:00" },
  { label: "Grocery Shopping", completed: false, time: "18:00" },
];

const Technical: React.FC = () => {
  return (
    <section className="min-h-screen bg-white flex">
      <WebBar />
      <TasksCard task={task} name="Technical Skills"/>
      <YouTubeSidebar queries={["technical skills"]} />
    </section>
  );
};

export default Technical;
