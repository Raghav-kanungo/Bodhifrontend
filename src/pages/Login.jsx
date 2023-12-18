import React, { useContext } from "react";
import { useState } from "react";
import { NavLink, Navigate } from "react-router-dom";
import { Context } from "..";
import axios from "axios";
import toast from "react-hot-toast";
import { server } from "..";

const Login = () => {
  const { isAuthenticated, setIsAuthenticated, loading, setloading } =
    useContext(Context);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function changeHandler(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  const submitHandler = async (event) => {
    setloading(true);
    event.preventDefault();
    console.log("Form Give Data");
    console.log(formData);

    try {
      const response = await axios.post(`${server}/users/login`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      const { data } = response;
      toast.success(data.message);
      setIsAuthenticated(true);
      setloading(false);
    } catch (error) {
      setIsAuthenticated(false);
      console.error(error);
      setloading(false);
      toast.error(error.response.data.message);
    }
  };
  if (isAuthenticated) return <Navigate to={"/"} />;
  return (
    <div className="flex flex-col flex-auto w-full h-screen">
      <div className="h-full">
        <div className="grid grid-cols-3 h-full">
          <div className="bg-green-300"></div>
          <div className="col-span-2 flex justify-center items-center">
            <div className="min-w-[450] px-8">
              <div className="mb-8">
                <h1 className="text-3xl font-medium p-2 ">
                  Login to Bodhi's Store
                </h1>
                <p className="p-4">Please enter your credentials to sign in</p>
                <form onSubmit={submitHandler}>
                  <div className="mb-3">
                    <label className="font-medium mb-2 flex">Email</label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      name="email"
                      className="w-full border rounded-md bg-transparent border-gray-400 p-3"
                      onChange={changeHandler}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="font-medium mb-2 flex">Password</label>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      name="password"
                      className="w-full border rounded-md bg-transparent border-gray-400 p-3"
                      onChange={changeHandler}
                      required
                    />
                  </div>
                  <input
                    type="submit"
                    value="Login"
                    disabled={loading}
                    className="block bg-blue-700 text-white w-full py-2 px-8 rounded hover:bg-blue-800 transition-all delay-150  "
                  />

                  <div className="text-center m-2">OR</div>

                  <NavLink to="/register" disabled={loading}>
                    <p className="block bg-green-700 text-white w-full py-2 px-8 rounded hover:bg-green-800 transition-all delay-150 text-center mt-2">
                      Sign Up
                    </p>
                  </NavLink>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
