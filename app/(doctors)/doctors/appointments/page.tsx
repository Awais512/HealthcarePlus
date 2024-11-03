"use client";
import React from "react";
import { Calendar, Plus, Search, Filter } from "lucide-react";

const AppointmentsPage = () => {
  // Sample appointments data
  const appointments = [
    {
      id: 1,
      patientName: "John Doe",
      date: "2024-03-04",
      time: "09:00 AM",
      type: "Check-up",
      status: "Confirmed",
    },
    {
      id: 2,
      patientName: "Jane Smith",
      date: "2024-03-04",
      time: "10:30 AM",
      type: "Follow-up",
      status: "Pending",
    },
    {
      id: 3,
      patientName: "Robert Johnson",
      date: "2024-03-04",
      time: "02:00 PM",
      type: "Consultation",
      status: "Completed",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            Appointments
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Manage and schedule patient appointments
          </p>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Plus className="h-5 w-5" />
          <span>New Appointment</span>
        </button>
      </div>

      {/* Search and Filter Section */}
      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
          <input
            type="text"
            placeholder="Search appointments..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 
            bg-white dark:bg-gray-800/50 backdrop-blur-md
            text-gray-800 dark:text-gray-200
            placeholder-gray-500 dark:placeholder-gray-400"
          />
        </div>
        <button
          className="flex items-center space-x-2 px-4 py-2 
          border border-gray-200 dark:border-gray-700 rounded-lg 
          bg-white dark:bg-gray-800/50 backdrop-blur-md
          text-gray-700 dark:text-gray-300"
        >
          <Filter className="h-5 w-5" />
          <span>Filter</span>
        </button>
        <button
          className="flex items-center space-x-2 px-4 py-2 
          border border-gray-200 dark:border-gray-700 rounded-lg 
          bg-white dark:bg-gray-800/50 backdrop-blur-md
          text-gray-700 dark:text-gray-300"
        >
          <Calendar className="h-5 w-5" />
          <span>Date</span>
        </button>
      </div>

      {/* Appointments Table */}
      <div className="bg-white dark:bg-gray-800/50 backdrop-blur-md rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <th className="text-left p-4 text-gray-700 dark:text-gray-300 font-semibold">
                Patient Name
              </th>
              <th className="text-left p-4 text-gray-700 dark:text-gray-300 font-semibold">
                Date
              </th>
              <th className="text-left p-4 text-gray-700 dark:text-gray-300 font-semibold">
                Time
              </th>
              <th className="text-left p-4 text-gray-700 dark:text-gray-300 font-semibold">
                Type
              </th>
              <th className="text-left p-4 text-gray-700 dark:text-gray-300 font-semibold">
                Status
              </th>
              <th className="text-left p-4 text-gray-700 dark:text-gray-300 font-semibold">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr
                key={appointment.id}
                className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50"
              >
                <td className="p-4 text-gray-800 dark:text-gray-200">
                  {appointment.patientName}
                </td>
                <td className="p-4 text-gray-800 dark:text-gray-200">
                  {appointment.date}
                </td>
                <td className="p-4 text-gray-800 dark:text-gray-200">
                  {appointment.time}
                </td>
                <td className="p-4 text-gray-800 dark:text-gray-200">
                  {appointment.type}
                </td>
                <td className="p-4">
                  <span
                    className={`px-2 py-1 rounded-full text-sm
                    ${
                      appointment.status === "Confirmed"
                        ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200"
                        : appointment.status === "Pending"
                        ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200"
                        : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200"
                    }`}
                  >
                    {appointment.status}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 text-sm text-blue-600 dark:text-blue-400 hover:underline">
                      Edit
                    </button>
                    <button className="px-3 py-1 text-sm text-red-600 dark:text-red-400 hover:underline">
                      Cancel
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Showing 1 to 3 of 3 results
        </p>
        <div className="flex space-x-2">
          <button
            className="px-4 py-2 border border-gray-200 dark:border-gray-700 
            rounded-lg bg-white dark:bg-gray-800/50 backdrop-blur-md
            text-gray-700 dark:text-gray-300"
          >
            Previous
          </button>
          <button
            className="px-4 py-2 border border-gray-200 dark:border-gray-700 
            rounded-lg bg-white dark:bg-gray-800/50 backdrop-blur-md
            text-gray-700 dark:text-gray-300"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentsPage;
