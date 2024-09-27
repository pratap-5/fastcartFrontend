import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import Task from "../components/Task";
import { LuFolderMinus } from "react-icons/lu";

function Home() {
  return (
    <div className=" w-full  min-h-screen max-h-full  bg-[#e6dfe8]  p-2 grid grid-cols-3 gap-2  ">
      <Task
        taskName={"api add"}
        taskDetails={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
      temporibus eligendi omnis iure consequuntur quo non blanditiis, deleniti,
      veniam doloribus fuga ratione pariatur asperiores animi! Voluptate rem
      esse reiciendis ipsam.`}
        status={"progress"}
        priority={"mid"}
        due_date={"23 may"}
        user={"admin"}
      />
      <Task
        taskName={"api add"}
        taskDetails={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
      temporibus eligendi omnis iure consequuntur quo non blanditiis, deleniti,
      veniam doloribus fuga ratione pariatur asperiores animi! Voluptate rem
      esse reiciendis ipsam.`}
        status={"progress"}
        priority={"mid"}
        due_date={"23 may"}
        user={"admin"}
      />{" "}
      <Task
        taskName={"api add"}
        taskDetails={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
    temporibus eligendi omnis iure consequuntur quo non blanditiis, deleniti,
    veniam doloribus fuga ratione pariatur asperiores animi! Voluptate rem
    esse reiciendis ipsam.`}
        status={"progress"}
        priority={"mid"}
        due_date={"23 may"}
        user={"admin"}
      />{" "}
      <Task
        taskName={"api add"}
        taskDetails={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
  temporibus eligendi omnis iure consequuntur quo non blanditiis, deleniti,
  veniam doloribus fuga ratione pariatur asperiores animi! Voluptate rem
  esse reiciendis ipsam.`}
        status={"progress"}
        priority={"mid"}
        due_date={"23 may"}
        user={"admin"}
      />{" "}
      <Task
        taskName={"api add"}
        taskDetails={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
temporibus eligendi omnis iure consequuntur quo non blanditiis, deleniti,
veniam doloribus fuga ratione pariatur asperiores animi! Voluptate rem
esse reiciendis ipsam.`}
        status={"progress"}
        priority={"mid"}
        due_date={"23 may"}
        user={"admin"}
      />{" "}
      <Task
        taskName={"api add"}
        taskDetails={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
      temporibus eligendi omnis iure consequuntur quo non blanditiis, deleniti,
      veniam doloribus fuga ratione pariatur asperiores animi! Voluptate rem
      esse reiciendis ipsam.`}
        status={"progress"}
        priority={"mid"}
        due_date={"23 may"}
        user={"admin"}
      />
    </div>
  );
}

export default Home;
