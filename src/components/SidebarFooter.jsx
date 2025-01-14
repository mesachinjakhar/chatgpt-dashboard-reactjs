import React from "react";

const SidebarFooter = () => {
  return (
    <div className=" bottom-0 px-3 py-2 bg-[#161716]">
      <div className="flex gap-3 hover:bg-[#212020] px-3 py-2 rounded-lg cursor-pointer">
        <button>
          <i className="bi bi-credit-card-2-back"></i>
        </button>
        <div>
          <p className="text-[14px]">Upgrade plan</p>
          <p className="text-[11px]">More access to the best models</p>
        </div>
      </div>
    </div>
  );
};

export default SidebarFooter;
