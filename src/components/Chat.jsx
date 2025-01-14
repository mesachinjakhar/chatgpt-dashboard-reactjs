import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { showSidebar } from "../features/sidebar/sidebarSlice";
import ChatHeader from "./ChatHeader";

const Chat = () => {
  return (
    <div className="bg-[#212020] w-[100%] h-[100vh]">
      <ChatHeader />
    </div>
  );
};

export default Chat;
