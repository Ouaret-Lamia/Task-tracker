import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import type { task } from "./columns";
import { Button, buttonVariants } from "./ui/button";

const AddTaskSheet = () => {
  const newTask: task = {
    id: String(Date.now()),
    title: "",
    status: "In Queue",
    deadline: new Date(),
    priority: "Low",
  };

  const handleAddTask = () => {
    localStorage.setItem(`task${newTask.id}`, JSON.stringify(newTask));
  };

  return (
    <Sheet>
      <SheetTrigger className={buttonVariants()}>Add new task</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-2xl text-center py-5">
            Add New Task
          </SheetTitle>
          <SheetDescription>
            <form className="space-y-5" onSubmit={() => handleAddTask()}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Task Title
                  </label>
                  <input
                    type="text"
                    className="p-3 mt-2 block w-full rounded border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                    placeholder="Enter task title"
                    onChange={(e) => (newTask.title = e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Deadline
                  </label>
                  <input
                    type="date"
                    className="p-3 mt-2 block w-full rounded border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                    defaultValue={new Date().toISOString().split("T")[0]}
                    onChange={(e) => (newTask.deadline = new Date(e.target.value))}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Priority
                  </label>
                  <select
                    className="p-3 mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                    defaultValue={"Low"}
                    onChange={(e) => ((newTask.priority as string) = e.target.value )}
                  >
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Status
                  </label>
                  <select
                    className="p-3 mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                    defaultValue={"In Queue"}
                    onChange={(e) => ((newTask.status as string) = e.target.value )}
                  >
                    <option value="Done">Done</option>
                    <option value="In Progress">In Progress</option>
                    <option value="In Queue">In Queue</option>
                  </select>
                </div>
              </div>
              <Button type="submit" className="mt-4 w-full">
                Add Task
              </Button>
            </form>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default AddTaskSheet;
