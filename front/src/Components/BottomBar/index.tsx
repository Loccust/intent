import React from 'react';
import { Container}  from './styles';
import {FiHome, FiCalendar, FiUser, FiDollarSign } from 'react-icons/fi'
import { NavLink } from 'react-router-dom';


function BottomBar(){
    return(
        <Container>
            <NavLink to='/' exact className="link">
                <FiHome className="icon"/> <span>Home </span>
            </NavLink>
            <NavLink to='/activities' className="link">
                <FiCalendar className="icon"/> <span>Activities </span>
            </NavLink>
            <NavLink to='/finances' className="link">
                <FiDollarSign className="icon"/> <span>Finances </span>
            </NavLink>
            <NavLink to='/logout' className="link">
                <FiUser className="icon"/> <span>Profile </span>
            </NavLink>
        </Container>
    );
}

export default BottomBar;