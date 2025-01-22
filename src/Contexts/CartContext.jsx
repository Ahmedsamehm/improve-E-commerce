import React, { createContext, useMemo } from "react";
import useCart from "../Hooks/useCart";
import useCheckout from "../Hooks/useCheckout";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const {
    cart,
    AddToCart,
    RemoveFromCart,
    CartLoading,
    DeleteCartItem,
    ClearCart,

    showToast,
    toastMessage,
  } = useCart();
  const { CheckOut, getOrders, isLoading, showOrders } = useCheckout();

  const value = useMemo(
    () => ({
      cart,
      AddToCart,
      RemoveFromCart,
      CartLoading,
      DeleteCartItem,
      ClearCart,

      CheckOut,
      getOrders,
      showToast,
      toastMessage,
      isLoading,
      showOrders,
    }),
    [
      cart,
      AddToCart,
      RemoveFromCart,
      CartLoading,
      DeleteCartItem,
      ClearCart,

      CheckOut,
      getOrders,
      showToast,
      toastMessage,
      isLoading,
      showOrders,
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
