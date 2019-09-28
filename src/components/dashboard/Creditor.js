import React from "react";
import styled from "styled-components";

export default () => {
  return (
    <div id="contributor" className="flex flex-col">
      <div className="dashboard-box mb-3 bg-white rounded shadow-md overflow-hidden">
        <div className="head bg-gray-100 py-2 px-3 border-b">
           <h1 className="font-bold text-sm">Total Amount of Loans</h1> 
        </div>
        <div className="body p-3">
          <p className="text-2xl tracking-wider">$1000.00</p>
        </div>
      </div>

      <div className="dashboard-box mb-3 bg-white rounded shadow-md overflow-hidden">
        <div className="head bg-gray-100 py-2 px-3 border-b">
           <h1 className="font-bold text-sm">Payment Amount / Month</h1> 
        </div>
        <div className="body p-3">
          <p className="text-2xl tracking-wider">$200.00</p>
        </div>
      </div>

      <div className="dashboard-box mb-3 bg-white rounded shadow-md overflow-hidden">
        <div className="head bg-gray-100 py-2 px-3 border-b">
           <h1 className="font-bold text-sm">Outstanding Balance To Pay</h1> 
        </div>
        <div className="body p-3">
          <p className="text-2xl tracking-wider">$800.00</p>
        </div>
      </div>
    </div>
  );
};
