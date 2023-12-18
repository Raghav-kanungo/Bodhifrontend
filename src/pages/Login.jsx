import React from "react";
import { useState } from "react";

// exepected a form with following 3 fileds
// email  , password
// submit button

// expected data -->
/*

{
    "email" : "abcxx@gmail.com" , 
    "password" : "q1w2e3r4t5"
}

  ⚠⚠⚠⚠ make sure to name field same as above 
*/

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  function changeHandler(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      // console.log(prevFormData);
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }
  function submitHandler(event) {
    event.preventDefault();
    console.log("Form Give DAta");
    console.log(formData);
  }
  return (
    <div className="flex flex-col flex-auto w-full h-screen  ">
      <div className="h-full">
        <div className="grid grid-cols-3 h-full">
          <div className="bg-green-300 "></div>
          <div c6lassName="col-span-2 flex justify-center items-center">
            <div className="min-w-[450] px-8">
              <div className="mb-8">
                <h1 className="text-3xl font-medium ">
                  Welcome to bodhi's store
                </h1>
                <p>Please enter your credentials to sign in</p>
                <form onSubmit={submitHandler}>
                  <div className="mb-3">
                    <label className="font-medium mb-2 flex">Email</label>
                    <input
                      type="text"
                      placeholder="Enter your email"
                      name="email"
                      className="w-full border rounded-md bg-transparent border-gray-400 p-3"
                      onChange={changeHandler}
                    ></input>
                  </div>
                  <div className="mb-3">
                    <label className="font-medium mb-2 flex">Password</label>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      name="password"
                      className="w-full border rounded-md bg-transparent border-gray-400 p-3"
                      onChange={changeHandler}
                    ></input>
                  </div>
                  <input
                    type="submit"
                    value="Submit"
                    className="block bg-blue-700 text-white w-full py-2 px-8 rounded"
                  ></input>
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
