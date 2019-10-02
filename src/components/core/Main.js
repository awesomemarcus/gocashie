import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as ContributorIMG } from '../../assets/images/contributor.svg';
import { ReactComponent as CreditorIMG } from '../../assets/images/creditor.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TabBarContributor, TabBarCreditor } from './TabBar';
import useAppActions from './useAppActions';

const MainStyled = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: calc(100% - 60px);
	overflow-y: auto;
`;

const HeaderStyled = styled.div`
	position: sticky;
	top: 0;
	left: 0;
	z-index: 1;
	width: 100%;
	height: 60px;
`;

const ModalAccountType = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const ModalOverlayStyled = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.6);
`;

export default ({ children }) => {
	const { userInfo, activeType: accountType, setAccountType } = useAppActions();
	const [modalState, setModalState] = useState(false);
	const TypeIMG = accountType === 'creditor' ? CreditorIMG : ContributorIMG;
	const TabBar =
		accountType === 'creditor' ? TabBarCreditor : TabBarContributor;
	const history = useHistory();

	const setModalFn = e => {
		e && e.preventDefault && e.preventDefault();
		setModalState(!modalState);
	};

	function onSelectAccountType(e) {
		e && e.preventDefault && e.preventDefault();
		setAccountType(e.currentTarget.id);
		setModalFn();
	}

	useEffect(() => {
		if (!userInfo) {
			history.push('/login');
		}
	}, [history, userInfo]);

	return (
		<MainStyled className="main">
			<HeaderStyled className="px-2 py-2 bg-blue-600 border-b-1 border-blue-800 flex flex-row items-center">
				<div className="rounded-full border-4 border-gray-400 bg-gray-200 h-12 w-12 mr-2 flex flex-row items-center">
					<Link to="/login">
						<TypeIMG
							style={{ width: '30px', height: '30px' }}
							className="mx-auto"
						/>
					</Link>
				</div>
				<></>
				<Link to="/" className="uppercase font-bold mr-2">
					{accountType}
				</Link>
				<a href="/" onClick={setModalFn}>
					<FontAwesomeIcon icon={faExchangeAlt} className="text-white" />
				</a>
			</HeaderStyled>
			{children}

			{modalState && (
				<>
					<ModalOverlayStyled />
					<ModalAccountType className="flex flex-col w-11/12 bg-white shadow-lg rounded">
						<a
							href="/"
							id="contributor"
							onClick={onSelectAccountType}
							className="py-2 px-3 border-b">
							CONTRIBUTOR
						</a>
						<a
							href="/"
							id="creditor"
							onClick={onSelectAccountType}
							className="py-2 px-3">
							CREDITOR
						</a>
					</ModalAccountType>
				</>
			)}
			<TabBar accountType={accountType} />
		</MainStyled>
	);
};
