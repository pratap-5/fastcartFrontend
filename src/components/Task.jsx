import React from "react";
import useData from "../zustand/useData";
import { useNavigate } from "react-router-dom";

function Task({ title, description, status, priority, due_date, user }) {
  const navigate = useNavigate();
  const { setTaskData } = useData();
  return (
    <div className="bg-slate-400 text-primary-content w-full card">
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

        <p>{description}</p>

        <div className="card-actions justify-end c">
          <button
            onClick={() => {
              setTaskData({ title, description, status, priority, due_date });
              navigate("/updateTask");
            }}
            className="capitalize btn"
          >
            update
          </button>
          <button className="capitalize btn">delte</button>
        </div>
      </div>
    </div>
  );
}

export default Task;
