import React from 'react';
import { Wrapper, Progress, Tasks, Main, BottomBar}  from './styles';
import {FiHome, FiCalendar, FiUser, FiDollarSign } from 'react-icons/fi'
import SideMenu from '../../Components/SideMenu';
import { NavLink } from 'react-router-dom';

interface Props{
    toggleTheme():void;
}

const Home: React.FC<Props> = ( { toggleTheme } ) => {
    return(
        <Wrapper>
            <SideMenu toggleTheme={toggleTheme}/>
            <Main>
                <Progress>
                </Progress>
                <Tasks>
                </Tasks>
            </Main>
            <BottomBar>
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
            </BottomBar>
        </Wrapper>
    );
}

export default Home;