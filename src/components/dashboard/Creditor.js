import React from "react";
import styled from "styled-components";
import useAppActions from "../core/useAppActions";
import moment from "moment";

export default () => {
  const {
    loans: { list, outstanding_balance }
  } = useAppActions();

  return (
    <div id="contributor" className="flex flex-col">
      <div className="dashboard-box mb-3 bg-white rounded shadow-md overflow-hidden">
        <div className="head bg-gray-100 py-2 px-3 border-b">
          <h1 className="font-bold text-sm">Total Amount of Loans</h1>
        </div>
        <div className="body p-3">
          <p className="text-2xl tracking-wider">
            PHP {list.length > 0 ? list[0].principal_amount : 0}.00
          </p>
        </div>
      </div>

      <div className="dashboard-box mb-3 bg-white rounded shadow-md overflow-hidden">
        <div className="head bg-gray-100 py-2 px-3 border-b">
          <h1 className="font-bold text-sm">Loan Interest</h1>
        </div>
        <div className="body p-3">
          <p className="text-2xl tracking-wider">
            PHP {list.length > 0 ? list[0].interest_amount : 0}.00
          </p>
        </div>
      </div>

      <div className="dashboard-box mb-3 bg-white rounded shadow-md overflow-hidden">
        <div className="head bg-gray-100 py-2 px-3 border-b">
          <h1 className="font-bold text-sm">Next Payment Date</h1>
        </div>
        <div className="body p-3">
          <p className="text-2xl tracking-wider">
            {list.length > 0 ? moment(list[0].next_payment_date).format('MMMM DD YYYY') : ''}
          </p>
        </div>
      </div>

      <div className="dashboard-box mb-3 bg-white rounded shadow-md overflow-hidden">
        <div className="head bg-gray-100 py-2 px-3 border-b">
          <h1 className="font-bold text-sm">Outstanding Balance To Pay</h1>
        </div>
        <div className="body p-3">
          <p className="text-2xl tracking-wider">
            PHP {outstanding_balance}.00
          </p>
        </div>
      </div>
    </div>
  );
};
