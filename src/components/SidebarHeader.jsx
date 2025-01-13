import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { hideSidebar } from "../features/sidebar/sidebarSlice";

const SidebarHeader = () => {
  const isHide = useSelector((state) => state.sidebar.hide);

  const dispatch = useDispatch();

  function handleHide() {
    console.log("handle hide");
    dispatch(hideSidebar());
  }

  return (
    <div className="flex justify-between px-2 py-2">
      <div>
        <button
          onClick={handleHide}
          className="px-3 py-2 rounded-xl  hover:bg-[#212020]"
        >
          <i class="bi bi-window-sidebar "></i>
        </button>
      </div>
      <div>
        <button className=" px-3 py-2 rounded-xl  hover:bg-[#212020]  ">
          <i className="bi bi-search "></i>
        </button>
        <button className=" px-3 py-2 rounded-xl hover:bg-[#212020] ">
          <i className="bi bi-chat-right-dots"></i>
        </button>
      </div>
    </div>
  );
};

export default SidebarHeader;
