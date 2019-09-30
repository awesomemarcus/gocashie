import React from 'react';
import moment from 'moment';

const addLoan = function(principal_amount, terms = 1) {
  const { loans } = this.state;

  if (terms > 3 || terms < 1) {
    throw new Error("Invalid terms value.");
  }

  const interest_rate = terms / 10;
  const interest_amount = principal_amount * interest_rate;
  const total_amount = principal_amount + interest_amount;

  const monthly_amount = Math.ceil(total_amount / terms);
  const next_payment_date = moment().add(1, 'month').toDate();

  const newLoan = {
    _id: loans.list.length + 1,
    principal_amount,
    terms,
    interest_rate,
    interest_amount,
    total_amount,
    monthly_amount,
    next_payment_date,
    terms_paid: 0,
    status: 'accepted',
    date_created: new Date(),
  };

  this.setState({
    loans: {
      ...loans,
      list: [
        ...loans.list,
        newLoan,
      ],
      total: loans.total + total_amount,
      outstanding_balance: loans.outstanding_balance + total_amount,
    }
  });
};

const addContribution = function(amount) {
  const { contributions } = this.state;

  const existingContributions = contributions.list.map(({ date_created }) => (
    date_created > moment().startOf('month') && date_created < moment().endOf('month')
  ));

  if (existingContributions.length) {
    throw new Error('You already have a contribution for this month.');
  }

  const newContribution = {
    _id: contributions.list.length + 1,
    amount,
    date_created: new Date(),
  };

  this.setState({
    contributions: {
      ...this.state.contributions,
      list: [
        ...contributions.list,
        newContribution,
      ],
      total: contributions.total + amount,
    }
  });
}

const addPayment = function(amount, loan_id) {
  const { payments, loans } = this.state;

  const loan = loans.list.find((_id) => loan_id);

  if (!loan) {
    throw new Error('Loan not found.');
  }

  if (loan.status !== 'accepted') {
    throw new Error('Invalid loan status.');
  }

  const newPayment = {
    _id: payments.list.length + 1,
    amount,
    loan_id,
    date_created: new Date(),
    status: 'accepted',
  };

  let outstanding_balance = loans.outstanding_balance - amount;
  outstanding_balance = outstanding_balance < 0 ? 0 : outstanding_balance; // Prevent negative value;

  this.setState({
    payments: {
      ...payments,
      list: [
        ...payments.list,
        newPayment,
      ],
      total: payments.total + amount,
    },
    loans: {
      ...loans,
      list: loans.list.map((loan) => {
        if (loan._id === loan_id) {
          const terms_paid = loan.terms_paid + 1;
          const status = terms_paid >= loan.terms ? 'paid' : loan.status;

          return {
            ...loan,
            terms_paid,
            status,
            next_payment_date: moment(loan.next_payment_date).add(1, 'month').toDate(),
          };
        }

        return loan;
      }),
      outstanding_balance,
    }
  });
}


export default class SampleComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      loans: {
        list: [],
        total: 0,
        outstanding_balance: 0,
      },
      contributions: {
        list: [],
        total: 0,
      },
      payments: {
        list: [],
        total: 0,
      }
    };

    this.addLoan = addLoan.bind(this);
    this.addContribution = addContribution.bind(this);
    this.addPayment = addPayment.bind(this);
  }

  render() {
    window.c = this;

    return (
      <pre>
        { JSON.stringify(this.state, null, 2) }
      </pre>
    )
  }
}
