import React from "react";
import DashboardCharts from "@/components/Chart";
import RecentActivity from "@/components/RecentActivity";
import StatsCard from "@/components/StatsCard";

const DashboardLayout = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatsCard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <DashboardCharts />
      </div>

      <div className="mt-8">
        <RecentActivity />
      </div>

      {/* Extra padding at bottom for scrolling */}
      <div className="h-8" />
    </>
  );
};

export default DashboardLayout;
