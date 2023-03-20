import React from 'react';
import { Article } from '../../components'
import { blog1, blog2, blog3, blog4, blog5 } from './import';
import './blog.css';

const Blog = () => (
  <div className="gpt3_blog section_padding" id="blog">
    <div className="gpt3_blog-header">
      <h1 className="gradient_text">A lot is happening, 
We are blogging about it.</h1>
    </div>
    <div className="gpt3_blog-container">
      <div className="gpt3_blog-container_groupA">
        <Article imageUrl={blog1}/>
      </div>
      <div className="gpt3_blog-container_groupA">
        <Article imageUrl={blog2}/>
        <Article imageUrl={blog3}/>
        <Article imageUrl={blog4}/>
        <Article imageUrl={blog5}/>
      </div>
    </div>
  </div>
);

export default Blog;
