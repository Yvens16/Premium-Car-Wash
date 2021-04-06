import React from 'react';
import { NavLink } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets_2/svg/carwashlogominified.svg';
import {ReactComponent as Hamburger} from '../../assets_2/svg/hamburger_menu.svg';


require('./navbar.scss');

function LargeNavBar() {
  return (
    <nav className="navbar-container-large">
      <div className="fixed-container">
        <div className="navbar-container-large_logo">
          <NavLink activeClassName='selected' to='/'>
            <Logo/>
          </NavLink>
        </div>
        <div className='navbar-container-large_menu'>
          <ul>
            <li><NavLink activeClassName='selected' to='/contactez-nous'>Contact</NavLink></li>
            <li><NavLink activeClassName='selected' to='/devis'>Devis</NavLink></li>
            <li></li>
          </ul>
        </div>      
      </div>
    </nav>
  )
}

export default LargeNavBar;
