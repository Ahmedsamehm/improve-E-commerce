import axios from "axios";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import useTostMsg from "./useTostMsg";

export default function useCategories() {
  const [categories, setCategories] = useState([]);
  const [specificCategory, setSpecificCategory] = useState(null);
  const { userToken } = useContext(AuthContext);
  const { DisplayTostMsg, toastMessage, showToast, setIsLoading, isLoading } =
    useTostMsg();

  const getCategories = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/categories`
      );
      setCategories(data);
    } catch (error) {
      DisplayTostMsg(error.response.data.message);
    }
  }, []);

  const GetSpecificCategory = useCallback(async (id) => {
    try {
      const { data } = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/categories/${id}`
      );
      setSpecificCategory(data?.data);
    } catch (error) {
      DisplayTostMsg(error.response.data.message);
    }
  }, []);

  useEffect(() => {
    if (!userToken) return;
    getCategories();
  }, [userToken]);

  return { categories, GetSpecificCategory, specificCategory };
}
