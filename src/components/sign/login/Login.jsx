import React from 'react'
import { Button } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { registration } from '../../utils/constants';
import { useDispatch } from 'react-redux';
import { setStateFormLogin, setUser } from '../../actions/userActions';
import { useAuth } from '../../auth/auth';
/* import { useAuth } from '../../../App'; */

function Login({ email }) {


    const dispatch = useDispatch();
    
    let auth = useAuth();
    let location = useLocation();
    let navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";

    function handleSubmit(e) {
        e.preventDefault();
    
        let username = email;
    
        auth.signin(username, () => {
          // Send them back to the page they tried to visit when they were
          // redirected to the login page. Use { replace: true } so we don't create
          // another entry in the history stack for the login page.  This means that
          // when they get to the protected page and click the back button, they
          // won't end up back on the login page, which is also really nice for the
          // user experience.
          navigate(from, { replace: true });
        });
      }

    return (
        <div>
            <Button variant='contained' onClick={(e) => {
                dispatch(setUser(email));
                handleSubmit(e);
            }}>Login</Button>
            <Button
                variant="text"
                onClick={() => {
                    navigate(registration);
                    dispatch(setStateFormLogin(false));
                }}>Register</Button>
        </div>
    )
}

export default Login