import axios from "axios";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import TostMsg from "../Components/TostMsg";
import useTostMsg from "./useTostMsg";

export default function useCart() {
  const { userToken } = useContext(AuthContext);
  const [cart, setCart] = useState([]);
  const [CartLoading, setCartLoading] = useState(false);

  const { DisplayTostMsg, toastMessage, showToast } = useTostMsg();

  const GetCart = useCallback(async () => {
    try {
      const { data } = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/cart",
        {
          headers: {
            token: userToken,
          },
        }
      );
      setCart(data);

      localStorage.setItem("cartId", data?.data?.cartOwner);
    } catch (error) {
      DisplayTostMsg(error?.response?.data?.message);
    }
  }, [userToken]);

  const AddToCart = useCallback(
    async (id) => {
      setCartLoading(true);
      try {
        const { data } = await axios.post(
          "https://ecommerce.routemisr.com/api/v1/cart",
          { productId: id },
          {
            headers: {
              token: userToken,
            },
          }
        );
        DisplayTostMsg(data?.message);
        await GetCart();
        setCartLoading(false);
      } catch (error) {
        DisplayTostMsg(error?.response?.data?.message);

        throw error;
      }
    },
    [userToken, GetCart]
  );

  const RemoveFromCart = useCallback(
    async (id) => {
      try {
        const { data } = await axios.delete(
          `https://ecommerce.routemisr.com/api/v1/cart/${id}`,
          {
            headers: {
              token: userToken,
            },
          }
        );
        DisplayTostMsg(data?.message);
        return data;
      } catch (error) {
        DisplayTostMsg(error?.response?.data?.message);
        throw error;
      }
    },
    [userToken]
  );

  const DeleteCartItem = useCallback(
    async (id) => {
      try {
        const { data } = await axios.delete(
          `https://ecommerce.routemisr.com/api/v1/cart/${id}`,
          {
            headers: {
              token: userToken,
            },
          }
        );
        DisplayTostMsg(data?.message);
        await GetCart();
        return data;
      } catch (error) {
        DisplayTostMsg(error?.response?.data?.message);
        throw error;
      }
    },
    [userToken, GetCart]
  );

  const ClearCart = useCallback(async () => {
    try {
      const { data } = await axios.delete(
        "https://ecommerce.routemisr.com/api/v1/cart",
        {
          headers: {
            token: userToken,
          },
        }
      );
      DisplayTostMsg(data?.message);
      await GetCart();
      return data;
    } catch (error) {
      DisplayTostMsg(error?.response?.data?.message);
      throw error;
    }
  }, [userToken, GetCart]);

  useEffect(() => {
    if (!userToken) return;
    GetCart();
  }, [userToken, GetCart]);

  return {
    cart,
    AddToCart,
    RemoveFromCart,
    DeleteCartItem,
    CartLoading,
    ClearCart,

    showToast,
    toastMessage,
  };
}
