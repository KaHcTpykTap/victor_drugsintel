import { CHANGE_ACCOUNTING_FORM } from '../actions/userActions';
import { SET_USER } from '../actions/userActions';
import { SET_STATE_FORM_LOGIN } from '../actions/userActions';

const initialState = {
    accountingFormState: false,
    user: null,
    stateFormLogin: true
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_ACCOUNTING_FORM:
            return { ...state, accountingFormState: action.payload }
        case SET_USER:
            return { ...state, user: action.payload }
        case SET_STATE_FORM_LOGIN:
            return { ...state, stateFormLogin: action.payload }
        default:
            return state;
    }
}