import React from 'react';

import './MainNavigation.css';
import MainHeader from './MainHeader.js'
import { Link } from 'react-router-dom'
import NavLinks from './NavLinks.js';
import SideDrawer from './SideDrawer.js';

const MainNavigation = (props) => {
    return(
        <React.Fragment>
            {/* <SideDrawer className='main-navigation__drawer-nav'>
                <NavLinks/>
            </SideDrawer> */}
            <MainHeader>
                <button className='main-navigation__menu-btn'>
                    <span/>
                    <span/>
                    <span/>
                </button>
                <h1 className='main-navigation__title'>
                    <Link to="/">Your Places</Link>
                </h1>
                <nav className='main-navigation__header-nav'>
                    <NavLinks/>
                </nav>
            </MainHeader>
        </React.Fragment>
    )
}


export default MainNavigation