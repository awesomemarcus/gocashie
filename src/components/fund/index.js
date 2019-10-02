import React, { useState } from 'react';

import Main from '../core/Main';
import Add from './Add';
import Payment from './Payment';
import useAppActions from '../core/useAppActions';

export default ({ location: { search } }) => {
	const { activeType } = useAppActions();
	const [fundType, setFundType] = useState(null);
	const FundComponent = activeType === 'contributor' ? Add : Payment;

	return (
		<Main>
			<div id="fund" className="p-3 py-4 flex flex-col h-full">
				<FundComponent />
			</div>
		</Main>
	);
};
