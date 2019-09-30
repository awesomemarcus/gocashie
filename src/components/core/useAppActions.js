import { useContext } from "react";
import { AppStateContext } from "./AppStateContext";

const useAppActions = () => {
  const [state, setState] = useContext(AppStateContext);

  /**
   * signup new user
   *
   * @param {Object} user
   */
  function signUp(user) {
    setState(state => ({ ...state, users: [...state.users, user] }));
  }

  return {
    signUp,
    usersList: state.users,
  };
};

export default useAppActions;
