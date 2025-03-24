import React, { useState } from "react";
interface Task {
  label: string;
  completed: boolean;
  time: string;
}

export default function AddTask({
  task,
  setTasks,
}: {
  task: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}) {
  const [newTask, setNewTask] = useState("");
  const [newTime, setNewTime] = useState("");
  const addTask = () => {
    if (!newTask.trim() || !newTime.trim()) return;

    const isTimeTaken = task.some((task) => task.time === newTime);

    if (isTimeTaken) {
      alert(
        "A task with this time already exists. Please choose a different time."
      );
      return;
    }

    setTasks([...task, { label: newTask, completed: false, time: newTime }]);
    setNewTask("");
    setNewTime("");
  };

  return (
    <div className="mb-4 flex space-x-4">
      <input
        type="text"
        placeholder="New Task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className="p-2 border rounded w-full"
      />
      <input
        type="time"
        value={newTime}
        onChange={(e) => setNewTime(e.target.value)}
        className="p-2 border rounded"
      />
      <button
        onClick={addTask}
        className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
      >
        Add
      </button>
    </div>
  );
}
