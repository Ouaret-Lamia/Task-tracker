import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Pencil } from "lucide-react";
import { Button } from "./ui/button";
import type { task } from "./columns";
import { buttonVariants } from "@/lib/buttonVariants";

const ModifyTaskSheet = ({ taskData }: { taskData: task }) => {
  const handleModifyTask = () => {
    localStorage.setItem(`task${taskData.id}`, JSON.stringify(taskData));
  };

  return (
    <Sheet>
      <SheetTrigger
        className={buttonVariants({
          variant: "ghost",
          className: "text-primary",
        })}
      >
        <Pencil />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-2xl text-center py-5">
            Modify task
          </SheetTitle>
          <SheetDescription>
            <form className="space-y-5" onSubmit={() => handleModifyTask()}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Task Title
                  </label>
                  <input
                    type="text"
                    className="p-3 mt-2 block w-full rounded border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                    placeholder="Enter task title"
                    defaultValue={taskData.title}
                    onChange={(e) => (taskData.title = e.target.value)}
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
                    defaultValue={new Date(taskData.deadline).toISOString().split("T")[0]}
                    onChange={(e) => (taskData.deadline = new Date(e.target.value))}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Priority
                  </label>
                  <select
                    className="p-3 mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                    defaultValue={taskData.priority}
                    onChange={(e) =>
                      ((taskData.priority as string) = e.target.value)
                    }
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
                    defaultValue={taskData.status}
                    onChange={(e) =>
                      ((taskData.status as string) = e.target.value)
                    }
                  >
                    <option value="Done">Done</option>
                    <option value="In Progress">In Progress</option>
                    <option value="In Queue">In Queue</option>
                  </select>
                </div>
              </div>
              <Button type="submit" className="mt-4 w-full">
                Modify Task
              </Button>
            </form>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default ModifyTaskSheet;
