import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Order from "./pages/Order";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import NotFound from "./pages/NotFound";
import { useContext, useEffect } from "react";
import axios from "axios";

import { Context, server } from ".";

const App = () => {
  const { setUser, setIsAuthenticated, setuserID } = useContext(Context);
  useEffect(() => {
    axios
      .get(`${server}/users/me`, {
        withCredentials: true,
      })
      .then((res) => {
        setUser(res.data.user);
        setIsAuthenticated(true);
        setuserID(res.data.user._id);
      })
      .catch((e) => {
        setUser({});
        setIsAuthenticated(false);
      });
  }, []);

  return (
    <div>
      <div className="bg-[#dfe7dd]">
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/order" element={<Order />} />

        {/* 404 route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
