import { cn } from "@/lib/utils";
import { Check, ClockFading, SquareStack } from "lucide-react";

// To do: use real MetaData (with count)
const stats = [
  {
    icon: <Check />,
    color: "bg-emerald-100 text-emerald-500",
    name: "Done",
    count: 12,
  },
  {
    icon: <ClockFading />,
    color: "bg-purple-100 text-purple-500",
    name: "In progress",
    count: 3,
  },
  {
    icon: <SquareStack />,
    color: "bg-orange-100 text-orange-500",
    name: "In queue",
    count: 8,
  },
];

const Dashboard = () => {
  return (
    <div className="grid grid-cols-3 gap-3">
      <div className="bg-gray-50 rounded-md p-5 border flex items-center gap-4">
        <div className="relative">
          <img
            referrerPolicy="no-referrer"
            className="rounded-full h-15 w-15"
            src="./vite.svg"
            alt="Your profile picture"
          />
        </div>

        <div>
          <h1 className="text-xl font-semibold">Lamia Ouaret</h1>
          <p className="text-sm text-zinc-500">ouaretlamia04@gmail.com</p>
        </div>
      </div>

      <div className="col-span-2 bg-gray-50 rounded-md py-10 border flex justify-around">
        {stats.map((stat) => (
          <div className="flex flex-col items-center gap-1">
            <div className={cn("p-3 rounded-full", stat.color)}>
              {stat.icon}
            </div>
            <p className="text-zinc-500 font-semibold">{stat.name}</p>
            <h3 className="text-3xl font-semibold">{stat.count}</h3>
          </div>
        ))}
      </div>

      {/* <div className="col-span-3 bg-gray-50 rounded-md border p-10">
        <CalendarDash />
      </div> */}
    </div>
  );
};

export default Dashboard;
