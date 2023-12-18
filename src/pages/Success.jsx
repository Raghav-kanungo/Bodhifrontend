import React from "react";
import "./success.css";
// isko me dekh lega !!
const Success = () => {
  return (
    <div className="success-container  ">
      <h1 className="">Order Received!</h1>

      <div className="content pt-[180px] ">
        <svg width="400" height="400">
          <circle
            fill="none"
            stroke="#68E534"
            stroke-width="20"
            cx="200"
            cy="200"
            r="190"
            strokeLinecap="round"
            transform="rotate(-90 200 200)"
            className="circle"
          />
          <polyline
            fill="none"
            stroke="#68E534"
            points="88,214 173,284 304,138"
            strokeWidth="24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="tick"
          />
        </svg>
      </div>
    </div>
  );
};

export default Success;
