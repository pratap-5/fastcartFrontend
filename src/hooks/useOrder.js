import React, { useState } from "react";
import useData from "../zustand/useData";
import toast from "react-hot-toast";

function useOrder() {
  const { backendUrl } = useData();
  const [loading, setloading] = useState(false);

  const makeOrder = async (amount, productId, accountNo) => {
    setloading(true);
    try {
      const res = await fetch(`${backendUrl}/api/orders/make_order`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ amount, productId, accountNo }),
      });

      const data = await res.json();

      if (data.error) {
        toast.error(data.error);
        throw new Error(data.error);
      }
      toast.success("payment success full");
      return true;
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };

  return { loading, makeOrder };
}

export default useOrder;
