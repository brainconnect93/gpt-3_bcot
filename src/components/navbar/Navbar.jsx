import React from 'react';
// import { RiMenu3Line, RiCloseLine } from 'react-icons'
import './navbar.css';

const Navbar = () => (
  <div className="gpt3_navbar">
    <div className="gpt3_navbar-links">
      <div className="gpt3_navbar-links_logo">
        <h2>
          GPT3_
          <span>BCOT</span>
        </h2>
      </div>
      <div className="gpt3_navbar-links_container">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#wgpt3">What is GPT?</a></li>
          <li><a href="#possibility">Open AI</a></li>
          <li><a href="#feature">Case Studies</a></li>
          <li><a href="#blog">Library</a></li>
        </ul>
      </div>
      <div className="gpt3_navbar-sign">
        <p>Sign in</p>
        <button type="submit">Sign up</button>
      </div>
    </div>
  </div>
);

export default Navbar;
