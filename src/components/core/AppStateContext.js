import React, { useReducer } from 'react';
import reducer, { initialState } from '../../reducer';
import useStorage from '../../useStorage';

const AppStateContext = React.createContext([{}, () => {}]);

const AppStateProvider = props => {
	const { localState } = useStorage(initialState);
	const [state, dispatch] = useReducer(reducer, localState);

	return (
		<AppStateContext.Provider value={[state, dispatch]}>
			{props.children}
		</AppStateContext.Provider>
	);
};

export { AppStateContext, AppStateProvider };
