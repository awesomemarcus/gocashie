import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../auth';
import queryString from 'query-string';
import styled from 'styled-components';
import { ReactComponent as ContributorIMG } from '../../assets/images/contributor.svg';
import { ReactComponent as CreditorIMG } from '../../assets/images/creditor.svg';
import useAppActions from '../core/useAppActions';

const RadioStyled = styled.label`
	position: relative;
	user-select: none;
	text-align: center;
	cursor: pointer;
	font-weight: bold;

	input {
		position: absolute;
		opacity: 0;
		cursor: pointer;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 6;
	}

	.marker {
		position: relative;
		z-index: 5;
		&:before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}

		span {
			line-height: 2.5rem;
		}
	}

	input:checked ~ .marker {
		background-color: #fff;

		&:after {
			content: '';
			position: absolute;
			top: 50%;
			left: 10px;
			transform: translateY(-50%);
			width: 15px;
			height: 15px;
			border-radius: 15px;
			background-color: #00bdac;
		}
	}

	input ~ .marker {
		background-color: #4199e1;
	}
`;

export default ({ location: { search } }) => {
	const { method, setUpFundMethod } = useAppActions();

	const HeaderText = 'Setup your Fund Method:';

	function onSelectMethod(e) {
		setUpFundMethod(e.currentTarget.value);
	}

	return (
		<AuthLayout>
			<div id="method" className="flex flex-col">
				<h2 className="font-bold text-center my-4">{HeaderText}</h2>
				<div id="methodType" className="flex flex-col w-11/12 mx-auto">
					<RadioStyled className="mb-3" htmlFor="">
						<input
							type="radio"
							name="method"
							value="palawan"
							onClick={onSelectMethod}
						/>
						<div className="marker rounded">
							<span>Palawan</span>
						</div>
					</RadioStyled>
					<RadioStyled className="mb-3" htmlFor="">
						<input
							type="radio"
							name="method"
							value="mlhuilier"
							onClick={onSelectMethod}
						/>
						<div className="marker rounded">
							<span>MLhuillier</span>
						</div>
					</RadioStyled>
					<RadioStyled className="mb-3" htmlFor="">
						<input
							type="radio"
							name="method"
							value="cebuana"
							onClick={onSelectMethod}
						/>
						<div className="marker rounded">
							<span>Cebuana Lhuillier</span>
						</div>
					</RadioStyled>
					{method && (
						<Link
							to={{
								pathname: '/setup/account/type',
							}}
							className="mt-5 w-100 bg-teal-400 hover:bg-teal-500 text-white font-bold rounded py-2 text-xl text-center">
							NEXT
						</Link>
					)}
				</div>
			</div>
		</AuthLayout>
	);
};
