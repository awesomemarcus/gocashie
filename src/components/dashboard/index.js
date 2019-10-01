import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Main from '../core/Main';
import Contributor from './Contributor';
import Creditor from './Creditor';
import useAppActions from '../core/useAppActions';

export default ({ location: { search } }) => {
	const { userInfo, activeType: accountType } = useAppActions();
	const history = useHistory();
	const UserTypeComponent = accountType === 'creditor' ? Creditor : Contributor;

	useEffect(() => {
		if (!userInfo) {
			history.push('/login');
		}
	}, [history, userInfo]);

	return (
		<Main>
			<div id="dashboard" className="p-3 py-4 flex flex-col">
				<UserTypeComponent />
			</div>
		</Main>
	);
};
