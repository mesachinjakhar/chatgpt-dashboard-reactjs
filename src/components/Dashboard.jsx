import React from "react";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
const Dashboard = () => {
  return (
    <div className="flex text-white">
      <Sidebar />
      <Chat />
    </div>
  );
};

export default Dashboard;
