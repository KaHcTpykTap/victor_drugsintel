import React, { useState } from 'react'
import './sign.css'
import logo from '../../images/drugs_logo.png'
import image1 from '../../images/image1.jpg';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import MailOutlineSharpIcon from '@mui/icons-material/MailOutlineSharp';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAuth } from '../../App';
import Login from './login/Login';
import Registration from './registration/Registration';

const Sign = () => {

    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const [email, setEmail] = React.useState('');
    const [loginValue, setLoginValue] = React.useState('');
    const [password, setPassword] = React.useState('');
    const stateFormLogin = useSelector((state) => state.stateFormLogin);

    const handleChangeEmail = (email) => {
        const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        const result = pattern.test(email);
        !result ? setErrorEmail(true) : setErrorEmail(false);
        return result;
    };


    const handleChangePassword = (password) => {
        const password_validate = (password) => {
            const pattern = {
                'capital': /[A-Z]/,
                'digit': /[0-9]/,
                'full': /[A-Za-z0-9]{7,13}$/
            };
            return pattern.capital.test(password) &&
                pattern.digit.test(password) &&
                pattern.full.test(password);
        }
        const resultTestPassword = password_validate(password);
        !resultTestPassword ? setErrorPassword(true) : setErrorPassword(false);
        return resultTestPassword;
    };

    return (
        <div className='s'>
            <div className='s-main'>
                <div className="s-sideL">
                    <img src={logo} className='s-logo' alt='logo' />
                    <img src={image1} className='s-image-left' alt='logo' />
                </div>
                <div className="s-sideR">
                    <Box sx={{ width: '100%', maxWidth: 500 }}>
                        <Typography variant="h4" component="div" gutterBottom>
                            Welcome Back:)
                        </Typography>
                        <Typography variant="h5" component="div" gutterBottom>
                            msg box
                        </Typography>
                    </Box>
                    <Box sx={{ '& > :not(style)': { m: 1 }, height: 250 }}>

                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <MailOutlineSharpIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                            <TextField
                                error={errorEmail}
                                id="input-email"
                                label="Email Address"
                                variant="standard"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email} />
                        </Box>

                        {!stateFormLogin && <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <PersonOutlineOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                            <TextField
                                id="input-login"
                                label="Login"
                                variant="standard"
                                onChange={(e) => {
                                    setLoginValue(e.target.value.trim());
                                }} />
                        </Box>}

                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <LockOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                            <TextField
                                id="standard-password-input"
                                error={errorPassword}
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                variant="standard"
                                value={password}
                                onChange={(e) => setPassword(e.target.value.trim())}
                            />
                        </Box>

                        {stateFormLogin && <div className='s-fp-container'>
                            <div className='s-fp'>Forgot password?</div>
                        </div>}

                    </Box>

                    {stateFormLogin ?
                        <Login
                            email={email}
                            password={password}
                            handleChangeEmail={handleChangeEmail}
                            handleChangePassword={handleChangePassword}
                        />
                        :
                        <Registration email={email} />}

                </div>
            </div>
        </div>
    )
}

export default Sign