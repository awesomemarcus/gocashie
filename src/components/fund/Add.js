import React, { useState } from 'react';
import useAppActions from '../core/useAppActions';

export default () => {
	const [amount, setAmount] = useState(0);
	const { addContribution } = useAppActions();

	function onBlur(e) {
		e && e.preventDefault && e.preventDefault();

		setAmount(e.currentTarget.value);
	}

	function onSubmit(e) {
		e && e.preventDefault && e.preventDefault();
		addContribution(amount);
	}

	return (
		<form action="" className="my-40" onSubmit={onSubmit}>
			<div id="addFund" className="flex flex-col my-auto">
				<div className="form-item mb-3">
					<input
						type="number"
						name="amount"
						placeholder="Amount"
						id=""
						onBlur={onBlur}
						className="border shadow-inner rounded p-2 w-full"
					/>
				</div>
				<div className="form-item mb-3">
					<button className="w-full bg-green-700 hover:bg-green-800 text-white font-bold rounded py-2 text-xl">
						FUND MY ACCOUNT
					</button>
				</div>
			</div>
		</form>
	);
};
