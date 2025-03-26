import React from 'react';
import {useState} from 'react';
import AddTask from './AddTask';
interface Task {
    label: string;
    completed: boolean;
    time: string;
  }
export default function TasksCard({task,name,id}:{task:Task[];name:string,id:string}) {
    const [tasks, setTasks] = useState<Task[]>(task);
    
  const handleCheckboxChange = (index: number) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };
  return (
    <div className=" flex flex-col py-10 ml-24 px-10 w-[72%]">
        <div className="bg-gradient-to-r from-[#ff3131] to-[#ff914d] rounded-full py-2 px-8 w-[400px] mb-8">
          <h1 className="text-white text-lg font-semibold">{name}</h1>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full">
          <AddTask task={tasks} setTasks={setTasks} categoryId={id} />
          <ul className="space-y-4">
            {tasks.map((tasks, index) => (
              <li key={index} className="flex items-center justify-between bg-orange-100 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={tasks.completed}
                    onChange={() => handleCheckboxChange(index)}
                    className="h-6 w-6 text-orange-500 border-gray-300 rounded-full focus:ring-orange-500"
                  />
                  <span className={`text-lg ${tasks.completed ? "line-through text-gray-500" : "text-gray-900"}`}>
                    {tasks.label}
                  </span>
                </div>
                <span className="text-gray-700 font-semibold">{tasks.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
  )
}
