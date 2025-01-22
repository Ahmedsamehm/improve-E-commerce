import React from "react";

export default function Pagination({ page, setPage, totalPages, metadata }) {
  return (
    <>
      <div className="flex justify-center mt-8 ">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="join-item btn btn-outline bg-[#2A2A2A] text-[#E0E0E0] border-[#4A90E2] hover:bg-[#4A90E2]"
        >
          Prev
        </button>

        <div className="join">
          {Array?.from({ length: totalPages }, (_, i) => (
            <input
              key={i + 1}
              className="join-item btn btn-square bg-[#2A2A2A] text-[#E0E0E0] border-[#4A90E2] hover:bg-[#4A90E2]"
              type="radio"
              name="options"
              aria-label={i + 1}
              checked={page === i + 1}
              onChange={() => setPage(i + 1)}
            />
          ))}
        </div>

        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
          className="join-item btn btn-outline bg-[#2A2A2A] text-[#E0E0E0] border-[#4A90E2] hover:bg-[#4A90E2]"
        >
          Next
        </button>
      </div>

      <div className="text-center mt-4 text-[#E0E0E0]">
        <p>
          Current page {page} of {totalPages}
        </p>
      </div>
    </>
  );
}
