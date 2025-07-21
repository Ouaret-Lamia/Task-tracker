import CalendarDash from "@/components/CalendarDash";
import { cn } from "@/lib/utils";
import { Check, ClockFading, SquareStack } from "lucide-react";
import { useEffect, useState } from "react";

interface Stats {
  icon: React.ReactNode;
  color: string;
  name: string;
  count: number;
}
export interface Deadlines {
  doneDates: Date[];
  progDates: Date[];
  queueDates: Date[];
}

const Dashboard = () => {
  let doneCount = 0;
  let progCount = 0;
  let queueCount = 0;

  const [deadlines, setDeadlines] = useState<Deadlines>({
    doneDates: [],
    progDates: [],
    queueDates: [],
  });

  const [stats, setStats] = useState<Stats[]>([]);

  useEffect(() => {
    setStats([]);
    doneCount = 0;
    progCount = 0;
    queueCount = 0;

    const doneDates: Date[] = [];
    const progDates: Date[] = [];
    const queueDates: Date[] = [];

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith("task")) {
        const taskData = localStorage.getItem(key);
        if (taskData) {
          const val = JSON.parse(taskData);
          const deadline = new Date(val.deadline);
          val.status === "Done"
            ? (doneCount++, doneDates.push(deadline))
            : val.status === "In Progress"
            ? (progCount++, progDates.push(deadline))
            : (queueCount++, queueDates.push(deadline));
        }
      }
    }

    setDeadlines({ doneDates, progDates, queueDates });

    setStats([
      {
        icon: <Check />,
        color: "bg-emerald-100 text-emerald-500",
        name: "Done",
        count: doneCount,
      },
      {
        icon: <ClockFading />,
        color: "bg-purple-100 text-purple-500",
        name: "In progress",
        count: progCount,
      },
      {
        icon: <SquareStack />,
        color: "bg-orange-100 text-orange-500",
        name: "In queue",
        count: queueCount,
      },
    ]);
  }, []);

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-3 gap-3">
      <div className="bg-gray-50 rounded-md p-5 border flex items-center justify-center gap-4">
        <div className="relative">
          <img
            referrerPolicy="no-referrer"
            className="rounded-full h-15 w-15"
            src="./pfp.png"
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
          <div className="flex flex-col items-center gap-1" key={stat.name}>
            <div className={cn("p-3 rounded-full", stat.color)}>
              {stat.icon}
            </div>
            <p className="text-zinc-500 font-semibold">{stat.name}</p>
            <h3 className="text-3xl font-semibold">{stat.count}</h3>
          </div>
        ))}
      </div>

      <div className="col-span-3 bg-gray-50 rounded-md border py-6 flex flex-col items-center gap-6">
        <h2 className="text-4xl font-semibold text-zinc-500">My deadlines</h2>
        <CalendarDash
          doneDates={deadlines.doneDates}
          progDates={deadlines.progDates}
          queueDates={deadlines.queueDates}
        />
      </div>
    </div>
  );
};

export default Dashboard;
