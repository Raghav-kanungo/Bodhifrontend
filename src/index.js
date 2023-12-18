import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { store } from "./redux/Store";
import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";

import { createContext } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));

export const server = "https://bodhi-apis.onrender.com/api/v1";

export const Context = createContext({ isAuthenticated: false });

const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setloading] = useState(false);
  const [user, setUser] = useState({});
  return (
    <Context.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        loading,
        setloading,
        user,
        setUser,
      }}
    >
      <App />
    </Context.Provider>
  );
};

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <AppWrapper />
      <Toaster />
    </Provider>
  </BrowserRouter>
);
