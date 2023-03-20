import React from 'react';
import PropTypes from 'prop-types';
import './article.css';

const Article = ({ imageUrl, date, title }) => (
  <div className="gpt3_blog-container_article">
    <div className="gpt3_blog-container_article-image">
      <img src={imageUrl} alt="blog-camera" />
    </div>
    <div className="gpt3_blog-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{title}</h3>
        <p>Read Full Article</p>
      </div>
    </div>
  </div>
);

Article.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Article;
