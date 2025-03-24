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
    { label: "Attend an industry webinar or networking event", completed: false, time: "09:00" },
    { label: "Reach out to a professional on LinkedIn with a personalized message", completed: false, time: "11:00" },
    { label: "Join and participate in an online professional group or forum", completed: false, time: "13:30" },
    { label: "Schedule a virtual coffee chat with a mentor or industry expert", completed: false, time: "15:00" },
    { label: "Practice your self-introduction or elevator pitch", completed: false, time: "16:30" },
    { label: "Engage in a networking conversation with a new contact", completed: false, time: "18:00" },
    { label: "Follow up with a past connection via email or message", completed: false, time: "19:30" },
  ];
  

const Technical: React.FC = () => {
  return (
    <section className="min-h-screen bg-white flex">
      <WebBar />
      <TasksCard task={task} name="Networking Skills"/>
      
    </section>
  );
};

export default Technical;
