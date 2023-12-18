import React from "react";
import dog from "./doggy.jpeg";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center  h-[90vh]">
      <h1 className="text-3xl">Page Not Found</h1>

      <img src={dog} alt="" className=" h-[50vh] rounded-3xl pt-4" />
    </div>
  );
};

export default NotFound;
