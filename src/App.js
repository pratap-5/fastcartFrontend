import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Navigate, Route, Routes } from "react-router-dom";

import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
import Header from "./common/Header";
import AddTask from "./pages/AddTask";
import UpdateTask from "./pages/UpdateTask";



function App() {
  const { authUser } = useAuthContext();
  return (
    <div className=" relative  w-full h-auto  ]">
      <Header/>
  
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <Signup />}
        />
        <Route
          path="/addtask"
          // element={!authUser ? <Navigate to="/login" /> : <AddTask />}
          element={ <AddTask />}
          

        />



        <Route
          path="/updateTask"
          // element={!authUser ? <Navigate to="/login" /> : <AddTask />}
          element={ <UpdateTask/>}
          

        />


      </Routes>
   

   
      <Toaster />
    </div>
  );
}

export default App;
