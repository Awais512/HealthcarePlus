"use client";
import React from "react";
import { Calendar, Users, File } from "lucide-react";
import DashboardCharts from "@/components/Chart";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import RecentActivity from "@/components/RecentActivity";
import { useDarkMode } from "@/context/DarkmodeContext";

const DashboardLayout = () => {
  const { darkMode } = useDarkMode();

  // Card data for stats section
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Background Pattern */}
      <div className="fixed inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.1)_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] [background-size:20px_20px]" />
      </div>

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Area */}
      <div className="pt-[73px] flex h-screen">
        <Sidebar />
        <main className="ml-64 flex-1 p-8 overflow-y-auto h-[calc(100vh-73px)]">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          </div>

          {/* Charts Section */}
          <DashboardCharts />

          {/* Recent Activity Section */}
          <RecentActivity />

          <div className="h-8" />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
