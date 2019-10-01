import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import moment from "moment";
import { AppStateContext } from "./AppStateContext";

const useAppActions = () => {
  const [state, dispatch] = useContext(AppStateContext);
  const history = useHistory();

  function addContribution(amount) {
    const { contributions } = state;

    const existingContributions = contributions.list.map(
      ({ date_created }) =>
        date_created > moment().startOf("month") &&
        date_created < moment().endOf("month")
    );

    if (existingContributions.length) {
      throw new Error("You already have a contribution for this month.");
    }

    const newContribution = {
      _id: contributions.list.length + 1,
      amount,
      date_created: new Date()
    };

    dispatch({
      type: "ADD_CONTRIBUTION",
      payload: {
        contribution: newContribution,
        amount
      }
    });

    history.push("/");
  }

  function addLoan(principal_amount, terms = 1) {
    const { loans } = state;

    if (terms > 3 || terms < 1) {
      throw new Error("Invalid terms value.");
    }

    const interest_rate = terms / 10;
    const interest_amount = principal_amount * interest_rate;
    const total_amount = principal_amount + interest_amount;

    const monthly_amount = Math.ceil(total_amount / terms);
    const next_payment_date = moment()
      .add(1, "month")
      .toDate();

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
      status: "accepted",
      date_created: new Date()
    };

    dispatch({
      type: "ADD_LOAN",
      payload: {
        loan: newLoan,
        total_amount
      }
    });

    history.push("/");
  }

  function addPayment(amount, loan_id) {
    const { payments, loans } = state;

    const loan = loans.list.find(_id => loan_id);

    if (!loan) {
      throw new Error("Loan not found.");
    }

    if (loan.status !== "accepted") {
      throw new Error("Invalid loan status.");
    }

    const newPayment = {
      _id: payments.list.length + 1,
      amount,
      loan_id,
      date_created: new Date(),
      status: "accepted"
    };

    let outstanding_balance = loans.outstanding_balance - amount;
    outstanding_balance = outstanding_balance < 0 ? 0 : outstanding_balance; // Prevent negative value;

    dispatch({
      type: "ADD_PAYMENT",
      payload: {
        payment: newPayment,
        amount,
        loan_id,
        outstanding_balance
      }
    });
    history.push("/");
  }

  /**
   *
   *
   * @param {Object} credentials
   */
  function login(credentials) {
    if (state.users.length > 0) {
      state.users.map(user => {
        if (
          user.username === credentials.username &&
          user.password === credentials.password
        ) {
          dispatch({
            type: "LOG_IN",
            payload: { ...credentials }
          });

          history.push("/setup/account/type");
        }

        return null;
      });
    }
  }

  /**
   * signup new user
   *
   * @param {Object} user
   */
  function signUp(user) {
    dispatch({
      type: "SIGN_UP",
      payload: {
        user
      }
    });

    setTimeout(() => {
      history.push("/setup/account/method");
    }, 500);
  }

  function setAccountType(type) {
    dispatch({ type: "SETUP_ACCOUNT_TYPE", payload: { type } });

    setTimeout(() => {
      history.push("/");
    }, 500);
  }

  function setUpFundMethod(method) {
    const user = { ...state.userInfo, method };

    dispatch({ type: "SETUP_FUND_METHOD", payload: { user } });
  }

  useEffect(() => {
    window.localStorage.setItem("state", JSON.stringify(state));
    console.log(state);
  }, [state]);

  return {
    login,
    signUp,
    addContribution,
    addLoan,
    addPayment,
    setAccountType,
    setUpFundMethod,
    usersList: state.users,
    userInfo: state.userInfo,
    method: state.userInfo && state.userInfo.method,
    loans: state.loans,
    payments: state.payments,
    contributions: state.contributions,
    activeType: state.activeType
  };
};

export default useAppActions;
