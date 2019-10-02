import React, { useState } from 'react';
import useAppActions from '../core/useAppActions';

export default () => {
	const [amount, setAmount] = useState(0);
	const { loans, addLoan, addPayment } = useAppActions();

	function onBlur(e) {
		e && e.preventDefault && e.preventDefault();

		setAmount(e.currentTarget.value);
	}

	function onSubmit(e) {
		e && e.preventDefault && e.preventDefault();

		if (loans.outstanding_balance <= 0) {
			return addLoan(parseInt(amount), 1);
		}
		if (amount <= loans.outstanding_balance) {
			return addPayment(amount, loans.list[0]._id);
		}
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
						className="border shadow-inner rounded p-2 w-full"
						onBlur={onBlur}
					/>
				</div>
				<div className="form-item mb-3">
					<button className="w-full bg-blue-700 hover:bg-green-800 text-white font-bold rounded py-2 text-xl">
						{loans.outstanding_balance > 0 ? 'PAY MY LOAN' : 'CONFIRM LOAN'}
					</button>
				</div>
			</div>
		</form>
	);
};
