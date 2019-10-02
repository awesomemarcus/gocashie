import React from 'react';

import Main from '../core/Main';
import Contributor from './Contributor';
import Creditor from './Creditor';
import useAppActions from '../core/useAppActions';

export default ({ location: { search } }) => {
	const { activeType: accountType } = useAppActions();
	const UserTypeComponent = accountType === 'creditor' ? Creditor : Contributor;

	return (
		<Main>
			<div id="dashboard" className="p-3 py-4 flex flex-col">
				<UserTypeComponent />
			</div>
		</Main>
	);
};
