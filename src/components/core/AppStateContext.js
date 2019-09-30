import React, { useState } from "react";

const AppStateContext = React.createContext([{}, () => {}]);

const AppStateProvider = props => {
  const [state, setState] = useState({
    users: [],
    type: null,
    funds: [],
  });

  return (
    <AppStateContext.Provider value={[state, setState]}>
      {props.children}
    </AppStateContext.Provider>
  );
};

export { AppStateContext, AppStateProvider };
