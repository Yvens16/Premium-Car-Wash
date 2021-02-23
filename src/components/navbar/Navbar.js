import React from 'react';
import { NavLink } from 'react-router-dom';
// import logo from '../../assets/images/carwashlogominified300.png';
const logo = 'https://ik.imagekit.io/cv7afda6wzi/carwashlogominified300_H5OhHO4_GDzm.png?tr=w-50,h-50';
require('./navbar.scss');


export default function Navbar() {
  return (
    <header>
      <NavLink to='/' className="head">
        <img className='head_logo' loading="lazy" src={logo} alt="logo"/>
        <h4 className="head_logoname">Premium Car Wash</h4>
      </NavLink>
      {/* <nav>
        <ul>
          <li><NavLink to='/' activeClassName="selected" exact>Accueil</NavLink></li>
          <li><NavLink to='/d' activeClassName="selected">Particuliers</NavLink></li>
          <li><NavLink to='/s' activeClassName="selected">Pro</NavLink></li>
          <li><NavLink to='/f' activeClassName="selected">Taxi/VTC</NavLink></li>
        </ul>
      </nav> */}
    </header>
  );
}