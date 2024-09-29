import React, { useState } from "react";
import useData from "../zustand/useData";
import { useNavigate } from "react-router-dom";
import useDeleteTask from "../hooks/useDeleteTask";

function Task({
  title,
  description,
  status,
  priority,
  due_date,
  user,
  task_id,
}) {
  const navigate = useNavigate();
  const { loading, deleteTask } = useDeleteTask();
  const { setTaskData } = useData();

  return (
    <div className="bg-slate-400 text-primary-content w-full h-full  card">
      <div className="card-body">
        <h2 className="card-title text-4xl capitalize">{title}</h2>
        <hr />

        <span className="flex gap-1 flex-col">
          <h2 className=" font-medium text-slate-700 capitalize">
            status :{status}
          </h2>
          <h2 className=" font-medium text-slate-700 capitalize">
            priority:{priority}
          </h2>
          <h2 className=" font-medium text-slate-700 capitalize">
            date:{due_date}
          </h2>
          <h2 className=" font-medium text-slate-700 capitalize">
            created by :{user}
          </h2>
        </span>

        <div className="flex-1">
          <p className="text-green-700">description</p>
          <p> {description}</p>
        </div>

        <div className="card-actions justify-end c">
          <button
            onClick={() => {
              setTaskData({
                title,
                description,
                status,
                priority,
                due_date,
                task_id,
              });
              navigate(`/updateTask/${task_id}`);
            }}
            className="capitalize btn"
          >
            update
          </button>
          <button
            onClick={() => {
              deleteTask(task_id);
              navigate("/");
              window.location.reload();
            }}
            className="capitalize btn"
          >
            {loading ? (
              <span className="loading loading-spinner"> </span>
            ) : (
              "delete"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Task;
