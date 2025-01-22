import React, { useCallback, useState } from "react";

export default function useHandelChange() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handelChange = useCallback((e) => {
    setUserEmail(e.target.value);
  }, []);
  const handelChangePassword = useCallback((e) => {
    setUserPassword(e.target.value);
  }, []);
  const handelChangePhoneNumber = useCallback((e) => {
    setPhoneNumber(e.target.value);
  }, []);

  return {
    handelChange,
    handelChangePassword,
    handelChangePhoneNumber,
    handelLogout,
    userEmail,
    userPassword,
    phoneNumber,
  };
}
