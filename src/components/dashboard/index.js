import React, { useState, useEffect } from 'react';
import queryString from 'query-string';

import Main from '../core/Main';
import Contributor from './Contributor';
import Creditor from './Creditor';

export default ({ location: { search } }) => {
  const [ accountType, setAccountType] = useState(null);
  const UserTypeComponent = accountType === 'creditor' ? Creditor : Contributor;
  
  useEffect(() => {
    setAccountType(queryString.parse(search).type);
  }, [search])

    return (
      <Main>
        <div id="dashboard" className="p-3 py-4 flex flex-col">
          <UserTypeComponent />
        </div>
      </Main>
    );
}