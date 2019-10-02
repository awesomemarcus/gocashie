import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { faPlusCircle, faHistory } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useAppActions from './useAppActions';

const TabBarStyled = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 60px;
`;

export const TabBarContributor = ({ accountType }) => {
	const {
		contributions: { list },
	} = useAppActions();
	const lastContributionMonth =
		list.length > 0 ? moment(list[0].date_created).month() : 0;
	const currentMonth = moment().month();
	const isBtnDisabled = lastContributionMonth === currentMonth;

	return (
		<TabBarStyled className="flex flex-row items-center justify-around bg-blue-700">
			{isBtnDisabled ? (
				<p className="font-medium text-gray-500">
					<FontAwesomeIcon icon={faPlusCircle} className="mr-2" /> ADD FUND
				</p>
			) : (
				<Link
					to={{
						pathname: '/fund',
					}}
					className="font-medium text-white">
					<FontAwesomeIcon icon={faPlusCircle} className="mr-2" /> ADD FUND
				</Link>
			)}
			<Link to="/fund/history" className="text-white font-medium">
				<FontAwesomeIcon icon={faHistory} className="mr-2" /> HISTORY
			</Link>
		</TabBarStyled>
	);
};

export const TabBarCreditor = ({ accountType }) => {
	const { loans } = useAppActions();

	return (
		<TabBarStyled className="flex flex-row items-center justify-around bg-blue-700">
			{loans.outstanding_balance > 0 ? (
				<Link
					to={{
						pathname: '/fund',
					}}
					className="text-white font-medium">
					<FontAwesomeIcon icon={faPlusCircle} className="mr-2" /> ADD PAYMENT
				</Link>
			) : (
				<Link
					to={{
						pathname: '/fund',
					}}
					className="text-white font-medium">
					<FontAwesomeIcon icon={faPlusCircle} className="mr-2" /> NEW LOAN
				</Link>
			)}
			<Link to="/fund/history" className="text-white font-medium">
				<FontAwesomeIcon icon={faHistory} className="mr-2" /> HISTORY
			</Link>
		</TabBarStyled>
	);
};
