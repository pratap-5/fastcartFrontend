import React, { useState } from "react";

import useAddTask from "../hooks/useAddTask";
import { useNavigate } from "react-router-dom";

function AddTask() {
  const navigate = useNavigate();
  const { loading, addTask } = useAddTask();
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    status: "",
    due_date: "",
    priority: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(taskData);
    navigate("/");
    window.location.reload();
   
  };

  return (
    <div className=" w-full  flex  items-center justify-center min-h-screen max-h-full  bg-[#e6dfe8]  p-2  ">
      <form
        onSubmit={handleSubmit}
        className=" w-full  md:w-[700px] h-full  border bg-slate-50 shadow-md rounded-xl p-3 flex flex-col  items-center justify-center gap-1"
      >
        <h1 className="text-center text-4xl font-bold capitalize m-1">
          Add Task{" "}
        </h1>
        <span className="w-full">
          <p>Enter title</p>
          <input
            value={taskData.title}
            onChange={(e) => {
              setTaskData({ ...taskData, title: e.target.value });
            }}
            type="text"
            placeholder=""
            className="input  w-full mb-5 bg-[#eee]  text-[18px] text-[#383838] "
          />
        </span>
        <span className="w-full">
          <p>Enter status</p>
          <input
            value={taskData.status}
            onChange={(e) => {
              setTaskData({ ...taskData, status: e.target.value });
            }}
            type="text"
            placeholder=""
            className="input  w-full mb-5 bg-[#eee]  text-[18px] text-[#383838] "
          />
        </span>

        <span className="w-full">
          <p>Enter priority</p>
          <input
            value={taskData.priority}
            onChange={(e) => {
              setTaskData({ ...taskData, priority: e.target.value });
            }}
            type="text"
            placeholder=""
            className="input  w-full mb-5 bg-[#eee]  text-[18px] text-[#383838] "
          />
        </span>
        <span className="w-full">
          <p>Enter duration date</p>
          <input
            value={taskData.due_date}
            onChange={(e) => {
              setTaskData({ ...taskData, due_date: e.target.value });
            }}
            type="text"
            placeholder=""
            className="input  w-full mb-5 bg-[#eee]  text-[18px] text-[#383838] "
          />
        </span>

        <span className="w-full ">
          <p>Add description</p>
          <textarea
            value={taskData.description}
            onChange={(e) => {
              setTaskData({ ...taskData, description: e.target.value });
            }}
            className="input  w-full  h-[200px]  bg-[#eee]  text-[18px] text-[#383838] flex-1 p-1 text-justify"
            placeholder="Add Details"
          ></textarea>
        </span>
        <button className="btn  w-full capitalize">
          {loading ? <span className="loading loading-spinner"></span> : "Add"}
        </button>
      </form>
    </div>
  );
}

export default AddTask;
