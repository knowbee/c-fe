import { LOGIN_FAILURE, SUBMIT_LOGIN_FORM, CLEAR_LOGIN } from "../action-types";
import { login as initialState } from "../initialState";

const loginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CLEAR_LOGIN:
      return initialState;
    case SUBMIT_LOGIN_FORM:
      return { ...state, submitting: true };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: {
          ...state.error,
          message: payload.message,
        },
        submitting: false,
      };
    default:
      return state;
  }
};

export default loginReducer;
