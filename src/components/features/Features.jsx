import React from 'react';
import PropTypes from 'prop-types';
import './features.css';

const Features = ({ title, text }) => (
  <div className="gpt3_features-container_feature">
    <div className="gpt3_features-container_feature-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="gpt3_features-container_feature-text">
      {text}
    </div>
  </div>
);

Features.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Features;
