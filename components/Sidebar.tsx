"use client";
import React from "react";
import {
  Calendar,
  Users,
  File,
  Activity,
  Settings,
  MapPin,
  Stethoscope,
  Package,
} from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
  const navItems = [
    { name: "Appointments", icon: Calendar, path: "/doctors/appointments" },
    { name: "Patients", icon: Users, path: "/doctors/patients" },
    { name: "Medical Records", icon: File, path: "/doctors/records" },
    { name: "Locations", icon: MapPin, path: "/doctors/locations" },
    { name: "Treatments", icon: Stethoscope, path: "/doctors/treatments" },
    { name: "Packages", icon: Package, path: "/doctors/packages" },
    { name: "Settings", icon: Settings, path: "/doctors/settings" },
  ];

  return (
    <aside className="fixed left-0 top-[73px] w-64 h-[calc(100vh-73px)] z-10">
      {/* Glassmorphism effect */}
      <div className="absolute inset-0 backdrop-blur-md bg-white/50 dark:bg-gray-800/50 shadow-lg border-r border-white/20 dark:border-gray-700/30" />
      {/* Sidebar Content */}
      <nav className="relative h-full p-6 space-y-6">
        <div className="space-y-2">
          {/* Dashboard Button - Active */}
          <Link
            href="/"
            className="flex items-center space-x-3 w-full p-2 rounded-lg
            backdrop-blur-sm bg-blue-500/10 dark:bg-blue-500/20
            hover:bg-blue-500/20 dark:hover:bg-blue-500/30
            text-blue-600 dark:text-blue-400
            transition-colors duration-200"
          >
            <Activity className="h-5 w-5" />
            <span className="font-medium">Dashboard</span>
          </Link>
          {/* Navigation Items */}
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="flex items-center space-x-3 w-full p-2 rounded-lg
                text-gray-700 dark:text-gray-300
                hover:bg-white/50 dark:hover:bg-gray-700/50
                backdrop-blur-sm
                transition-colors duration-200"
            >
              <item.icon className="h-5 w-5" />
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
