import React from 'react';
import Main from '../core/Main';
import { format } from 'path';
import moment from 'moment';
import styled from 'styled-components';
import useAppActions from '../core/useAppActions';

const HistoryStyled = styled.div``;

export default () => {
	const {
		activeType,
		payments: { list: paymentsList },
		contributions: { list: contributionsList },
	} = useAppActions();

	console.log(activeType);

	const list = activeType === 'contributor' ? contributionsList : paymentsList;

	return (
		<Main>
			<HistoryStyled id="history" className="p-3 py-4 flex flex-col">
				{list.length > 0
					? list.map(payment => (
							<div
								key={payment._id}
								className="dashboard-box mb-3 bg-white rounded shadow-md overflow-hidden">
								<div className="head bg-gray-100 py-2 px-3 border-b flex flex-row justify-between">
									<h1 className="text-sm text-gray-600">
										{moment(payment.date_created).format('MMMM DD YYYY')}
									</h1>
									{payment.status && (
										<span className="uppercase bg-green-600 font-bold text-xs rounded text-white tracking-wide px-1">
											<small>{payment.status}</small>
										</span>
									)}
								</div>
								<div className="body p-3">
									<p className="text-2xl tracking-wider">
										PHP {payment.amount}.00
									</p>
								</div>
							</div>
					  ))
					: ''}
			</HistoryStyled>
		</Main>
	);
};
