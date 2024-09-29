import { useState } from "react";
import useData from "../zustand/useData";
import toast from "react-hot-toast";

function useUpdateTask() {
  const [loading, setLoading] = useState();
  const { backendUrl } = useData();
  const updateTask = async ({
    title,
    description,
    status,
    due_date,
    priority,
    task_id,
  }) => {
    try {

        if (!checkData(title, description, status, due_date, priority, task_id))
            return;
        console.log(task_id)
      setLoading(true);
      const res = await fetch(`${backendUrl}/api/tasks/${task_id}`, {
        method: "PUT",
        credentials: "include",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          title,
          description,
          status,
          due_date,
          priority,
        }),
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
  return { loading, updateTask };
}

export default useUpdateTask;

const checkData = (title, description, status, due_date, priority, task_id) => {
  if (!title || !description || !status || !due_date || !priority || !task_id) {
    return false;
  }

  return true;
};
