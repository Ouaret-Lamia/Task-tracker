"use client"

import { cn } from "@/lib/utils";
import type { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Flame, Leaf, X, Zap } from "lucide-react";
import ModifyTaskSheet from "./ModifyTaskSheet";
import { Button } from "./ui/button";

export type task = {
    id: string,
    title: string;
    status: "Done" | "In Progress" | "In Queue",
    deadline: Date,
    priority: "High" | "Medium" | "Low",
}

export const columns = (deleteData: (key: string) => void) : ColumnDef<task>[] => [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
        const status = row.getValue("status") as string
        return (
            <span className={cn("rounded-full px-3 py-1", {
                "bg-emerald-100 text-emerald-500": status === "Done",
                "bg-purple-100 text-purple-500": status === "In Progress",
                "bg-orange-100 text-orange-500": status === "In Queue",
            })}>
                {status}
            </span>
        )
    }
  },
  {
    accessorKey: "deadline",
    header: ({column}) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Deadline
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const date = new Date(row.getValue("deadline"));
      return date.toLocaleDateString();
    }
  },
  {
    accessorKey: "priority",
    header: "Priority",
    cell: ({ row }) => {
        const priority = row.getValue("priority") as string
        const icon = priority === "High" ? <Flame /> : priority === "Medium" ? <Zap /> : <Leaf />
        return (
            <span className="flex items-center gap-2">
                <span className={cn("flex items-center justify-center rounded-full p-1 w-5 h-5", {
                    "bg-red-100 text-red-500": priority === "High",
                    "bg-yellow-100 text-yellow-500": priority === "Medium",
                    "bg-green-100 text-green-500": priority === "Low",
                })}>
                {icon}
                </span>
                 {priority}
            </span>
        )
    }
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const id = row.original.id
      return (
        <div className="flex items-center space-x-2">
          <ModifyTaskSheet taskData={row.original} />
          <Button variant={"ghost"} className="text-red-500 hover:text-red-700" onClick={() => {deleteData(id)}}>
            <X />
          </Button>
        </div>
      );
  }
  }
]