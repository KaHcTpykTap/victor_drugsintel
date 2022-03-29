import React from 'react'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { accounting_registration } from '../../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { changeFormAccounting } from '../../actions/userActions';

function Login() {

let navigate = useNavigate();

const dispatch = useDispatch();



    return (
        <div>
            <Button variant='contained' /* onClick={() => handleChangeLogin()} */>Login</Button>
            <Button
                variant="text"
                onClick={() => {
                    navigate(accounting_registration);
                    dispatch(changeFormAccounting(true));
                }}>Register</Button>
        </div>
    )
}

export default Login