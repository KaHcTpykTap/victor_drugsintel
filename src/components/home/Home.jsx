import React, { useState } from 'react'
import { Button } from '@mui/material';
import './home.css'
import { accounting_login } from '../utils/constants';
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";

const Home = () => {

  let navigate = useNavigate();

  return (
    <div className='h'>
      <Button variant="contained" onClick={() => { navigate(accounting_login) }}>Login</Button>

      {/*         <ul>
        <li>
          <Link to="/">Home page</Link>
        </li>
        <li>
          <Link to="/accounting">Sign page</Link>
        </li>
      </ul> */}
      <Outlet />

    </div>
  )
}

export default Home