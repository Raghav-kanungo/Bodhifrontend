import React from "react";
import { useState } from "react";

// exepected a form with following fields
// address  , city  , state  , country , pincode  , phoneNo
// submit button

// expected data -->

/*
{
  "shippingInfo": {
    "address": "123 Main Street",
    "city": "Cityville",
    "state": "Stateland",
    "country": "Countryland",
    "pinCode": 12345,
    "phoneNo": 9876543210
  },
  
  "totalPrice": 100000,
}
  ⚠⚠⚠⚠ make sure to name field same as above 
*/

const Order = () => {
  const [formData, setFormData] = useState({
    address: "",
    city: "",
    state: "",
    country: "",
    pinCode: " ",
    phoneNo: "",
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
          <div className="col-span-2 flex justify-center items-center">
            <div className="min-w-[450] px-8">
              <div className="mb-8">
                <h1 className="text-3xl font-medium ">
                  Welcome to bodhi's store
                </h1>
                <p>Please enter your shipping address.....</p>
                <form onSubmit={submitHandler}>
                  <div className="mb-3">
                    <label className="font-medium mb-2 flex">Address</label>
                    <input
                      type="text"
                      placeholder="Enter your address"
                      name="address"
                      className="w-full border rounded-md bg-transparent border-gray-400 p-3"
                      onChange={changeHandler}
                    ></input>
                  </div>
                  <div className="mb-3">
                    <label className="font-medium mb-2 flex">City</label>
                    <input
                      type="text"
                      placeholder="Enter your city"
                      name="city"
                      className="w-full border rounded-md bg-transparent border-gray-400 p-3"
                      onChange={changeHandler}
                    ></input>
                  </div>
                  <div className="mb-3">
                    <label className="font-medium mb-2 flex">State</label>
                    <input
                      type="text"
                      placeholder="Enter your state"
                      name="state"
                      className="w-full border rounded-md bg-transparent border-gray-400 p-3"
                      onChange={changeHandler}
                    ></input>
                  </div>
                  <div className="mb-3">
                    <label className="font-medium mb-2 flex">Country</label>
                    <input
                      type="text"
                      placeholder="Enter your country"
                      name="country"
                      className="w-full border rounded-md bg-transparent border-gray-400 p-3"
                      onChange={changeHandler}
                    ></input>
                  </div>
                  <div className="mb-3">
                    <label className="font-medium mb-2 flex">Pincode</label>
                    <input
                      type="text"
                      placeholder="Enter your pincode"
                      name="pinCode"
                      className="w-full border rounded-md bg-transparent border-gray-400 p-3"
                      onChange={changeHandler}
                    ></input>
                  </div>
                  <div className="mb-3">
                    <label className="font-medium mb-2 flex">
                      Phone number
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your phoneno"
                      name="phoneNo"
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

export default Order;
