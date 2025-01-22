import axios from "axios";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import useTostMsg from "./useTostMsg";

export default function useCheckout() {
  const { userToken } = useContext(AuthContext);

  const { DisplayTostMsg, toastMessage, showToast, setIsLoading, isLoading } =
    useTostMsg();
  const [showOrders, setShowOrders] = useState([]);
  const CheckOut = useCallback(
    async (values, cartId) => {
      try {
        if (!cartId) {
          DisplayTostMsg("cartId is undefined");
          return;
        }
        setIsLoading(true);
        const { data } = await axios.post(
          `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}`,
          {
            shippingAddress: values,
          },
          {
            headers: {
              token: userToken,
            },
            params: {
              url:  url: `${window.location.origin}/#/allOrders`,
            },
          }
        );

        if (data?.session?.url) {
          window.location.href = data.session.url;
        }
      } catch (error) {
        DisplayTostMsg(error.response.data.message);
        throw error;
      } finally {
        setIsLoading(false);
      }
    },
    [userToken]
  );

  const getOrders = useCallback(async (userID) => {
    try {
      const { data } = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/orders/user/${userID}`,
        {
          headers: {
            token: userToken,
          },
        }
      );
      setShowOrders(data);
    } catch (error) {
      DisplayTostMsg(error.response.data.message);
      throw error;
    } finally {
    }
  }, []);

  return {
    CheckOut,
    getOrders,
    showOrders,
    toastMessage,
    showToast,
    isLoading,
  };
}
