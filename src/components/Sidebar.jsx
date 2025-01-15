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
      <div className="w-[26.7%] bg-[#161716] h-[100vh]">
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
