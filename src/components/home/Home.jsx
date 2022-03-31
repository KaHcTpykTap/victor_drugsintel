import React, { useState } from 'react'
import { Button } from '@mui/material';
import './home.css'
import { login, dashboard } from '../utils/constants';
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";
import { AuthStatus, useAuth } from '../auth/auth';
import MenuBar from './menuBar/MenuBar';
/* import { AuthStatus, useAuth } from '../../App'; */

const Home = () => {

  let navigate = useNavigate();
  let auth = useAuth();

  return (
    <div className='h'>
      <MenuBar/>
      <Outlet/>
{/*       <div className='h-div-button'>
        {!auth.user ?
          <>
            <Button
              variant="contained"
              onClick={() => { navigate(login) }}
              style={{ margin: 10 }}
            >Login</Button>
            <AuthStatus />
          </>
            
          :
          <AuthStatus />
          }
      </div>

      <Button variant="contained" onClick={() => { navigate(dashboard) }}>Dashboard</Button>
      <Outlet /> */}
      
    </div>
  )
}

export default Home