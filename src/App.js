import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Sign from './components/sign/Sign';
import Home from './components/home/Home';
import { accounting, login, registration, accounting_login } from './components/utils/constants';
import Login from './components/sign/login/Login';
import Registration from './components/sign/registration/Registration';


export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='accounting' element={<Sign />} >
          <Route path='login' element={<Login />} />
          <Route path='registration' element={<Registration />} />
        </Route>
        <Route path="*" element={<div>There's nothing here!</div>} />
      </Routes>
    </div>

  )
}