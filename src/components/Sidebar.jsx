import React from "react";
import { useSelector } from "react-redux";
import SidebarHeader from "./SidebarHeader";
import ChatHistory from "./ChatHistory";
import SidebarFooter from "./SidebarFooter";

const Sidebar = () => {
  const isHide = useSelector((state) => {
    return state.sidebar.hide;
  });

  if (isHide === false) {
    return (
      <div className="w-[21%] bg-[#161716] h-[100vh] fixed">
        <SidebarHeader />
        <ChatHistory />
        <SidebarFooter />
      </div>
    );
  } else {
    return <></>;
  }
};

export default Sidebar;
