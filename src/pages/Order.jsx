import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { isEqual } from "lodash";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { Context, server } from "../index";
import toast from "react-hot-toast";

//#TO-DO
// data aa gya hai peeche vale page se !!
// price ka bacha hai !!
// or api me dalna hai data

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

const Order = (params) => {
  const [data, setData] = useState([]);
  const { setloading, userID } = useContext(Context);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const dataParam = urlParams.get("data");

    if (dataParam) {
      try {
        const decodedData = decodeURIComponent(dataParam);
        const parsedData = JSON.parse(decodedData);

        if (!isEqual(parsedData, data)) {
          setData(parsedData);
        }
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    }
  }, [data]);

  console.log("hererit is ", data);

  const [formData, setFormData] = useState({
    address: "",
    city: "",
    state: "",
    country: "",
    pinCode: "",
    phoneNo: "",
  });

  function changeHandler(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }
  const navigate = useNavigate();

  async function submitHandler(event) {
    event.preventDefault();

    const order = {
      shippingInfo: formData,
      orderItems: data.cart,
      user: userID,
      totalPrice: data.totalAmount,
      createdAt: Date.now(),
      completed: false,
    };

    console.log(order);

    try {
      const response = await axios.post(`${server}/order/add`, order, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      const { data } = response;
      if (data.success == false) {
        await toast.error(data.message);
        navigate("/login");
      } else navigate("/success");
    } catch (error) {
      console.log("error ba ", error);
      setloading(false);
      toast.error(error.response.data.message);
    }
  }

  return (
    <div className="flex flex-col flex-auto w-full h-screen">
      <div className="h-full">
        <div className="grid grid-cols-3 h-full">
          <div className="bg-green-300"></div>
          <div className="col-span-2 flex justify-center items-center">
            <div className="min-w-[450] px-8">
              <div className="mb-8">
                <h1 className="text-3xl font-medium p-2 ">
                  Final Step To your order
                </h1>
                <p className="p-4">Please enter your shipping address.....</p>
                <form onSubmit={submitHandler}>
                  <div className="mb-3">
                    <label className="font-medium mb-2 flex">Address</label>
                    <input
                      type="text"
                      placeholder="Enter your address"
                      name="address"
                      className="w-full border rounded-md bg-transparent border-gray-400 p-3"
                      onChange={changeHandler}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="font-medium mb-2 flex">City</label>
                    <input
                      type="text"
                      placeholder="Enter your city"
                      name="city"
                      className="w-full border rounded-md bg-transparent border-gray-400 p-3"
                      onChange={changeHandler}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="font-medium mb-2 flex">State</label>
                    <input
                      type="text"
                      placeholder="Enter your state"
                      name="state"
                      className="w-full border rounded-md bg-transparent border-gray-400 p-3"
                      onChange={changeHandler}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="font-medium mb-2 flex">Country</label>
                    <input
                      type="text"
                      placeholder="Enter your country"
                      name="country"
                      className="w-full border rounded-md bg-transparent border-gray-400 p-3"
                      onChange={changeHandler}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="font-medium mb-2 flex">Pincode</label>

                    <input
                      type="text"
                      placeholder="Enter your 6-digit pincode"
                      name="pinCode"
                      pattern="\d{6}"
                      title="Please enter a 6-digit pincode"
                      maxLength="6"
                      className="w-full border rounded-md bg-transparent border-gray-400 p-3"
                      onChange={changeHandler}
                      onKeyPress={(e) => {
                        // Allow only numeric input
                        if (e.which < 48 || e.which > 57) {
                          e.preventDefault();
                        }
                      }}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="font-medium mb-2 flex">
                      Phone number
                    </label>

                    <input
                      type="text"
                      placeholder="Enter your 10-digit phone number"
                      name="phoneNo"
                      pattern="\d{10}"
                      title="Please enter a 10-digit phone number"
                      maxLength="10"
                      className="w-full border rounded-md bg-transparent border-gray-400 p-3"
                      onChange={changeHandler}
                      onKeyPress={(e) => {
                        // Allow only numeric input
                        if (e.which < 48 || e.which > 57) {
                          e.preventDefault();
                        }
                      }}
                      required
                    />
                  </div>

                  <input
                    type="submit"
                    value="Submit"
                    className="block bg-blue-700 text-white w-full py-2 px-8 rounded hover:bg-blue-800 transition-all delay-150 "
                  />
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
