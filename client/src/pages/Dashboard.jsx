import React, { useEffect, useState } from "react";
import DashboardSidebar from "../components/DashboardSidebar";
import { useLocation } from "react-router-dom";
import DashboardProfile from "../components/DashboardProfile";

const Dashboard = () => {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");

    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }),
    [location.search];

  return (
    <div className="min-h-screen flex flex-col md:flex-row ">
      <div className="">
        <DashboardSidebar />
      </div>

      <div className="">{tab=== "profile" && <DashboardProfile />}</div>
    </div>
  );
};

export default Dashboard;
