import { CHANGE_ACCOUNTING_FORM, getUserName, SET_STATE_FORM_LOGIN, SET_USER } from "../actions/userActions";

const initialState = {
  accountingFormState: false,
  user: getUserName() === "null" || !getUserName() ? null : getUserName(),

  stateFormLogin: true,
  // auth
  isLoading: true,
  isSignout: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ACCOUNTING_FORM:
      return { ...state, accountingFormState: action.payload };
    case SET_USER:
      return { ...state, user: action.payload };
    case SET_STATE_FORM_LOGIN:
      return { ...state, stateFormLogin: action.payload };
    default:
      return state;
  }
};
