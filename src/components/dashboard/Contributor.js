import React from "react";
import styled from "styled-components";
import useAppActions from "../core/useAppActions";
import moment from "moment";

export default () => {
  const { contributions } = useAppActions();
  return (
    <div id="contributor" className="flex flex-col">
      <div className="dashboard-box mb-3 bg-white rounded shadow-md overflow-hidden">
        <div className="head bg-gray-100 py-2 px-3 border-b">
           <h1 className="font-bold text-sm">Total Contribution</h1> 
        </div>
        <div className="body p-3">
          <p className="text-2xl tracking-wider">PHP {contributions && contributions.total}.00</p>
        </div>
      </div>

      {/* <div className="dashboard-box mb-3 bg-white rounded shadow-md overflow-hidden">
        <div className="head bg-gray-100 py-2 px-3 border-b">
           <h1 className="font-bold text-sm">Contribution Amount / Month</h1> 
        </div>
        <div className="body p-3">
          <p className="text-2xl tracking-wider">$200.00</p>
        </div>
      </div> */}

      <div className="dashboard-box mb-3 bg-white rounded shadow-md overflow-hidden">
        <div className="head bg-gray-100 py-2 px-3 border-b">
           <h1 className="font-bold text-sm">Next Contribution Date</h1> 
        </div>
        <div className="body p-3">
          <p className="text-2xl tracking-wider">{contributions.list.length > 0 ? moment(contributions.list[0].date_created).add(1, "month").format('MMMM DD YYYY') : ''}</p>
        </div>
      </div>

      <div className="dashboard-box mb-3 bg-white rounded shadow-md overflow-hidden">
        <div className="head bg-gray-100 py-2 px-3 border-b">
           <h1 className="font-bold text-sm">Estimated Earnings</h1> 
        </div>
        <div className="body p-3">
          <p className="text-2xl tracking-wider">----</p>
        </div>
      </div>
    </div>
  );
};
