import React from 'react';

import './MainNavigation.css';
import MainHeader from './MainHeader.js'
import { Link } from 'react-router-dom'

const MainNavigation = (props) => {
    return(
        <MainHeader>
            <button className='main-navigation__menu-btn'>
                <span/>
                <span/>
                <span/>
            </button>
            <h1 classNam='main-navigation__title'>
                <Link to="/">Your Places</Link>
            </h1>
            <nav>
                ...
            </nav>
        </MainHeader>
    )
}


export default MainNavigation