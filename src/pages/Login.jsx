import React, { useState } from "react";
import Header from "../common/Header";

import Signup from "./Signup";

import { BsFillEyeFill } from "react-icons/bs";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();
  const [isPass, setPass] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    login({ email, password });
  };
  return (
    <>
      <div className=" w-full h-screen  bg-[#e6dfe8]">
       
        <div className="flex justify-center items-center p-3 h-[85%] ">
          <form
            onSubmit={handleSubmit}
            className=" w-full h-full  md:w-[700px]  border bg-slate-50 shadow-md rounded-xl p-3"
          >
            <h1 className="text-center text-5xl font-semibold">LoginPage</h1>
            <div className="divider"></div>

            <input
              className="input  w-full mb-5 bg-[#eee]  text-[18px] text-[#383838]  "
              placeholder="Enter email"
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
            <span className="relative">
              <input
                className="input bg-[#eee] w-full mb-5  text-[18px] text-[#383838] "
                placeholder="Enter password"
                type={isPass ? "password" : "text"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              />
              <span
                onClick={() => {
                  setPass(!isPass);
                }}
                className="absolute top-[-8px] cursor-pointer right-2 border text-[#353535] text-[30px] bg-[#f5f4f4] p-1 rounded-full "
              >
                {isPass ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
              </span>
            </span>

            <button className="btn w-full">
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Login"
              )}
            </button>
            <p>
              forgot password?{" "}
              <Link
                to="/signup"
                className="  text-sm  hover:underline hover:text-blue-600"
              >
                create account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
