import React from 'react'
import './home.css'
import { Outlet } from 'react-router-dom';
import MenuBar from './menuBar/MenuBar';
/* import { AuthStatus, useAuth } from '../../App'; */

const Home = () => {

  return (
    <div className='h'>
      <MenuBar />
      <Outlet />
    </div>
  )
}

export default Home