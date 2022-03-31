export const CHANGE_ACCOUNTING_FORM = 'CHANGE_ACCOUNTING_FORM';
export const SET_USER = 'SET_USER';
export const SET_STATE_FORM_LOGIN = 'SET_STATE_FORM_LOGIN';

export const changeFormAccounting = (value) => ({
    type: CHANGE_ACCOUNTING_FORM,
    payload: value
})

export const setUser = (user) => ({
    type: SET_USER,
    payload: user
})

export const setStateFormLogin = (value) => ({
    type: SET_STATE_FORM_LOGIN,
    payload: value
})