import { CHANGE_ACCOUNTING_FORM } from "../actions/userActions"

const initialState = {
    accountingFormState: false
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_ACCOUNTING_FORM:
            return { ...state, accountingFormState: action.payload }
        default:
            return state;
    }
}