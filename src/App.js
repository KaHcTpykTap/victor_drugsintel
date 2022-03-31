import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Routes, Route, Outlet, Link, useNavigate, useLocation, Navigate } from "react-router-dom";
import Sign from './components/sign/Sign';
import Home from './components/home/Home';
import Vision from './components/vision/Vision';
import Methodology from './components/methodology/Methodology';
import Pillars from './components/pillars/Pillars';
import Services from './components/services/Services';
import Team from './components/team/Team';
import Careers from './components/careers/Careers';
import News from './components/news/News';
import Contact from './components/contact/Contact';
import HomePage from './components/homePage/HomePage';
import { login, registration, dashboard, pages } from './components/utils/constants';
import { AuthContext, AuthProvider, fakeAuthProvider, RequireAuth } from './components/auth/auth';
import React from 'react';
import Dashboard from './components/dashboard/Dashboard';
import { Button } from '@mui/material';
import MenuBar from './components/home/menuBar/MenuBar';


export default function App() {
  return (
    <AuthProvider>
      <div className='app'>
        <Routes>
          <Route element={<Home />} >
            <Route path={login} element={<Sign />} />
            <Route path={registration} element={<Sign />} />
            <Route path='/' element={<HomePage />} />
            <Route path='/vision' element={<Vision />} />
            <Route path='/methodology' element={<Methodology />} />
            <Route path='/pillars' element={<Pillars />} />
            <Route path='/services' element={<Services />} />
            <Route path='/team' element={<Team />} />
            <Route path='/careers' element={<Careers />} />
            <Route path='/news' element={<News />} />
            <Route path='/contact' element={<Contact />} />


            <Route
              path={dashboard}
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              } />
            <Route path="*" element={<div>There's nothing here!</div>} />
          </Route>
        </Routes>
      </div>
    </AuthProvider>

  )
}

/* let AuthContext = React.createContext(null); */

/* interface AuthContextType {
  user: any;
  signin: (user: string, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
} */

/* function AuthProvider({ children }) {
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
} */

/* export function useAuth() {
  return React.useContext(AuthContext);
}

export function AuthStatus() {
  let auth = useAuth();
  let navigate = useNavigate();

  if (!auth.user) {
    return <p>You are not logged in.</p>;
  }

  return (
    <p>
      Welcome {auth.user}!{" "}
      <Button
        variant="contained"
        onClick={() => {
          auth.signout(() => navigate("/"));
        }}
        style={{ margin: 10 }}
      >Sign out</Button>
    </p>
  );
}

function RequireAuth({ children }) {
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
} */