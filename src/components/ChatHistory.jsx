import React, { useState } from "react";
import { Link } from "react-router";

const ChatHistory = () => {
  const [activeIndex, setActiveIndex] = useState("");
  const [hoverIndex, setHoverIndex] = useState("");

  function handleIndex(index) {
    return () => {
      setHoverIndex("");
      setActiveIndex(index);
    };
  }

  return (
    <div className="h-[81%] overflow-y-auto scrollbar-custom">
      <div className="p-2 mt-5">
        <p className="text-xs px-3">Today</p>
        <ul className="mt-2 cursor-pointer">
          <li
            key={1}
            onClick={handleIndex(1)}
            className={`px-3 py-2 rounded-lg text-sm flex justify-between ${
              activeIndex === 1 ? "bg-[#212020]" : ""
            }`}
            onMouseEnter={() => {
              if (activeIndex != 1) {
                setHoverIndex(1);
              }
            }}
            onMouseLeave={() => setHoverIndex("")}
          >
            <Link to={"/sad"}>Chat 1</Link>
            {activeIndex === 1 ? <i className="bi bi-three-dots"></i> : ""}
            {hoverIndex === 1 ? <i className="bi bi-three-dots"></i> : ""}
          </li>

          <li
            key={2}
            onClick={handleIndex(2)}
            className={`px-3 py-2 rounded-lg text-sm flex justify-between ${
              activeIndex === 2 ? "bg-[#212020]" : ""
            }`}
            onMouseEnter={() => {
              if (activeIndex != 2) {
                setHoverIndex(2);
              }
            }}
            onMouseLeave={() => setHoverIndex("")}
          >
            <Link to={"/sad"}>Chat 1</Link>
            {activeIndex === 2 ? <i className="bi bi-three-dots"></i> : ""}
            {hoverIndex === 2 ? <i className="bi bi-three-dots"></i> : ""}
          </li>
          <li
            key={3}
            onClick={handleIndex(3)}
            className={`px-3 py-2 rounded-lg text-sm flex justify-between ${
              activeIndex === 3 ? "bg-[#212020]" : ""
            }`}
          >
            Chat 1
            {activeIndex === 3 ? <i className="bi bi-three-dots"></i> : ""}
          </li>
        </ul>
      </div>

      <div className="p-2 mt-5">
        <p className="text-xs px-3">Today</p>
        <ul className="mt-2 cursor-pointer">
          <li
            key={1}
            onClick={handleIndex(4)}
            className={`px-3 py-2 rounded-lg text-sm flex justify-between ${
              activeIndex === 4 ? "bg-[#212020]" : ""
            }`}
          >
            Chat 1
            {activeIndex === 4 ? <i className="bi bi-three-dots"></i> : ""}
          </li>

          <li
            key={5}
            onClick={handleIndex(5)}
            className={`px-3 py-2 rounded-lg text-sm flex justify-between ${
              activeIndex === 5 ? "bg-[#212020]" : ""
            }`}
          >
            Chat 1
            {activeIndex === 5 ? <i className="bi bi-three-dots"></i> : ""}
          </li>
          <li
            key={6}
            onClick={handleIndex(6)}
            className={`px-3 py-2 rounded-lg text-sm flex justify-between ${
              activeIndex === 6 ? "bg-[#212020]" : ""
            }`}
          >
            Chat 1
            {activeIndex === 6 ? <i className="bi bi-three-dots"></i> : ""}
          </li>
        </ul>
      </div>

      <div className="p-2 mt-5">
        <p className="text-xs px-3">Today</p>
        <ul className="mt-2 cursor-pointer">
          <li
            key={7}
            onClick={handleIndex(7)}
            className={`px-3 py-2 rounded-lg text-sm flex justify-between ${
              activeIndex === 7 ? "bg-[#212020]" : ""
            }`}
          >
            Chat 1
            {activeIndex === 7 ? <i className="bi bi-three-dots"></i> : ""}
          </li>

          <li
            key={8}
            onClick={handleIndex(8)}
            className={`px-3 py-2 rounded-lg text-sm flex justify-between ${
              activeIndex === 8 ? "bg-[#212020]" : ""
            }`}
          >
            Chat 1
            {activeIndex === 8 ? <i className="bi bi-three-dots"></i> : ""}
          </li>
          <li
            key={9}
            onClick={handleIndex(9)}
            className={`px-3 py-2 rounded-lg text-sm flex justify-between ${
              activeIndex === 9 ? "bg-[#212020]" : ""
            }`}
          >
            Chat 1
            {activeIndex === 9 ? <i className="bi bi-three-dots"></i> : ""}
          </li>
        </ul>
      </div>

      <div className="p-2 mt-5">
        <p className="text-xs px-3">Today</p>
        <ul className="mt-2 cursor-pointer">
          <li
            key={10}
            onClick={handleIndex(10)}
            className={`px-3 py-2 rounded-lg text-sm flex justify-between ${
              activeIndex === 10 ? "bg-[#212020]" : ""
            }`}
          >
            Chat 1
            {activeIndex === 10 ? <i className="bi bi-three-dots"></i> : ""}
          </li>

          <li
            key={11}
            onClick={handleIndex(11)}
            className={`px-3 py-2 rounded-lg text-sm flex justify-between ${
              activeIndex === 11 ? "bg-[#212020]" : ""
            }`}
          >
            Chat 1
            {activeIndex === 11 ? <i className="bi bi-three-dots"></i> : ""}
          </li>
          <li
            key={12}
            onClick={handleIndex(12)}
            className={`px-3 py-2 rounded-lg text-sm flex justify-between ${
              activeIndex === 12 ? "bg-[#212020]" : ""
            }`}
          >
            Chat 1
            {activeIndex === 12 ? <i className="bi bi-three-dots"></i> : ""}
          </li>
        </ul>
      </div>

      <div className="p-2 mt-5">
        <p className="text-xs px-3">Today</p>
        <ul className="mt-2 cursor-pointer">
          <li
            key={13}
            onClick={handleIndex(13)}
            className={`px-3 py-2 rounded-lg text-sm flex justify-between ${
              activeIndex === 13 ? "bg-[#212020]" : ""
            }`}
          >
            Chat 1
            {activeIndex === 13 ? <i className="bi bi-three-dots"></i> : ""}
          </li>

          <li
            key={14}
            onClick={handleIndex(14)}
            className={`px-3 py-2 rounded-lg text-sm flex justify-between ${
              activeIndex === 14 ? "bg-[#212020]" : ""
            }`}
          >
            Chat 1
            {activeIndex === 14 ? <i className="bi bi-three-dots"></i> : ""}
          </li>
          <li
            key={15}
            onClick={handleIndex(15)}
            className={`px-3 py-2 rounded-lg text-sm flex justify-between ${
              activeIndex === 15 ? "bg-[#212020]" : ""
            }`}
          >
            Chat 1
            {activeIndex === 15 ? <i className="bi bi-three-dots"></i> : ""}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ChatHistory;
