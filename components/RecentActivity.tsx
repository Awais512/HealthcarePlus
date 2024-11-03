import React from "react";
import { Calendar, Users, File, Settings } from "lucide-react";

const RecentActivity = () => {
  // Activity data for recent activity section
  const recentActivities = [
    {
      title: "New patient registration",
      time: "2 hours ago",
      Icon: Users,
    },
    {
      title: "Appointment completed",
      time: "3 hours ago",
      Icon: Calendar,
    },
    {
      title: "Medical record updated",
      time: "5 hours ago",
      Icon: File,
    },
  ];

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
        Recent Activity
      </h2>
      <div className="backdrop-blur-md bg-white/50 dark:bg-gray-800/50 rounded-xl shadow-sm border border-white/20 dark:border-gray-700/30 p-6">
        <div className="space-y-4">
          {recentActivities.map((activity, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-3 border-b border-gray-200/50 dark:border-gray-700/50 last:border-b-0"
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 backdrop-blur-sm bg-gray-100/50 dark:bg-gray-700/50 rounded-full flex items-center justify-center">
                  <activity.Icon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-gray-100">
                    {activity.title}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {activity.time}
                  </p>
                </div>
              </div>
              <button className="text-blue-600 dark:text-blue-400 text-sm hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200">
                View Details
              </button>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-6 text-center">
          <button
            className="px-4 py-2 rounded-lg
                  backdrop-blur-sm
                  bg-blue-500/10 dark:bg-blue-500/20
                  hover:bg-blue-500/20 dark:hover:bg-blue-500/30
                  text-blue-600 dark:text-blue-400
                  transition-colors duration-200"
          >
            View All Activity
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;
