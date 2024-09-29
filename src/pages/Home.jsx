import React, { useEffect, useState } from "react";
import Task from "../components/Task";
import useGetTask from "../hooks/useGetTask";

function Home() {
  const { loading, getTask } = useGetTask();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const taskData = await getTask();
        setTasks(taskData);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, [setTasks]);

  return (
    <div className=" w-full  min-h-screen max-h-full  bg-[#e6dfe8]  p-2 grid grid-cols-3 gap-2  ">
      {loading ? <span className="loading loading-spinner"></span> : ""}
      {tasks?.map((task) => (
        <Task
          title={task.title}
          description={task.description}
          status={task.status}
          priority={task.priority}
          due_date={task.due_date}
          user={task.user_id.fullName}
          task_id={task._id}
        />
      ))}
      ;
    </div>
  );
}

export default Home;
