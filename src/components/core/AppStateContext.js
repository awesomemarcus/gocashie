import React, { useState } from 'react';

const AppStateContext = React.createContext([{}, () => {}]);

const AppStateProvider = props => {
	const [state, setState] = useState({
		users: [],
		userInfo: null,
		loggedUser: null,
		funds: [],
		loans: {
			list: [],
			total: 0,
			outstanding_balance: 0,
		},
		contributions: {
			list: [],
			total: 0,
		},
		payments: {
			list: [],
			total: 0,
		},
	});

	return (
		<AppStateContext.Provider value={[state, setState]}>
			{props.children}
		</AppStateContext.Provider>
	);
};

export { AppStateContext, AppStateProvider };
