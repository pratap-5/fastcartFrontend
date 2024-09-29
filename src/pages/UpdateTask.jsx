import React, { useState } from "react";
import useData from "../zustand/useData";
import useUpdateTask from "../hooks/useUpdateTask";
import { useNavigate } from "react-router-dom";

function UpdateTask() {
  const { taskData } = useData();
  const { loading, updateTask } = useUpdateTask();
  const navigate = useNavigate();

  const [taskDatas, setTaskDatas] = useState({
    title: taskData.title,
    description: taskData.description,
    status: taskData.status,
    due_date: taskData.due_date,
    priority: taskData.priority,
    task_id: taskData.task_id,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const fetch = async () => {
      updateTask(taskDatas);
    };
    fetch();
    navigate("/");
  };

  return (
    <div className=" w-full  flex  items-center justify-center min-h-screen max-h-full  bg-[#e6dfe8]  p-2  ">
      <form
        onSubmit={handleSubmit}
        className=" h-full   w-full  md:w-[700px] border bg-slate-50 shadow-md rounded-xl p-3 flex flex-col gap-1 items-center justify-center"
      >
        <h1 className="text-center text-4xl font-bold capitalize mb-1">
          Update Task
        </h1>
        <span className="w-full">
          <p>Update title</p>
          <input
            value={taskDatas.title}
            onChange={(e) => {
              setTaskDatas({ ...taskDatas, title: e.target.value });
            }}
            type="text"
            placeholder=""
            className="input  w-full mb-5 bg-[#eee]  text-[18px] text-[#383838] "
          />
        </span>
        <span className="w-full">
          <p>Update status</p>
          <input
            value={taskDatas.status}
            onChange={(e) => {
              setTaskDatas({ ...taskDatas, status: e.target.value });
            }}
            type="text"
            placeholder=""
            className="input  w-full mb-5 bg-[#eee]  text-[18px] text-[#383838] "
          />
        </span>

        <span className="w-full">
          <p>Update priority</p>
          <input
            value={taskDatas.priority}
            onChange={(e) => {
              setTaskDatas({ ...taskDatas, priority: e.target.value });
            }}
            type="text"
            placeholder=""
            className="input  w-full mb-5 bg-[#eee]  text-[18px] text-[#383838] "
          />
        </span>
        <span className="w-full">
          <p>Update duration date</p>
          <input
            value={taskDatas.due_date}
            onChange={(e) => {
              setTaskDatas({ ...taskDatas, due_date: e.target.value });
            }}
            type="text"
            placeholder=""
            className="input  w-full mb-5 bg-[#eee]  text-[18px] text-[#383838] "
          />
        </span>

        <span className="w-full ">
          <p>Update description</p>
          <textarea
            value={taskDatas.description}
            onChange={(e) => {
              setTaskDatas({ ...taskDatas, description: e.target.value });
            }}
            className="input  w-full  h-[200px]  bg-[#eee]  text-[18px] text-[#383838] flex-1 p-1 text-justify"
            placeholder="Add Details"
          ></textarea>
        </span>

        <button className="btn  w-full capitalize">
          {loading ? (
            <span className="loading loading-spinner"></span>
          ) : (
            "update"
          )}
        </button>
      </form>
    </div>
  );
}

export default UpdateTask;
