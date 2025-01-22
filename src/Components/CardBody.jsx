import React from "react";

export default function CardBody({
  img,
  title,
  description,
  value,
  onClick,
  index,
}) {
  return (
    <div
      key={index}
      onClick={() => {
        onClick(value._id) || null;
      }}
      className="card-xs sm:card-sm md:card-md lg:card-lg lx-card-xl bg-[#2A2A2A] shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer min-h-full"
    >
      <figure className="flex-none h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden">
        <img src={img} alt={title} className="object-cover w-full h-full" />
      </figure>
      <div className="card-body    p-4 sm:p-6">
        <h2 className="card-title text-lg sm:text-xl md:text-2xl text-[#E0E0E0]">
          {title}
          <div className="badge badge-secondary ml-2">NEW</div>
        </h2>
        <p className="text-sm sm:text-base text-[#B0B0B0] mt-2">
          {description ||
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, minus."}
        </p>
        <div className="card-actions justify-end mt-4">
          <div className="badge badge-outline text-xs sm:text-sm">Fashion</div>
          <div className="badge badge-outline text-xs sm:text-sm">Products</div>
        </div>
      </div>
    </div>
  );
}
