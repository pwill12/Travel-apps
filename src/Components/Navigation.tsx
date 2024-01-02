/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/nav.css';
import Button from './Button';
import { HiBars3BottomRight } from "react-icons/hi2"
import Logo from "../Images/logo3.png";
import User from "../Images/User.png";



const Navbar: React.FC = () => {

  const [menu, setMenu] = useState(false)

  const showMenu = () => {
    setMenu(!menu)
  }

  return (
    <nav className="navbar px">
      <Link to="/">
        <img className='logos' src={Logo} alt='logo' />
      </Link>
      <ul className="nav-list">
        <li className="nav-item"><NavLink to='/' className='nav-links'>Home </NavLink></li>
        <li className="nav-item"><NavLink to="/route">Routes</NavLink></li>
        <li className="nav-item"><NavLink to="pickup">Pickup Station</NavLink></li>
        <li className="nav-item"><NavLink to="/about">About</NavLink></li>
      </ul>
      <div className="signin">
        <Link to="login">
          <img src={User} alt="users" />
        </Link>
      </div>
      <div className='mobilemenu'>
        <button className='humberger' onClick={showMenu}>
          <HiBars3BottomRight />
        </button>
        {menu &&
          <>
            <ul className="mobcon">
              {/* <div onClick={showMenu}>close</div> */}
            {/* <div onClick={showMenu} className='close'><MdClose/></div> */}
              <li className="nav-item" onClick={showMenu}><NavLink to='/' className='nav-links'>Home </NavLink></li>
              <li className="nav-item" onClick={showMenu}><NavLink to="/Routess">Routes</NavLink></li>
              <li className="nav-item" onClick={showMenu}><NavLink to="pickup">Pickup Station</NavLink></li>
              <li className="nav-item" onClick={showMenu}><NavLink to="/about">About</NavLink></li>
            </ul>
          </>
        }
      </div>
    </nav>
  );
};

export default Navbar;
