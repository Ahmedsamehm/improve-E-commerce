import React, { useCallback, useContext, useEffect, useState } from "react";
import { CartContext } from "../Contexts/CartContext";
import OrderList from "../Components/OrderList";
import { AuthContext } from "../Contexts/AuthContext";

export default function OrderDetails() {
  const { getOrders, showOrders } = useContext(CartContext);
  const { userID } = useContext(AuthContext);

  const handelIDCard = useCallback(async () => {
    await getOrders(userID);
  }, [getOrders, userID]);
  useEffect(() => {
    handelIDCard();
  }, [handelIDCard]);

  return (
    <div className="container-fluid mx-auto p-10 bg-[#1A1A1A] text-[#E0E0E0]">
      <h1 className="text-3xl font-bold mb-8">Order History</h1>
      {showOrders?.length > 0 ? (
        showOrders?.map((order, index) => (
          <OrderList key={index} order={order} />
        ))
      ) : (
        <div className="text-center text-[#B0B0B0]">
          No orders found. <span className="loading"></span>{" "}
        </div>
      )}
    </div>
  );
}
