import axios from "axios";
import { useCallback, useState } from "react";
import { useJwt } from "react-jwt";
import useTostMsg from "./useTostMsg";

export default function useAuth() {
  const [userToken, setUserToken] = useState(
    localStorage.getItem("token") || null
  );
  const { decodedToken, isExpired } = useJwt(userToken);
  const userID = decodedToken?.id;

  const { DisplayTostMsg, toastMessage, showToast, setIsLoading, isLoading } =
    useTostMsg();

  const LoginUser = useCallback(
    async (values, navigate) => {
      setIsLoading(true);
      try {
        const { data } = await axios.post(
          "https://ecommerce.routemisr.com/api/v1/auth/signin",
          values
        );

        localStorage.setItem("token", data?.token);
        setUserToken(data?.token);
        DisplayTostMsg(data?.message);

        if (data?.message === "success") {
          setTimeout(() => {
            navigate("/");
          }, [3000]);
        }
      } catch (error) {
        DisplayTostMsg(error.response.data.message);
      } finally {
        setIsLoading(false);
      }
    },
    [setUserToken, DisplayTostMsg]
  );

  const RegisterUser = useCallback(
    async (values, Navigate) => {
      setIsLoading(true);
      try {
        const { data } = await axios.post(
          "https://ecommerce.routemisr.com/api/v1/auth/signup",
          values
        );

        if (data.token) {
          localStorage.setItem("token", data.token);
          setUserToken(data.token);
        }
        DisplayTostMsg(data.message);

        if (data.message === "success") {
          setTimeout(() => {
            Navigate("/Login");
          }, [2000]);
        }
      } catch (error) {
        DisplayTostMsg(error.response.data.message);
      } finally {
        setIsLoading(false);
      }
    },
    [DisplayTostMsg]
  );

  const handelLogout = useCallback(() => {
    localStorage.removeItem("token");
    setUserToken(null);
  }, []);

  return {
    LoginUser,
    RegisterUser,
    userToken,
    handelLogout,
    decodedToken,
    isExpired,
    toastMessage,
    showToast,
    isLoading,
    userID,
  };
}
