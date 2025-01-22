import React from "react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen bg-[#1A1A1A]">
      <span className=" loading  md:loading-md lg:loading-lg loading-lg  loading-spinner  text-[#4A90E2]"></span>
    </div>
  );
}
