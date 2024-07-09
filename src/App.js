import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Navigate, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
import ProductDetails from "./pages/ProductDetails";
import PaymentPage from "./pages/PaymentPage";
import SearchList from "./pages/SearchList";
import Footer from "./common/Footer";

function App() {
  const { authUser } = useAuthContext();
  return (
    <div className=" relative pt-3 md:pt-5 w-full h-auto  bg-[#150619]">
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
          path="/cart"
          element={authUser ? <Cart /> : <Navigate to="/login" />}
        />
        <Route
          path="/payment/:productId"
          element={authUser ? <PaymentPage /> : <Navigate to="/login" />}
        />
        <Route path="/details/:productId" element={<ProductDetails />} />
        <Route path="/search/:searchItem" element={<SearchList />} />
      </Routes>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
