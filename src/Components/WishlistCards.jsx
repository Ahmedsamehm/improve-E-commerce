import React, { memo } from "react";

const WishlistCards = memo(
  ({ wishlistItems, handleRemove, AddToCart, CartLoading, LoadingDelete }) => {
    return (
      <div className="grid gap-6 sm:hidden">
        {wishlistItems?.map((product) => (
          <div
            key={product.id}
            className="p-4 border border-[#4A90E2] rounded-lg shadow-sm flex flex-col items-start space-y-4 w-full bg-[#2A2A2A]"
          >
            <div className="flex items-center space-x-4">
              <img
                src={product.imageCover}
                alt={product.name}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div>
                <p className="font-bold text-[#E0E0E0]">{product.title}</p>
                <p className="text-[#B0B0B0]">{product.description}</p>
              </div>
            </div>
            <div className="flex flex-col w-full space-y-2">
              <p className="text-lg font-semibold text-[#E0E0E0]">
                ${product.price.toFixed(2)}
              </p>

              <div className="flex justify-between w-full ">
                <button
                  onClick={() => AddToCart(product.id)}
                  disabled={CartLoading === product.id}
                  className="btn btn-primary btn-sm bg-[#4A90E2] border-none hover:bg-[#357ABD] "
                >
                  Add to Cart
                </button>

                <button
                  onClick={() => handleRemove(product.id)}
                  disabled={LoadingDelete === product.id}
                  className="btn btn-error btn-sm bg-[#FF6B6B] border-none hover:bg-[#FF4C4C]"
                >
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
                    className="icon icon-tabler icons-tabler-outline icon-tabler-trash"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 7l16 0" />
                    <path d="M10 11l0 6" />
                    <path d="M14 11l0 6" />
                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
);
export default WishlistCards;
