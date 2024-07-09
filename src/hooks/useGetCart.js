import React, { useState } from "react";
import toast from "react-hot-toast";
import useData from "../zustand/useData";

function useGetCart() {
  const { backendUrl, setCarts } = useData();
  const [loading, setloading] = useState(false);

  const getCart = async () => {
    setloading(true);
    try {
      const res = await fetch(`${backendUrl}/api/carts/get_cart`, {
        credentials: "include",
        headers: { "Content-type": "application/json" },
      });

      const data = await res.json();

      if (data.error) {
        toast.error(data.error);
        throw new Error(data.error);
      }
      setCarts(data.cartProducts);
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };

  return { loading, getCart };
}

export default useGetCart;
