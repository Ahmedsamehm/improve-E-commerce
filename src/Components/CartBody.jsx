import React, { memo } from "react";

function CartBody({ item, DeleteCartItem }) {
  return (
    <div
      key={item?._id}
      className="flex items-center justify-between bg-[#2A2A2A] p-4 rounded-lg shadow-sm text-[#E0E0E0]"
    >
      <div className="flex items-center space-x-4">
        <img
          src={item?.product?.imageCover}
          alt={item.product.title}
          className="w-16 h-16 object-cover rounded-lg"
        />
        <div>
          <h2 className="font-semibold text-lg">{item.product.title}</h2>
          <p className="text-sm text-[#B0B0B0]">
            {item.product.category?.name || "Uncategorized"}
          </p>
          <p className="text-sm font-medium text-[#E0E0E0]">
            ${item.price.toFixed(2)}
          </p>
          <p
            className={`text-sm ${
              item.product.quantity > 0 ? "text-green-600" : "text-[#B0B0B0]"
            }`}
          >
            {item.product.quantity > 0 ? "In stock" : "Out of stock"}
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <select
          defaultValue={item.count}
          className="border border-[#4A90E2] rounded-lg text-[#E0E0E0] p-2 bg-[#2A2A2A]"
        >
          {[1, 2, 3, 4, 5].map((qty) => (
            <option key={qty} value={qty}>
              {qty}
            </option>
          ))}
        </select>
        <button
          onClick={() => DeleteCartItem(item?.product?.id)}
          className="text-[#FF6B6B] hover:text-[#FF4C4C]"
        >
          <i className="ri-close-line text-xl"></i>
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
  );
}
export default memo(CartBody);
