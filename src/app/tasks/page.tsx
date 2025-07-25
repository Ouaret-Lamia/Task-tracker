import AddTaskSheet from "@/components/AddTaskSheet";
import { columns, type task } from "@/components/columns";
import { DataTable } from "@/components/TasksTable";
import { useEffect, useState } from "react";


const Tasks = () => {
  const [data, setData] = useState<task[]>([]);

  const fetchData = () => {
    const tasks = []
    for (let i=0; i<localStorage.length; i++) {
      const key = localStorage.key(i)
      if(key && key.startsWith("task")) {
        const taskData = localStorage.getItem(key)
        if (taskData) {
          tasks.push(JSON.parse(taskData))
        }
      }
    }
    setData(tasks)
  }

  const deleteData = (key: string) => {
    localStorage.removeItem(`task${key}`);
    fetchData();
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <div className="flex justify-between items-end pr-5">
        <h2 className="text-4xl font-semibold text-zinc-500">My tasks</h2>
        <AddTaskSheet />
      </div>

      <div className="py-7">
        <DataTable columns={columns(deleteData)} data={data} />
      </div>
    </div>
  );
};

export default Tasks;
