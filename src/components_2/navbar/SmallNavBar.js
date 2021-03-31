import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets_2/svg/carwashlogominified.svg';
import {ReactComponent as Hamburger} from '../../assets_2/svg/hamburger_menu.svg';

require('./navbar.scss');
function OpenDrawer() {
  return (
  <div className="menu-container">
    <NavLink activeClassName='selected' to='/contactez-nous'>Contact</NavLink>
    <NavLink activeClassName='selected' to='/devis'>Devis</NavLink>
  </div>
  )
}

function SmallNavBar() {
  const [drawerOpen, setdrawerOpen] = useState(false);

  return (
    <nav className='navbar-container'>
      <div className="navbar-container_logo">
        <NavLink to='/'>
          <Logo/>
        </NavLink>
      </div>
      <div className='navbar-container_menu'>
        <button onClick={() => setdrawerOpen(drawerOpen ? false : true)}>
          <Hamburger/>
        </button>
      </div>
      { drawerOpen === true ? <OpenDrawer/> : null}
    </nav>
  )
}

export default SmallNavBar;
