import { Button } from "@mui/material";
import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { login } from "../utils/constants";
import './auth.css'

/**
 * This represents some generic auth provider API
 */
const fakeAuthProvider = {
  isAuthenticated: false,
  signin(callback) {
    fakeAuthProvider.isAuthenticated = true;
    setTimeout(callback, 100); // fake async
  },
  signout(callback) {
    fakeAuthProvider.isAuthenticated = false;
    setTimeout(callback, 100);
  },
};

export { fakeAuthProvider };

export let AuthContext = React.createContext(null);

export function useAuth() {
  return React.useContext(AuthContext);
}

export function AuthProvider({ children }) {
  let [user, setUser] = React.useState(null);

  let signin = (newUser, callback) => {
    return fakeAuthProvider.signin(() => {
      setUser(newUser);
      callback();
    });
  };

  let signout = (callback) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      callback();
    });
  };

  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function AuthStatus() {
  let auth = useAuth();
  let navigate = useNavigate();

  if (!auth.user) {
    return <div className='au-not'>Not authorized
      <Button
        variant="contained"
        onClick={() => { navigate(login) }}
        style={{ margin: 2, backgroundColor: '#353a46' }}
      >Login</Button>
    </div>;
  }

  return (
    <div className='au-not'>
      Welcome {auth.user}!{" "}
      <Button
        variant="contained"
        onClick={() => {
          auth.signout(() => navigate("/"));
        }}
        style={{ margin: 2, backgroundColor: '#353a46' }}
      >Sign out</Button>
    </div>
  );
}

export function RequireAuth({ children }) {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to={login} state={{ from: location }} replace />;
  }

  return children;
}