"use client";
import React, { useState } from "react";

import { WebBar } from "../WebBar";
import TasksCard from "@/app/components/TasksCard";

interface Task {
  label: string;
  completed: boolean;
  time: string;
}

const Certifications: React.FC = () => {
  const [courseSelectionTasks] = useState<Task[]>([
    { label: "Research certifications relevant to your industry", completed: false, time: "09:00" },
    { label: "Compare certification credibility and recognition", completed: false, time: "10:30" },
    { label: "Check course syllabus and prerequisites", completed: false, time: "12:00" },
  ]);

  const [preparationTasks] = useState<Task[]>([
    { label: "Create a study plan with a structured timeline", completed: false, time: "14:00" },
    { label: "Practice with sample tests and previous question papers", completed: false, time: "15:30" },
    { label: "Join forums or groups for discussion and insights", completed: false, time: "17:00" },
  ]);

  const [examTasks] = useState<Task[]>([
    { label: "Schedule your exam and understand the format", completed: false, time: "09:30" },
    { label: "Revise key concepts and take mock tests", completed: false, time: "11:00" },
    { label: "Ensure all necessary documents and IDs are ready", completed: false, time: "13:00" },
  ]);

  return (
    <section className="min-h-screen bg-white overflow-hidden">
      <WebBar />

      <TasksCard task={courseSelectionTasks} name="Course Selection" id="12" />
      <TasksCard task={preparationTasks} name="Preparation" id="13"/>
      <TasksCard task={examTasks} name="Exam Readiness" id="14" />
    </section>
  );
};

export default Certifications;
