import React from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom';
const Nav = () => {
  return (
    <header class="head">
      <nav className="navbar">
        <h1 id='brand'>
          EDGECUT
        </h1>
        <ul className="links">
          <li>
            <NavLink
              to="/">
              <h2>HOME</h2>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about">
              <h2>ABOUT</h2>
            </NavLink>

          </li>
          <li>
            <NavLink
              to="furnitures">
              <h2>FURNITURES</h2>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="blog">
              <h2>BLOG</h2>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="contact_us">
              <h2>CONTACT US</h2>
            </NavLink>
          </li>
        </ul>


        <div className="right-section">
          <NavLink to="login" className="login">
            Login
          </NavLink>
          <span className="search-icon">🔍</span>
        </div>
      </nav>
    </header>
  );
};




export default Nav
