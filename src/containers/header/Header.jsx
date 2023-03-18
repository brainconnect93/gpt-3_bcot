import React from 'react';
import people from '../../assets/people.svg';
import ai from '../../assets/Header-Illustration.svg';
import './header.css';

const Header = () => (
  <div className="gpt3_header section_padding" id="Home">
    <div className="gpt3_header-content">
      <h1 className="gradient_text">Let’s Build Something amazing with GPT-3 OpenAI</h1>
      <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise.</p>

      <div className="gpt3_header-content_input">
        <input type="email" placeholder="Enter your email" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3_header-content_people">
        <img src={people} alt="people visited" />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3_header-image">
      <img src={ai} alt="ai" />
    </div>
  </div>
);

export default Header;
