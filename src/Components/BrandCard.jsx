import React from "react";

const BrandCard = ({ brand, onClick }) => {
  return (
    <div
      className="card-xs sm:card-sm md:card-md lg:card-lg lx-card-xl bg-[#2A2A2A] shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
      onClick={() => onClick(brand)}
    >
      <figure className="px-4 pt-4">
        <img
          src={brand.image}
          alt={brand.name}
          className="rounded-xl w-full h-32 object-cover"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-[#E0E0E0]">{brand.name}</h2>
      </div>
    </div>
  );
};

export default BrandCard;
