import React from 'react';
import possibleImg from '../../assets/Feature-Image.svg';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3_possible section_padding" id="possibility">
    <div className="gpt3_possible-image">
      <img src={possibleImg} alt="possibility" />
    </div>
    <div className="gpt3_possible-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient_text">The possibilities are beyond your imagination</h1>
      <p>
        Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise.
      </p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;
