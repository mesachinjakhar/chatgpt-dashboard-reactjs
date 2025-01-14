import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { showSidebar } from "../features/sidebar/sidebarSlice";

const ChatHeader = () => {
  const isHide = useSelector((state) => state.sidebar.hide);
  const dispatch = useDispatch();

  console.log("chat header: ", isHide);

  function handleShowButton() {
    dispatch(showSidebar());
  }

  return (
    <div className="flex justify-between items-center px-2 py-2 ">
      {" "}
      <div className="flex">
        <button onClick={handleShowButton}>
          {isHide === true ? (
            <button
              onClick={handleShowButton}
              className="px-3 py-2 rounded-xl  hover:bg-[#161716] "
            >
              <i className="bi bi-window-sidebar "></i>
            </button>
          ) : (
            ""
          )}
        </button>
        {isHide === true ? (
          <button className=" px-3 py-2 rounded-xl hover:bg-[#161716]  ">
            <i className="bi bi-chat-right-dots"></i>
          </button>
        ) : (
          ""
        )}
        <div className="px-3 py-2 rounded-xl  hover:bg-[#161716] flex justify-center">
          <button className="">ChatGPT</button>
          <i class="bi bi-arrow-down-short"></i>
        </div>
      </div>
      {/* { left side} */}
      <div className="flex items-center gap-3 px-2">
        <div className=" px-4 py-2 rounded-full hover:bg-[#161716] flex items-center border-[0.3px]">
          <i className="bi bi-caret-up-square text-sm mr-2"></i>
          <button className="text-sm">Share</button>
        </div>
        <i class="bi bi-person-circle text-3xl cursor-pointer"></i>
      </div>
    </div>
  );
};

export default ChatHeader;
