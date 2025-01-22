import React, { memo, useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

const Card = memo(({ product, getWishlist, HandleFav }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const userToken = localStorage.getItem("token");

  useEffect(() => {
    if (!userToken) return;

    if (getWishlist?.data) {
      const isProductInWishlist = getWishlist.data.some(
        (item) => item.id === product._id
      );
      setIsInWishlist(isProductInWishlist);
    }
  }, [getWishlist, product._id]);

  const SaveIdProduct = useCallback(async () => {
    try {
      await HandleFav(product._id);
      console.log("Product added to wishlist!");
      setIsInWishlist((prev) => !prev); // Toggle the wishlist state
    } catch (error) {
      console.error("Error:", error);
    }
  }, [HandleFav, product._id]);

  return (
    <div className="col-span-1">
      <div className="card-xs sm:card-sm md:card-md lg:card-lg lx-card-xl bg-[#2A2A2A] w-full shadow-sm hover:shadow-md transition-shadow duration-300 min-h-full">
        <figure className="relative aspect-w-1 aspect-h-1">
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="w-10 h-10 absolute top-10 right-2"
            onClick={SaveIdProduct}
          >
            {isInWishlist || isHovered ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="icon icon-tabler icons-tabler-filled icon-tabler-heart text-[#FF6B6B]"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-heart text-[#FF6B6B]"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
              </svg>
            )}
          </div>

          <Link to={`/product/${product._id}`}>
            <img
              src={product?.imageCover}
              alt={product?.slug}
              className="w-full h-full object-cover rounded-t-lg"
            />
          </Link>
        </figure>

        <div className="card-body p-4 sm:p-6">
          <h2 className="card-title text-sm sm:text-md md:text-lg lg:text-xl font-semibold text-[#E0E0E0] text-balance line-clamp-1">
            {product?.title}
          </h2>
          <p className="text-xs sm:text-sm md:text-md text-[#B0B0B0] line-clamp-2">
            {product?.description}
          </p>
          <div className="card-actions justify-end mt-4">
            <Link
              to={`/product/${product._id}`}
              className="btn btn-primary btn-sm sm:btn-md bg-[#4A90E2] border-none hover:bg-[#357ABD] text-[#E0E0E0]"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Card;
