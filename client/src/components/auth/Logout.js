import React from 'react';
import { useDispatch } from 'react-redux'
import { logout } from '../../actions/authActions'
import { NavLink } from 'reactstrap';

const Logout = () => {
    const dispatch = useDispatch()
    return (
        <>
        <NavLink href="#" onClick={() => dispatch(logout())}>
            Logout
        </NavLink>
        </>
    );
}

export default Logout;