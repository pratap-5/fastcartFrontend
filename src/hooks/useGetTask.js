import React, { useState } from "react";
import useData from "../zustand/useData";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

function useGetTask() {
  const [loading, setLoading] = useState(false);
  const { backendUrl } = useData();
  const getTask = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${backendUrl}/api/tasks`, {
    
      });

      const data = await res.json();
      if (data.error) {
        toast.error(data.error);
        throw new Error(data.error);
      }
      return data;
    } catch (error) {
      toast(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, getTask };
}

export default useGetTask;
