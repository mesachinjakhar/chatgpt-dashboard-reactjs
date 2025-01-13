import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { showSidebar } from "../features/sidebar/sidebarSlice";

const Chat = () => {
  const isHide = useSelector((state) => state.sidebar.hide);
  const dispatch = useDispatch();

  function handleShowButton() {
    dispatch(showSidebar());
  }
  return (
    <div className="bg-[#212020] w-[100%] h-[100vh]">
      <button onClick={handleShowButton}>
        {isHide === true ? "Show Sidebar" : ""}
      </button>
    </div>
  );
};

export default Chat;
