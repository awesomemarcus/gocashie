import React from "react";

export default () => {
  return (
    <form action="" className="my-40">
      <div id="addFund" className="flex flex-col my-auto">
        <div className="form-item mb-3">
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            id=""
            className="border shadow-inner rounded p-2 w-full"
          />
        </div>
        <div className="form-item mb-3">
          <button className="w-full bg-blue-700 hover:bg-green-800 text-white font-bold rounded py-2 text-xl">
            PAY MY LOAN
          </button>
        </div>
      </div>
    </form>
  );
};
