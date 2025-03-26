"use client";
import React, { useState } from "react";
import { WebBar } from "../WebBar";
import YouTubeSidebar from "@/app/components/YoutubeSideBar";
import TasksCard from "@/app/components/TasksCard";

interface Task {
  label: string;
  completed: boolean;
  time: string;
}

const codingTasks: Task[] = [
  { label: "Complete a LeetCode medium difficulty coding challenge", completed: false, time: "09:00" },
  { label: "Practice data structures: implement a linked list in your preferred language", completed: false, time: "11:00" },
  { label: "Solve an algorithm problem using dynamic programming", completed: false, time: "14:00" },
];

const learningTasks: Task[] = [
  { label: "Watch an advanced tutorial on system design", completed: false, time: "10:00" },
  { label: "Read a chapter from a technical book on advanced programming concepts", completed: false, time: "13:00" },
  { label: "Take an online course module on cloud computing", completed: false, time: "16:00" },
];

const projectTasks: Task[] = [
  { label: "Start a personal project using a new technology framework", completed: false, time: "08:30" },
  { label: "Contribute to an open-source project on GitHub", completed: false, time: "12:30" },
  { label: "Document and refactor an existing personal coding project", completed: false, time: "15:00" },
];

const technicalSkillsTasks: Task[] = [
  { label: "Practice debugging complex code scenarios", completed: false, time: "07:30" },
  { label: "Learn and implement a new design pattern", completed: false, time: "11:30" },
  { label: "Explore performance optimization techniques", completed: false, time: "15:30" },
];

const Technical: React.FC = () => {
  const [coding] = useState<Task[]>(codingTasks);
  const [learning] = useState<Task[]>(learningTasks);
  const [projects] = useState<Task[]>(projectTasks);
  const [technicalSkills] = useState<Task[]>(technicalSkillsTasks);

  return (
    <section className="min-h-screen bg-white flex">
      <WebBar />
      <div className="flex-grow flex flex-col">
        <TasksCard task={coding} name="Coding Challenges" id="1"/>
        <TasksCard task={learning} name="Continuous Learning" id="2" />
        <TasksCard task={projects} name="Project Development" id="3" />
        <TasksCard task={technicalSkills} name="Technical Skills Improvement" id="4" />
      </div>
      <YouTubeSidebar queries={["technical skills development"]}  />
    </section>
  );
};

export default Technical;