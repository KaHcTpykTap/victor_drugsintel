import { useAuth } from "../auth/auth";

export const CHANGE_ACCOUNTING_FORM = "CHANGE_ACCOUNTING_FORM";
export const SET_USER = "SET_USER";
export const SET_STATE_FORM_LOGIN = "SET_STATE_FORM_LOGIN";

export const changeFormAccounting = (value) => ({
  type: CHANGE_ACCOUNTING_FORM,
  payload: value,
});

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const setStateFormLogin = (value) => ({
  type: SET_STATE_FORM_LOGIN,
  payload: value,
});

export const loginUser = (username, password) => {
  return (dispatch) => {
    fetch(
      `http://localhost:3000/users/?username=${username}&password=${password}`,
      {
        headers: {
          "Content-Type": "application/json",
          username: username,
          password: password,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setJwtToken(data[0].token);
        setRefreshToken(data[0].refreshToken);
        dispatch(setUser(data[0].username));
      })
      .catch((e) => console.log(e));
  };
};

export const signOutUser = () => {
  return (dispatch) => {
    setJwtToken(null);
    setRefreshToken(null);
    dispatch(setUser(null));
  };
};

// Short duration JWT token (5-10 min)
export const getJwtToken = () => {
  return sessionStorage.getItem("jwt");
};

export const setJwtToken = (token) => {
  sessionStorage.setItem("jwt", token);
};

// Longer duration refresh token (30-60 min)
export const getRefreshToken = () => {
  return sessionStorage.getItem("refreshToken");
};

export const setRefreshToken = (token) => {
  sessionStorage.setItem("refreshToken", token);
};
