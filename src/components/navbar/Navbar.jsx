import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

const Menu = () => (
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#wgpt3">What is GPT?</a></li>
    <li><a href="#possibility">Open AI</a></li>
    <li><a href="#feature">Case Studies</a></li>
    <li><a href="#blog">Library</a></li>
  </ul>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="gpt3_navbar">
      <div className="gpt3_navbar-links">
        <div className="gpt3_navbar-links_logo">
          <h2>
            GPT3_
            <span>BCOT</span>
          </h2>
        </div>
        <div className="gpt3_navbar-links_container">
          <Menu />
        </div>
        <div className="gpt3_navbar-sign">
          <p>Sign in</p>
          <button type="submit">Sign up</button>
        </div>

        <div className="gpt3_navbar-menu">
          {toggleMenu
            ? <RiCloseLine color="#fff" size={30} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color="#fff" size={30} onClick={() => setToggleMenu(true)} />}
          {toggleMenu && (
            <div className="gpt3_navbar-menu_container scale-up-center">
              <div className="gpt3_navbar-menu_container-links">
                <Menu />
                <div className="gpt3_navbar-menu_sign">
                  <p>Sign in</p>
                  <button type="submit">Sign up</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
