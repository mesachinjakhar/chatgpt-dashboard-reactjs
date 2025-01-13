import React from "react";
import { useSelector } from "react-redux";
import SidebarHeader from "./SidebarHeader";

const Sidebar = () => {
  const isHide = useSelector((state) => {
    return state.sidebar.hide;
  });

  if (isHide === false) {
    return (
      <div className="w-[27%] bg-[#161716] h-[100vh]">
        <SidebarHeader />
      </div>
    );
  } else {
    return <></>;
  }
};

export default Sidebar;
