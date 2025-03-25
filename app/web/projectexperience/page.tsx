"use client";
import React from "react";

import { WebBar } from "../WebBar";
import TasksCard from "@/app/components/TasksCard";

interface Task {
  label: string;
  completed: boolean;
  time: string;
}

const projectTasks: Task[] = [
  { label: "Define clear objectives and scope for a new project", completed: false, time: "09:00" },
  { label: "Research similar projects for insights and best practices", completed: false, time: "10:30" },
  { label: "Develop a project timeline with milestones and deadlines", completed: false, time: "12:00" },
  { label: "Collaborate with a team or mentor for feedback and improvements", completed: false, time: "14:00" },
  { label: "Document your project process and key learnings", completed: false, time: "15:30" },
  { label: "Showcase your project on GitHub or a personal portfolio", completed: false, time: "17:00" },
  { label: "Prepare a short pitch or presentation for your project", completed: false, time: "18:30" },
];

const ProjectExperience: React.FC = () => {
  return (
    <section className="min-h-screen bg-white flex">
      <WebBar />
      <TasksCard task={projectTasks} name="Project Experience" />
    </section>
  );
};

export default ProjectExperience;
