import React, { useState } from "react";
import toast from "react-hot-toast";
import useData from "../zustand/useData";
import { useAuthContext } from "../context/AuthContext";

function useSignup() {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const { backendUrl } = useData();
  const signup = async ({
    fullName,
    email,
    password,
    confirmPassword,

  }) => {
    try {
      console.log(backendUrl);
      if (!checkData(fullName, email, password, confirmPassword))
        return;
      setLoading(true);
      const res = await fetch(`${backendUrl}/api/signup`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          password,
          confirmPassword,
      
        }),
      });

      const data = await res.json();

      if (data.error) {
        toast.error(data.error)
        throw new Error(data.error);
      }
      //localstorage

      localStorage.setItem("user", JSON.stringify(data));

      //context
      setAuthUser(data);
    } catch (error) {
      toast(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
}

export default useSignup;

const checkData = (fullName, email, password, confirmPassword) => {
  if (!fullName || !email || !password || !confirmPassword ) {
    toast.error("fiil all  the fields");

    return false;
  }

  if (password !== confirmPassword) {
    toast.error("password did not match");
    return false;
  }
  if (password.length < 6) {
    toast.error("password must be greater than six character");
    return false;
  }
  return true;
};
