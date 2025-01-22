import React from "react";

export default function Skeleton() {
  return (
    <div className="col-span-1">
      <div className="card bg-[#2A2A2A] w-full shadow-sm hover:shadow-md transition-shadow duration-300 min-h-full">
        <figure className="relative aspect-w-1 aspect-h-1">
          <div className="w-full h-full bg-[#4A90E2] animate-pulse rounded-t-lg"></div>
        </figure>
        <div className="card-body p-4 sm:p-6">
          <div className="h-6 bg-[#4A90E2] animate-pulse mb-2 rounded"></div>
          <div className="h-4 bg-[#4A90E2] animate-pulse mb-2 rounded"></div>
          <div className="h-4 bg-[#4A90E2] animate-pulse mb-2 rounded"></div>
          <div className="h-10 bg-[#4A90E2] animate-pulse rounded"></div>
        </div>
      </div>
    </div>
  );
}
