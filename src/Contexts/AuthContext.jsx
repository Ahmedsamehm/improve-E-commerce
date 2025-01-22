import React, { createContext, useMemo, useState } from "react";
import useAuth from "../Hooks/useAuth";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const {
    RegisterUser,
    LoginUser,
    userToken,
    handelLogout,
    toastMessage,
    showToast,
    isLoading,
    userID,
  } = useAuth();

  const value = useMemo(
    () => ({
      RegisterUser,
      LoginUser,

      userToken,
      handelLogout,
      toastMessage,
      showToast,
      isLoading,
      userID,
    }),
    [
      RegisterUser,
      LoginUser,
      userToken,
      handelLogout,
      toastMessage,
      showToast,
      isLoading,
      userID,
    ]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
