import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { AppStateContext } from './AppStateContext';

const useAppActions = () => {
	const [state, setState] = useContext(AppStateContext);
	const history = useHistory();

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
					setState(state => ({
						...state,
						loggedUser: {
							username: credentials.username,
							type: user.type,
						},
					}));
					history.push('/');
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
		setState(state => ({
			...state,
			userInfo: user,
			loggedUser: {
				username: user.username,
			},
		}));

		setTimeout(() => {
			history.push('/setup/account/type');
		}, 500);
	}

	function setAccountType(type) {
		setState(state => ({
			...state,
			loggedUser: { ...state.loggedUser, type },
			userInfo: { ...state.userInfo, type },
		}));

		setTimeout(() => {
			history.push('/setup/account/method');
		}, 500);
	}

	function setUpFundAndPaymentMethod(method) {
		const user = { ...state.userInfo, method };
		setState(state => ({
			...state,
			users: [...state.users, user],
			userInfo: user,
		}));

		setTimeout(() => {
			history.push('/');
		}, 500);
	}

	useEffect(() => {
		console.log(state);
	}, [state]);

	return {
		login,
		signUp,
		setAccountType,
		setUpFundAndPaymentMethod,
		usersList: state.users,
		userInfo: state.userInfo,
	};
};

export default useAppActions;
