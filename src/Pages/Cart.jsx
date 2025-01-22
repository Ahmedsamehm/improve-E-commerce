import React, { memo, useContext, useMemo } from "react";
import { CartContext } from "../Contexts/CartContext";
import CartBody from "../Components/CartBody";
import { Link } from "react-router-dom";

function CartPage() {
  const { cart, DeleteCartItem, ClearCart } = useContext(CartContext);

  return (
    <div className="min-h-screen bg-[#1A1A1A] p-5 md:p-8 text-[#E0E0E0]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Product List */}
        <div className="md:col-span-2">
          <div className="flex justify-between items-center text-center align-middle mb-5">
            <h1 className="text-2xl font-bold">Shopping Cart</h1>
            <button onClick={ClearCart} className="btn btn-error mt-4">
              ClearCart
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
                className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart-x"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                <path d="M13 17h-7v-14h-2" />
                <path d="M6 5l14 1l-1 7h-13" />
                <path d="M22 22l-5 -5" />
                <path d="M17 22l5 -5" />
              </svg>
            </button>
          </div>
          <div className="space-y-6">
            {cart?.data?.products.map((item) => (
              <CartBody
                key={item._id}
                item={item}
                cart={cart}
                DeleteCartItem={DeleteCartItem}
              />
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-[#2A2A2A] p-6 rounded-lg shadow-sm min-h-[300px] ">
          <h2 className="text-lg font-semibold mb-6">Order summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-[#B0B0B0]">Shipping estimate</span>
              <span className="font-medium">$0</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#B0B0B0]">Tax estimate</span>
              <span className="font-medium">$ 0</span>
            </div>
            <div className="border-t pt-4 flex justify-between">
              <span className="font-semibold">Order total</span>
              <span className="text-xl font-bold">
                ${cart?.data?.totalCartPrice || 0}
              </span>
            </div>
          </div>
          <Link to={"/checkout"}>
            <button className="w-full mt-6 bg-[#4A90E2] text-white py-2 px-4 rounded-lg font-medium hover:bg-[#357ABD]">
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default memo(CartPage);
