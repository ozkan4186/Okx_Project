"use client"
import React, { useState } from "react";

const ToggleText = ({ initialText }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleText = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full max-w-md mx-auto p-4 mb-4 shadow-md">
      <div className="flex items-center justify-between gap-36 w-full  ">
        <h1 className="text-lg font-semibold">Toggleable Text</h1>
        <button
          className="px-3 py-1 bg-black-500 text-white border-white  rounded-lg focus:outline-none"
          onClick={toggleText}
          aria-label={isOpen ? "Close text" : "Open text"}
        >
          {isOpen ? "-" : "+"}
        </button>
      </div>
      <div className={`mt-2 ${isOpen ? "block" : "hidden"}`}>
        <p className="text-white">{initialText}</p>
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <ToggleText initialText="This is the initial text that can be toggled." />
      <ToggleText initialText="Another toggleable text example." />
      <ToggleText initialText="Yet another example to toggle." />
      <ToggleText initialText="One more toggleable text here." />
    </div>
  );
};

export default HomePage;
