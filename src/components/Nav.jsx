import React from 'react'
import './Nav.css'
const Nav = () => {
  return (
     <header className="head">
      <nav className="navbar">
  
        <div className="logo">
          <a href="#">EDGECUT</a>
        </div>

    
        <ul className="nav-links">
          <li>
            <a href="#" className="active">
              HOME
            </a>
          </li>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">FURNITURES</a>
          </li>
          <li>
            <a href="#">BLOG</a>
          </li>
          <li>
            <a href="#">CONTACT US</a>
          </li>
        </ul>


        <div className="right-section">
          <a href="#" className="login">
            LOGIN
          </a>
          <span className="search-icon">🔍</span>
        </div>
      </nav>
    </header>
  );
};



export default Nav
