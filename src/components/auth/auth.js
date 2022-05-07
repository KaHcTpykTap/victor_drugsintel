import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { setUser, signOutUser } from "../actions/userActions";
import { login } from "../utils/constants";
import "./auth.css";

export let AuthContext = React.createContext(null);

export const useAuth = () => {
  return React.useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  let [user, setUser] = React.useState(null);

  let signin = (newUser, callback) => {
    setUser(newUser);
    callback();
  };

  let signout = (callback) => {
    setUser(null);
    callback();
  };

  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export function AuthStatus() {
  let auth = useAuth();
  let navigate = useNavigate();
  const dispatch = useDispatch();

  if (!auth.user) {
    return (
      <div className="au-not">
        Not authorized
        <Button
          variant="contained"
          onClick={() => {
            navigate(login);
          }}
          style={{ margin: 2, backgroundColor: "#353a46" }}
        >
          Login
        </Button>
      </div>
    );
  }

  return (
    <div className="au-not">
      Welcome {auth.user}!{" "}
      <Button
        variant="contained"
        onClick={() => {
          auth.signout(() => navigate("/"));
          dispatch(signOutUser());
        }}
        style={{ margin: 2, backgroundColor: "#353a46" }}
      >
        Sign out
      </Button>
    </div>
  );
}

export const RequireAuth = ({ children }) => {
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
