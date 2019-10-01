import React, { useReducer } from 'react';
import reducer from '../../reducer';

const AppStateContext = React.createContext([{}, () => {}]);

const AppStateProvider = props => {
	const initialState = {
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
	};

	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<AppStateContext.Provider value={[state, dispatch]}>
			{props.children}
		</AppStateContext.Provider>
	);
};

export { AppStateContext, AppStateProvider };
