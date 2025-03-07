import { useState } from "react";
import useData from "../zustand/useData";
import toast from "react-hot-toast";

function useDeleteTask() {
  const [loading, setLoading] = useState();
  const { backendUrl } = useData();
  const deleteTask = async (task_id) => {
    try {
      setLoading(true);
      const res = await fetch(`${backendUrl}/api/tasks/${task_id}`, {
        method: "DELETE",
        credentials: "include",
      });
      const data = await res.json();
      if (data.error) {
        toast.error(data.error);
        throw new Error(data.error);
      }
    } catch (error) {
      toast(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, deleteTask };
}

export default useDeleteTask;
