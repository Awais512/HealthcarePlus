"use client";
import React, { useState } from "react";
import { Calendar, Plus, Search, Filter } from "lucide-react";
import { cn } from "@/lib/utils";

// Types
type Appointment = {
  id: number;
  patientName: string;
  date: string;
  time: string;
  type: string;
  status: "Confirmed" | "Pending" | "Completed";
};

type ColumnDef<T> = {
  header: string;
  accessorKey: keyof T;
  cell?: (props: { row: T }) => React.ReactNode;
};

interface TableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  className?: string;
}

function Table<T extends Record<string, any>>({
  data,
  columns,
  className,
}: TableProps<T>) {
  return (
    <div
      className={cn(
        "bg-white dark:bg-gray-800/50 backdrop-blur-md rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden",
        className
      )}
    >
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
            {columns.map((column, index) => (
              <th
                key={index}
                className="text-left p-4 text-gray-700 dark:text-gray-300 font-semibold"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50"
            >
              {columns.map((column, colIndex) => (
                <td key={colIndex} className="p-4">
                  {column.cell ? (
                    column.cell({ row })
                  ) : (
                    <span className="text-gray-800 dark:text-gray-200">
                      {String(row[column.accessorKey])}
                    </span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const AppointmentsPage = () => {
  // States
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Sample appointments data
  const appointments: Appointment[] = [
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

  // Table columns configuration
  const columns: ColumnDef<Appointment>[] = [
    {
      header: "Patient Name",
      accessorKey: "patientName",
    },
    {
      header: "Date",
      accessorKey: "date",
    },
    {
      header: "Time",
      accessorKey: "time",
    },
    {
      header: "Type",
      accessorKey: "type",
    },
    {
      header: "Status",
      accessorKey: "status",
      cell: ({ row }) => (
        <span
          className={cn(
            "px-2 py-1 rounded-full text-sm",
            row.status === "Confirmed"
              ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200"
              : row.status === "Pending"
              ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200"
              : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200"
          )}
        >
          {row.status}
        </span>
      ),
    },
    {
      header: "Actions",
      accessorKey: "id",
      cell: () => (
        <div className="flex space-x-2">
          <button className="px-3 py-1 text-sm text-blue-600 dark:text-blue-400 hover:underline">
            Edit
          </button>
          <button className="px-3 py-1 text-sm text-red-600 dark:text-red-400 hover:underline">
            Cancel
          </button>
        </div>
      ),
    },
  ];

  // Filter appointments based on search
  const filteredAppointments = appointments.filter((appointment) =>
    Object.values(appointment).some((value) =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredAppointments.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentAppointments = filteredAppointments.slice(startIndex, endIndex);

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
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
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

      {/* Table */}
      <Table data={currentAppointments} columns={columns} />

      {/* Pagination */}
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Showing {startIndex + 1} to{" "}
          {Math.min(endIndex, filteredAppointments.length)} of{" "}
          {filteredAppointments.length} results
        </p>
        <div className="flex space-x-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={cn(
              "px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg",
              "bg-white dark:bg-gray-800/50 backdrop-blur-md",
              "text-gray-700 dark:text-gray-300",
              currentPage === 1 && "opacity-50 cursor-not-allowed"
            )}
          >
            Previous
          </button>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className={cn(
              "px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg",
              "bg-white dark:bg-gray-800/50 backdrop-blur-md",
              "text-gray-700 dark:text-gray-300",
              currentPage === totalPages && "opacity-50 cursor-not-allowed"
            )}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentsPage;
