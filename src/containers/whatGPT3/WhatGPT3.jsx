import React from 'react';
import Feature from '../../components/features/Features';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3_wahtgpt3 section_margin" id="wgpt3">
    <div className="gpt3_whatgpt3-feature">
      <Feature
        title="What is GPT-3"
        text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
      />
    </div>

    <div className="gpt3_whatgpt3-header section_margin">
      <h1 className="gradient_text">The possibilities are beyond your imagination</h1>
      <p>Explore The Library</p>
    </div>

    <div className="gpt3_whatgpt3-container">
      <Feature
        title="Chatbots"
        text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
      />
      <Feature
        title="Knowledgebase"
        text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments."
      />
      <Feature
        title="Education"
        text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments."
      />
    </div>
  </div>
);

export default WhatGPT3;
