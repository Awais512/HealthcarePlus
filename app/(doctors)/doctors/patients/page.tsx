"use client";
import React, { useState } from "react";
import {
  Search,
  Filter,
  UserPlus,
  Mail,
  Phone,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Types
interface Patient {
  id: number;
  name: string;
  email: string;
  phone: string;
  age: number;
  gender: string;
  lastVisit: string;
  status: "Active" | "Inactive";
}

type ColumnDef<T> = {
  header: string;
  accessorKey: keyof T;
  cell?: (props: { row: T }) => React.ReactNode;
};

type StatsCardProps = {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
};

// Generic Table Component
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

// Stats Card Component
const StatsCard = ({ title, value, change, trend }: StatsCardProps) => (
  <div className="bg-white dark:bg-gray-800/50 backdrop-blur-md p-6 rounded-xl border border-gray-200 dark:border-gray-700">
    <h3 className="text-gray-600 dark:text-gray-400 text-sm font-medium">
      {title}
    </h3>
    <p className="text-2xl font-bold text-gray-800 dark:text-white mt-2">
      {value}
    </p>
    <p
      className={cn(
        "text-sm mt-1 flex items-center gap-1",
        trend === "up"
          ? "text-green-600 dark:text-green-400"
          : "text-red-600 dark:text-red-400"
      )}
    >
      {trend === "up" ? "↑" : "↓"} {change} from last month
    </p>
  </div>
);

const PatientsPage = () => {
  // States
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Sample data
  const patients: Patient[] = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+1 234-567-8900",
      age: 35,
      gender: "Male",
      lastVisit: "2024-02-28",
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "+1 234-567-8901",
      age: 28,
      gender: "Female",
      lastVisit: "2024-03-01",
      status: "Active",
    },
    {
      id: 3,
      name: "Robert Johnson",
      email: "robert.j@example.com",
      phone: "+1 234-567-8902",
      age: 45,
      gender: "Male",
      lastVisit: "2024-02-15",
      status: "Inactive",
    },
  ];

  // Table columns configuration
  const columns: ColumnDef<Patient>[] = [
    {
      header: "Name",
      accessorKey: "name",
      cell: ({ row }) => (
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
            <span className="text-gray-600 dark:text-gray-300 font-medium">
              {row.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>
          <div className="text-gray-800 dark:text-gray-200 font-medium">
            {row.name}
          </div>
        </div>
      ),
    },
    {
      header: "Contact",
      accessorKey: "email",
      cell: ({ row }) => (
        <div className="space-y-1">
          <div className="flex items-center text-gray-600 dark:text-gray-400">
            <Mail className="h-4 w-4 mr-2" />
            {row.email}
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-400">
            <Phone className="h-4 w-4 mr-2" />
            {row.phone}
          </div>
        </div>
      ),
    },
    {
      header: "Age",
      accessorKey: "age",
    },
    {
      header: "Gender",
      accessorKey: "gender",
    },
    {
      header: "Last Visit",
      accessorKey: "lastVisit",
    },
    {
      header: "Status",
      accessorKey: "status",
      cell: ({ row }) => (
        <span
          className={cn(
            "px-2 py-1 rounded-full text-sm",
            row.status === "Active"
              ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200"
              : "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-200"
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
        <button className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
          <MoreVertical className="h-5 w-5" />
        </button>
      ),
    },
  ];

  // Filter patients based on search
  const filteredPatients = patients.filter((patient) =>
    Object.values(patient).some((value) =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredPatients.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPatients = filteredPatients.slice(startIndex, endIndex);

  // Stats data
  const statsData = [
    {
      title: "Total Patients",
      value: "1,234",
      change: "12%",
      trend: "up" as const,
    },
    {
      title: "Active Patients",
      value: "1,180",
      change: "8%",
      trend: "up" as const,
    },
    {
      title: "New Patients",
      value: "64",
      change: "4%",
      trend: "up" as const,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            Patients
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            View and manage patient records
          </p>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <UserPlus className="h-5 w-5" />
          <span>Add Patient</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {statsData.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Search and Filter Section */}
      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
          <input
            type="text"
            placeholder="Search patients by name, email, or phone..."
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
      </div>

      {/* Table */}
      <Table data={currentPatients} columns={columns} />

      {/* Pagination */}
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Showing {startIndex + 1} to{" "}
          {Math.min(endIndex, filteredPatients.length)} of{" "}
          {filteredPatients.length} results
        </p>
        <div className="flex space-x-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={cn(
              "flex items-center px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg",
              "bg-white dark:bg-gray-800/50 backdrop-blur-md",
              "text-gray-700 dark:text-gray-300",
              currentPage === 1 && "opacity-50 cursor-not-allowed"
            )}
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Previous
          </button>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className={cn(
              "flex items-center px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg",
              "bg-white dark:bg-gray-800/50 backdrop-blur-md",
              "text-gray-700 dark:text-gray-300",
              currentPage === totalPages && "opacity-50 cursor-not-allowed"
            )}
          >
            Next
            <ChevronRight className="h-4 w-4 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatientsPage;
