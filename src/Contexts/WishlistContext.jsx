import React, { createContext, useMemo } from "react";
import useFav from "../Hooks/useFav";

export const WishlistContext = createContext();
export default function WishlistContextProvider({ children }) {
  const {
    getWishlist,
    handleRemove,
    isLoading,
    LoadingDelete,
    GetFevList,
    HandleFav,
    wishlistItems,
  } = useFav();

  const value = useMemo(
    () => ({
      getWishlist,
      handleRemove,
      isLoading,
      LoadingDelete,
      GetFevList,
      HandleFav,
      wishlistItems,
    }),
    [
      getWishlist,
      handleRemove,
      isLoading,
      LoadingDelete,
      GetFevList,
      HandleFav,
      wishlistItems,
    ]
  );
  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
}
