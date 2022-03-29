import React from 'react'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { accounting_login } from '../../utils/constants';
import { useDispatch } from 'react-redux';
import { changeFormAccounting } from '../../actions/userActions';

function Registration({handleChangeCreateAccount}) {

    let navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <div>
            <Button variant='text' onClick={() => {
                dispatch(changeFormAccounting(false));
                navigate(accounting_login);
            }}>Login</Button>
            <Button variant='contained' onClick={() => handleChangeCreateAccount()}>Register</Button>
        </div>
    )
}

export default Registration