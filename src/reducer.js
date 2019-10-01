export default (state, { type, payload }) => {
	console.log(type, payload);
	switch (type) {
		case 'SIGN_UP':
			return {
				...state,
				userInfo: payload.user,
				loggedUser: { username: payload.user.username },
			};

		case 'LOG_IN':
			return {
				...state,
				loggedUser: {
					...payload,
				},
			};

		case 'SETUP_FUND_METHOD':
			return {
				...state,
				users: [...state.users, payload.user],
				userInfo: payload.user,
			};

		case 'SETUP_ACCOUNT_TYPE':
			return {
				...state,
				activeType: payload.type,
			};

		case 'ADD_CONTRIBUTION':
			return {
				...state,
				contributions: {
					...state.contributions,
					list: [...state.contributions.list, payload.contribution],
					total: state.contributions.total + parseInt(payload.amount),
				},
			};

		default:
			return state;
	}
};
