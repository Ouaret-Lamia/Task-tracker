import { columns, type task } from "@/components/columns"
import { DataTable } from "@/components/TasksTable"
import { Button } from "@/components/ui/button";

// async function getData(): Promise<Payment[]> {
//     // Fetch data from your API here.
//     return [
//       {
//         id: "728ed52f",
//         amount: 100,
//         status: "pending",
//         email: "m@example.com",
//       },
//       // ...
//     ]
//   }

// To do: Fetch my metadata
const data: task[] = [
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
 
    return (
        <div>
            <div className="flex justify-between items-end pr-5">
                <h2 className="text-4xl font-semibold text-zinc-500">My tasks</h2>
                <Button className="cursor-pointer">Add New Task</Button>
            </div>

            <div className="py-7">
                <DataTable columns={columns} data={data} />
            </div>
        </div>
    )
}

export default Tasks