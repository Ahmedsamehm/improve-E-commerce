import axios from "axios";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";

export default function useFav() {
  const { userToken } = useContext(AuthContext);
  const [getWishlist, setGetWishlist] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [LoadingDelete, setLoadingDelete] = useState(false);

  const wishlistItems = useMemo(() => {
    return getWishlist?.data || [];
  }, [getWishlist]);

  const GetFevList = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/wishlist`,
        {
          headers: {
            token: userToken,
          },
        }
      );

      setGetWishlist(data);
      return data;
    } catch (error) {
      console.error("Error fetching wishlist:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, [userToken]);

  const HandleFav = useCallback(
    async (idCard) => {
      try {
        setIsLoading(true);
        const { data } = await axios.post(
          `https://ecommerce.routemisr.com/api/v1/wishlist`,
          { productId: idCard },
          {
            headers: {
              token: userToken,
            },
          }
        );
        console.log("Product added to wishlist:", data);
        return data;
      } catch (error) {
        console.error("Error adding to wishlist:", error);
        throw error;
      } finally {
        setIsLoading(false);
      }
    },
    [userToken]
  );

  const RemoveFevList = useCallback(
    async (idCard) => {
      try {
        setIsLoading(true);
        await axios.delete(
          `https://ecommerce.routemisr.com/api/v1/wishlist/${idCard}`,
          {
            headers: {
              token: userToken,
            },
          }
        );

        await GetFevList();

        console.log("Product removed from wishlist");
      } catch (error) {
        console.error("Error removing from wishlist:", error);
        throw error;
      } finally {
        setIsLoading(false);
      }
    },
    [userToken, GetFevList]
  );

  const handleRemove = async (idCard) => {
    setLoadingDelete(idCard);
    try {
      await RemoveFevList(idCard);
    } catch (error) {
      console.error("Error removing from wishlist:", error);
    } finally {
      setLoadingDelete(false);
    }
  };

  useEffect(() => {
    if (!userToken) return;
    GetFevList();
  }, [userToken]);

  return {
    HandleFav,
    getWishlist,
    RemoveFevList,
    handleRemove,
    isLoading,
    setLoadingDelete,
    wishlistItems,
  };
}
