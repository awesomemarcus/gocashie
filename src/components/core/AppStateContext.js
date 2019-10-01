import React, { useReducer } from 'react';
import reducer, { initialState } from '../../reducer';

const AppStateContext = React.createContext([{}, () => {}]);

const AppStateProvider = props => {


	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<AppStateContext.Provider value={[state, dispatch]}>
			{props.children}
		</AppStateContext.Provider>
	);
};

export { AppStateContext, AppStateProvider };
