import { useState } from "react";
import useData from "../zustand/useData";

function useDeleteTask() {
  const [loading, setLoading] = useState();
  const { backendUrl } = useData();
  const deleteTask = async ({
    
  }) => {
    try {

      setLoading(true);
      const res = await fetch(`${backendUrl}/api/tasks`, {
        method: "DELETE",
        credentials: "include",
        headers: { "Content-type": "application/json" },
      });
      const data = await res.json();
      if (data.error) {
        taost.error(data.error);
        throw new Error(data.error);
      }
    } catch (error) {
      toast(error.message);
    } finally {
      setLoading(false);
    }

    return { loading, deleteTask };
  };
}

export default useDeleteTask;
