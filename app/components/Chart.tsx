// DashboardCharts.jsx
"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

type Props = {
  darkMode: boolean;
};

const DashboardCharts = ({ darkMode }: Props) => {
  // Sample data for the line chart
  const patientTrendData = [
    { month: "Jan", patients: 850 },
    { month: "Feb", patients: 940 },
    { month: "Mar", patients: 1020 },
    { month: "Apr", patients: 980 },
    { month: "May", patients: 1100 },
    { month: "Jun", patients: 1234 },
  ];

  // Sample data for the pie chart
  const appointmentTypeData = [
    { name: "Check-up", value: 45 },
    { name: "Follow-up", value: 30 },
    { name: "Consultation", value: 15 },
    { name: "Emergency", value: 10 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
      {/* Patient Trend Chart */}
      <div className="backdrop-blur-md bg-white/50 dark:bg-gray-800/50 p-6 rounded-xl shadow-sm border border-white/20 dark:border-gray-700/30">
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Patient Growth Trend
        </h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={patientTrendData}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke={darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}
              />
              <XAxis
                dataKey="month"
                stroke={darkMode ? "#9CA3AF" : "#4B5563"}
              />
              <YAxis stroke={darkMode ? "#9CA3AF" : "#4B5563"} />
              <Tooltip
                contentStyle={{
                  backgroundColor: darkMode
                    ? "rgba(31,41,55,0.8)"
                    : "rgba(255,255,255,0.8)",
                  backdropFilter: "blur(8px)",
                  border: "none",
                  borderRadius: "0.5rem",
                  color: darkMode ? "#F3F4F6" : "#1F2937",
                }}
              />
              <Line
                type="monotone"
                dataKey="patients"
                stroke="#3B82F6"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Appointment Distribution Chart */}
      <div className="backdrop-blur-md bg-white/50 dark:bg-gray-800/50 p-6 rounded-xl shadow-sm border border-white/20 dark:border-gray-700/30">
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Appointment Distribution
        </h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={appointmentTypeData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
                label={({ name, percent }) =>
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
              >
                {appointmentTypeData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: darkMode
                    ? "rgba(31,41,55,0.8)"
                    : "rgba(255,255,255,0.8)",
                  backdropFilter: "blur(8px)",
                  border: "none",
                  borderRadius: "0.5rem",
                  color: darkMode ? "#F3F4F6" : "#1F2937",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DashboardCharts;
