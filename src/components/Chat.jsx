import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { showSidebar } from "../features/sidebar/sidebarSlice";
import ChatHeader from "./ChatHeader";
import SendMessage from "./SendMessage";
import NewChat from "./OpenChat";
import Alert from "./Alert";
import OpenChat from "./OpenChat";

const Chat = () => {
  return (
    <div className="bg-[#212020] w-[100%] h-[100vh]">
      <ChatHeader />
      <OpenChat />
      <SendMessage />
      <Alert />
    </div>
  );
};

export default Chat;
