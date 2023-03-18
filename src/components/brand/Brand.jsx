import React from 'react';
import {
  google, slack, bitmap, dropbox, shopify,
} from './import';
import './brand.css';

const Brand = () => (
  <div className="gpt3_brand section_padding">
    <div>
      <img src={google} alt="google icon" />
    </div>
    <div>
      <img src={slack} alt="slack icon" />
    </div>
    <div>
      <img src={bitmap} alt="Atlassan icon" />
    </div>
    <div>
      <img src={dropbox} alt="dropbox icon" />
    </div>
    <div>
      <img src={shopify} alt="shopify icon" />
    </div>
  </div>
);

export default Brand;
