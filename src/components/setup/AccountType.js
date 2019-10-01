import React from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../auth';
import { ReactComponent as ContributorIMG } from '../../assets/images/contributor.svg';
import { ReactComponent as CreditorIMG } from '../../assets/images/creditor.svg';
import useAppActions from '../core/useAppActions';

export default () => {
	const { setAccountType } = useAppActions();
	return (
		<AuthLayout>
			<div id="accountType">
				<h2 className="font-bold text-center text-xl mb-8">Login as?</h2>
				<div className="flex flex-row align-middle justify-around w-11/12 mx-auto">
					<a
						href="/"
						onClick={e => {
							e && e.preventDefault && e.preventDefault();
							setAccountType('contributor');
						}}>
						<ContributorIMG
							style={{ width: '80px', height: '80px' }}
							className="mb-3"
						/>
						<p className="font-bold">Contributor</p>
					</a>
					<a
						href="/"
						onClick={e => {
							e && e.preventDefault && e.preventDefault();
							setAccountType('creditor');
						}}>
						<CreditorIMG
							style={{ width: '80px', height: '80px' }}
							className="mb-3"
						/>
						<p className="font-bold">Creditor</p>
					</a>
				</div>
			</div>
		</AuthLayout>
	);
};
