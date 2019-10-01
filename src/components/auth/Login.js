import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AuthLayout from './';
import useAppActions from '../core/useAppActions';

const FormLayoutStyled = styled.div`
	background: rgba(0, 0, 0, 0.25);
`;

export default () => {
	const [credentials, setCredentials] = useState({
		username: null,
		password: null,
	});

	const { login } = useAppActions();

	function onBlur(e) {
		e && e.preventDefault && e.preventDefault();
		const obj = {};
		console.log(obj);
		obj[e.currentTarget.name] = e.currentTarget.value;
		setCredentials(state => ({ ...state, ...obj }));
	}

	function onSubmit(e) {
		e && e.preventDefault && e.preventDefault();

		login(credentials);
	}

	return (
		<AuthLayout>
			<div className="mb-auto flex flex-col px-2">
				<FormLayoutStyled
					className="w-11/12 mx-auto py-5 px-8 rounded mb-3"
					onSubmit={onSubmit}>
					<form action="" className="flex flex-col">
						<div className="mb-3">
							<input
								type="text"
								id="username"
								name="username"
								placeholder="Username"
								className="appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								onBlur={onBlur}
							/>
						</div>
						<div className="mb-3">
							<input
								type="password"
								id="password"
								name="password"
								placeholder="Password"
								className="appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								onBlur={onBlur}
							/>
						</div>
						<button className="w-full bg-green-400 hover:bg-green-500 text-white font-bold rounded py-2 text-xl">
							LOGIN
						</button>
					</form>
				</FormLayoutStyled>
				<p className="text-center text-white italic text-xs">
					No account yet?{' '}
					<Link to="/signup" className="text-yellow-400">
						Create an account.
					</Link>
				</p>
			</div>
		</AuthLayout>
	);
};
