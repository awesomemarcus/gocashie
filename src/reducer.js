import moment from "moment";

export const initialState = {
  users: [],
  userInfo: null,
  loggedUser: null,
  funds: [],
  loans: {
    list: [],
    total: 0,
    outstanding_balance: 0
  },
  contributions: {
    list: [],
    total: 0
  },
  payments: {
    list: [],
    total: 0
  }
};

export default (state, { type, payload }) => {
  console.log(type, payload);
  switch (type) {
    case "SIGN_UP":
      return {
        ...state,
        userInfo: payload.user,
        loggedUser: { username: payload.user.username }
      };

    case "LOG_IN":
      return {
        ...state,
        loggedUser: {
          ...payload
        }
      };

    case "SETUP_FUND_METHOD":
      return {
        ...state,
        users: [...state.users, payload.user],
        userInfo: payload.user
      };

    case "SETUP_ACCOUNT_TYPE":
      return {
        ...state,
        activeType: payload.type
      };

    case "ADD_CONTRIBUTION":
      return {
        ...state,
        contributions: {
          ...state.contributions,
          list: [...state.contributions.list, payload.contribution],
          total: state.contributions.total + parseInt(payload.amount)
        }
      };

    case "ADD_LOAN":
      return {
        ...state,
        loans: {
          ...state.loans,
          list: [...state.loans.list, payload.loan],
          total: state.loans.total + parseInt(payload.total_amount),
          outstanding_balance:
            state.loans.outstanding_balance + parseInt(payload.total_amount)
        }
      };

    case "ADD_PAYMENT":
      return {
        ...state,
        payments: {
          ...state.payments,
          list: [...state.payments.list, payload.payment],
          total: state.payments.total + parseInt(payload.amount)
        },
        loans: {
          ...state.loans,
          list: state.loans.list.map(loan => {
            if (loan._id === payload.loan_id) {
              const terms_paid = loan.terms_paid + 1;
              const status = terms_paid >= loan.terms ? "accepted" : loan.status;

              return {
                ...loan,
                terms_paid,
                status,
                next_payment_date: moment(loan.next_payment_date)
                  .add(1, "month")
                  .toDate()
              };
            }

            return loan;
          }),
          outstanding_balance: payload.outstanding_balance
        }
      };

    default:
      return state;
  }
};
