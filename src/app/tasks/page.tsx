import AddTaskSheet from "@/components/AddTaskSheet";
import { columns, type task } from "@/components/columns";
import { DataTable } from "@/components/TasksTable";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

// To do: Fetch my metadata
const tasks: task[] = [
  {
    id: "1",
    title: "Complete project documentation",
    status: "Done",
    deadline: new Date(2025, 6, 20),
    priority: "High",
  },
  {
    id: "2",
    title: "Implement new feature in the app",
    status: "In Progress",
    deadline: new Date(2025, 6, 29),
    priority: "Medium",
  },
  {
    id: "3",
    title: "Fix bugs reported by QA team",
    status: "In Queue",
    deadline: new Date(2025, 7, 2),
    priority: "Low",
  },
];

const Tasks = () => {
  // const data = getData()
  const [data, setData] = useState<task[]>(tasks);

  // const handleAddTask = () => {
  //   const newTask: task = {
  //     id: String(Date.now()),
  //     title: "New Task",
  //     status: "Done",
  //     deadline: new Date(2025, 6, 30),
  //     priority: "High",
  //   };

  //   setData((prev) => [...prev, newTask]);
  // };

  return (
    <div>
      <div className="flex justify-between items-end pr-5">
        <h2 className="text-4xl font-semibold text-zinc-500">My tasks</h2>
        <AddTaskSheet />
      </div>

      <div className="py-7">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default Tasks;
