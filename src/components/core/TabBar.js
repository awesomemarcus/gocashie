import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
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
	return (
		<TabBarStyled className="flex flex-row items-center justify-around bg-blue-700">
			<Link
				to={{
					pathname: '/fund',
					search: `?type=${accountType}&fundType=add`,
				}}
				className="text-white font-medium">
				<FontAwesomeIcon icon={faPlusCircle} className="mr-2" /> ADD FUND
			</Link>
			<a href="/" className="text-white font-medium">
				<FontAwesomeIcon icon={faHistory} className="mr-2" /> HISTORY
			</a>
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
						search: `?type=${accountType}&fundType=payment`,
					}}
					className="text-white font-medium">
					<FontAwesomeIcon icon={faPlusCircle} className="mr-2" /> ADD PAYMENT
				</Link>
			) : (
				<Link
					to={{
						pathname: '/fund',
						search: `?type=${accountType}&fundType=payment`,
					}}
					className="text-white font-medium">
					<FontAwesomeIcon icon={faPlusCircle} className="mr-2" /> NEW LOAN
				</Link>
			)}
			<a href="/" className="text-white font-medium">
				<FontAwesomeIcon icon={faHistory} className="mr-2" /> HISTORY
			</a>
		</TabBarStyled>
	);
};
