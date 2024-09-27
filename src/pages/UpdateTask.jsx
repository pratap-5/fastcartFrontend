import React, { useState } from "react";
import useData from "../zustand/useData";

function UpdateTask() {
  const { taskName, taskDetails } = useData();

  const [name, setName] = useState(taskName);
  const [details, setDetails] = useState(taskDetails);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, details);
  };

  return (
    <div className=" w-full  flex  items-center justify-center min-h-screen max-h-full  bg-[#e6dfe8]  p-2  ">
      <form
        onSubmit={handleSubmit}
        className=" w-full h-full  md:w-[700px] md:h-[500px] border bg-slate-50 shadow-md rounded-xl p-3 flex flex-col gap-2 items-center justify-center"
      >
        <h1 className="text-center text-4xl font-bold capitalize">Update Task </h1>
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          placeholder="Enter Project Name"
          className="input  w-full mb-5 bg-[#eee]  text-[18px] text-[#383838] "
        />


        <textarea
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
          className="input  w-full  mb-5 bg-[#eee]  text-[18px] text-[#383838] flex-1 p-1 text-justify"
          placeholder="Add Details"
        ></textarea>

        <button className="btn  w-full capitalize">update</button>
      </form>
    </div>
  );
}

export default UpdateTask;
