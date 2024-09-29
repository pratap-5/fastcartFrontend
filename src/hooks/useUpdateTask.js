import { useState } from "react";
import useData from "../zustand/useData";

function useUpdateTask() {
  const [loading, setLoading] = useState();
  const { backendUrl } = useData();
  const updateTask = async ({
    title,
    description,
    status,
    due_date,
    priority,
  }) => {
    try {
      if (!checkData(title, description, status, due_date, priority)) return;
      setLoading(true);
      const res = await fetch(`${backendUrl}/api/tasks`, {
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
        taost.error(data.error);

        throw new Error(data.error);
      }
    } catch (error) {
      toast(error.message);
    } finally {
      setLoading(false);
    }

    return { loading, updateTask };
  };
}

export default useUpdateTask;

const checkData = (title, description, status, due_date, priority) => {
  if (!title || !description || !status || !due_date || !priority) {
    toast.error("fiil all  the fields");
    return false;
  }

  return true;
};
