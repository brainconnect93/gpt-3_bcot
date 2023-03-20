import React from 'react';
import './article.css';

const Article = ({ imageUrl }) => (
  <div className="gpt3_blog-container_article">
    <div className="gpt3_blog-container_article-image">
      <img src={imageUrl} alt="blog-image" />
    </div>
  </div>
);

export default Article;
