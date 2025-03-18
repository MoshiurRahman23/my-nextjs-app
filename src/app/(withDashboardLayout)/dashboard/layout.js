import DashboardFooter from "@/components/Shared/DashboardFooter";
import Sidebar from "@/components/Shared/Sidebar";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen my-2">
      <div className="flex justify-between">
        <div className="w-[20%]">
          <Sidebar />
        </div>
        <div className="w-[80%] bg-base-200 rounded-box ml-2">{children}</div>
      </div>
      <DashboardFooter />
    </div>
  );
};

export default DashboardLayout;
