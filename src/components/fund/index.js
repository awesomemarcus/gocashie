import React, { useState, useEffect } from "react";
import queryString from "query-string";

import Main from "../core/Main";
import Add from "./Add";
import Payment from "./Payment";

export default ({ location: { search } }) => {
  const [accountType, setAccountType] = useState(null);
  const [fundType, setFundType] = useState(null);
  const FundComponent = fundType === 'add' ? Add : Payment;

  useEffect(() => {
    const queryObj = queryString.parse(search);
    setAccountType(queryObj.type);
    setFundType(queryObj.fundType);
  }, [search]);

  return (
    <Main>
      <div id="fund" className="p-3 py-4 flex flex-col h-full">
        <FundComponent />
      </div>
    </Main>
  );
};
