import { useState } from "react";
import useData from "../zustand/useData";
import toast from "react-hot-toast";

function useAddTask() {
  const [loading, setLoading] = useState(false);
  const { backendUrl } = useData();
  const addTask = async ({
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
        method: "POST",
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
  return { loading, addTask };
}

export default useAddTask;

const checkData = (title, description, status, due_date, priority) => {
  if (!title || !description || !status || !due_date || !priority) {
    toast.error("fiil all  the fields");
    return false;
  }

  return true;
};
