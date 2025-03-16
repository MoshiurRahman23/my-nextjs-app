import DashboardFooter from "@/components/Shared/DashboardFooter";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div className="min-h-screen">{children}</div>
      <DashboardFooter />
    </div>
  );
};

export default DashboardLayout;
