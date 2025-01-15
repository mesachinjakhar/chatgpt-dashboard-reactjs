import React from "react";

const SendMessage = () => {
  return (
    <div className="bg-[#2e2f2e] mx-auto w-[600px] rounded-3xl px-4 py-2">
      <div className="mt-1">
        <input
          type="text"
          name=""
          id=""
          placeholder="Message ChatGPT"
          className="bg-[#2e2f2e] w-full"
        />
      </div>
      <div className="mt-4 flex  cursor-pointer justify-between items-center">
        <div className="flex gap-3">
          <i className="bi bi-paperclip text-white "></i>
          <i className="bi bi-gear text-white"></i>
          <i className="bi bi-globe-americas text-white"></i>
        </div>
        <div>
          <i className="bi bi-vinyl-fill text-3xl text-white"></i>
        </div>
      </div>
    </div>
  );
};

export default SendMessage;
