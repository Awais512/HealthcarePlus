import React from "react";
import { Calendar, Users, File } from "lucide-react";

const StatsCard = () => {
  const statsCards = [
    { title: "Total Patients", value: "1,234", Icon: Users, color: "blue" },
    {
      title: "Today's Appointments",
      value: "28",
      Icon: Calendar,
      color: "green",
    },
    { title: "Pending Reports", value: "12", Icon: File, color: "yellow" },
  ];

  return (
    <>
      {statsCards.map((stat, index) => (
        <div
          key={index}
          className="backdrop-blur-md bg-white/50 dark:bg-gray-800/50 p-6 rounded-xl shadow-sm border border-white/20 dark:border-gray-700/30 transition-colors duration-200"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {stat.title}
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {stat.value}
              </p>
            </div>
            <div
              className={`p-3 bg-${stat.color}-50/50 dark:bg-${stat.color}-900/30 rounded-lg`}
            >
              <stat.Icon
                className={`h-6 w-6 text-${stat.color}-600 dark:text-${stat.color}-400`}
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default StatsCard;
