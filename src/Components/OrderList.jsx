import React from "react";

export default function OrderList({ order }) {
  return (
    <div className="bg-[#2A2A2A] rounded-lg shadow-md p-6 mb-6">
      {/* Order Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-[#E0E0E0]">
          Order #{order?._id}
        </h2>
        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold ${
            order?.isPaid
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {order?.isPaid ? "Paid" : "Not Paid"}
        </span>
      </div>

      {/* Shipping Address */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-[#E0E0E0] mb-2">
          Shipping Address
        </h3>
        <div className="text-[#B0B0B0]">
          <p>{order?.shippingAddress.details}</p>
          <p>{order?.shippingAddress.city}</p>
          <p>{order?.shippingAddress.phone}</p>
        </div>
      </div>

      {/* Order Details */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-[#E0E0E0] mb-2">
          Order Details
        </h3>
        <div className="text-[#B0B0B0]">
          <p>
            <span className="font-semibold">Payment Method:</span>{" "}
            {order?.paymentMethodType}
          </p>
          <p>
            <span className="font-semibold">Total Price:</span> $
            {order?.totalOrderPrice}
          </p>
          <p>
            <span className="font-semibold">Order Date:</span>{" "}
            {new Date(order.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* Cart Items */}
      <div>
        <h3 className="text-lg font-semibold text-[#E0E0E0] mb-2">Items</h3>
        <ul className="space-y-4">
          {order?.cartItems.map((item, index) => (
            <li key={index} className="flex items-center space-x-4">
              {/* Product Image */}
              <img
                src={item.product.imageCover}
                alt={item.product.title}
                className="w-16 h-16 object-cover rounded-lg"
              />
              {/* Product Details */}
              <div>
                <p className="font-semibold text-[#E0E0E0]">
                  {item.product.title}
                </p>
                <p className="text-sm text-[#B0B0B0]">Price: ${item.price}</p>
                <p className="text-sm text-[#B0B0B0]">Quantity: {item.count}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
