
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

export const loginUser = (email, password) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/users/?email=${email}&password=${password}`, {
      headers: {
        "Content-Type": "application/json",
        email: email,
        password: password,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setJwtToken(data[0].token);
        setRefreshToken(data[0].refreshToken);
        setUserName(data[0].username);
        dispatch(setUser(data[0].username));
      })
      .catch((e) => console.log(e));
  };
};

export const signOutUser = () => {
  return (dispatch) => {
    setJwtToken(null);
    setRefreshToken(null);
    setUserName(null);
    dispatch(setUser(null));
  };
};

// Short duration JWT token (5-10 min)
export const getJwtToken = () => {
  return localStorage.getItem("jwt");
};

export const setJwtToken = (token) => {
  localStorage.setItem("jwt", token);
};

// Longer duration refresh token (30-60 min)
export const getRefreshToken = () => {
  return localStorage.getItem("refreshToken");
};

export const setRefreshToken = (token) => {
  localStorage.setItem("refreshToken", token);
};

export const getUserName = () => {
  return localStorage.getItem("userName");
};

export const setUserName = (username) => {
  localStorage.setItem("userName", username);
};
