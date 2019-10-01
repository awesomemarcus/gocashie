import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import { AppStateContext } from './AppStateContext';

const useAppActions = () => {
	const [state, dispatch] = useContext(AppStateContext);
	const history = useHistory();

	function addContribution(amount) {
		const { contributions } = state;

		const existingContributions = contributions.list.map(
			({ date_created }) =>
				date_created > moment().startOf('month') &&
				date_created < moment().endOf('month')
		);

		if (existingContributions.length) {
			throw new Error('You already have a contribution for this month.');
		}

		const newContribution = {
			_id: contributions.list.length + 1,
			amount,
			date_created: new Date(),
		};

		dispatch({
			type: 'ADD_CONTRIBUTION',
			payload: {
				contribution: newContribution,
				amount,
			},
		});
	}

	/**
	 *
	 *
	 * @param {Object} credentials
	 */
	function login(credentials) {
		if (state.users.length > 0) {
			state.users.map(user => {
				if (
					user.username === credentials.username &&
					user.password === credentials.password
				) {
					dispatch({
						type: 'LOG_IN',
						payload: { ...credentials },
					});

					history.push('/setup/account/type');
				}

				return null;
			});
		}
	}

	/**
	 * signup new user
	 *
	 * @param {Object} user
	 */
	function signUp(user) {
		dispatch({
			type: 'SIGN_UP',
			payload: {
				user,
			},
		});

		setTimeout(() => {
			history.push('/setup/account/method');
		}, 500);
	}

	function setAccountType(type) {
		dispatch({ type: 'SETUP_ACCOUNT_TYPE', payload: { type } });

		setTimeout(() => {
			history.push('/');
		}, 500);
	}

	function setUpFundMethod(method) {
		const user = { ...state.userInfo, method };

		dispatch({ type: 'SETUP_FUND_METHOD', payload: { user } });
	}

	useEffect(() => {
		console.log(state);
	}, [state]);

	return {
		login,
		signUp,
		addContribution,
		setAccountType,
		setUpFundMethod,
		usersList: state.users,
		userInfo: state.userInfo,
		method: state.userInfo && state.userInfo.method,
		loans: state.loans,
		activeType: state.activeType,
	};
};

export default useAppActions;
