import React, { useEffect } from 'react'
import { Button } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { registration } from '../../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, setStateFormLogin, setUser } from '../../actions/userActions';
import { useAuth } from '../../auth/auth';

const Login = ({ email, password, handleChangeEmail, handleChangePassword }) => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    let auth = useAuth();
    let location = useLocation();
    let navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user !== null) {
            auth.signin(user, () => {
                // Send them back to the page they tried to visit when they were
                // redirected to the login page. Use { replace: true } so we don't create
                // another entry in the history stack for the login page.  This means that
                // when they get to the protected page and click the back button, they
                // won't end up back on the login page, which is also really nice for the
                // user experience.
                navigate(from, { replace: true });
            });
        }
    });

    return (
        <div>
            <Button variant='contained'
                style={{ backgroundColor: '#353a46' }}
                onClick={() => {
                    if(handleChangeEmail(email) && handleChangePassword(password)) {
                        dispatch(loginUser(email, password));
                    };
                }}>Login</Button>
            <Button
                variant="text"
                style={{ color: '#353a46' }}
                onClick={() => {
                    navigate(registration);
                    dispatch(setStateFormLogin(false));
                }}>Register</Button>
        </div>
    )
}

export default Login