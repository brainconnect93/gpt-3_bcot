import React from 'react';
import Feature from '../../components/features/Features';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3_wahtgpt3 section_margin" id="wgpt3">
    <div className="gpt3_whatgpt3-feature">
      <Feature />
    </div>

    <div className="gpt3_whatgpt3-header section_margin">
      <h1 className="gradient_text">The possibilities are beyond your imagination</h1>
      <p>Explore The Library</p>
    </div>

    <div className="gpt3_whatgpt3-container">
      <Feature />
      <Feature />
      <Feature />
    </div>
  </div>
);

export default WhatGPT3;
