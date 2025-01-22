import { useCallback, useState } from "react";

export default function useTostMsg() {
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const DisplayTostMsg = useCallback((message) => {
    setIsLoading(true);
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
    setIsLoading(false);
  }, []);
  return {
    DisplayTostMsg,
    toastMessage,
    showToast,
    setIsLoading,
    isLoading,
  };
}
