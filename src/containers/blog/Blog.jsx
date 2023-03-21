import React from 'react';
import { Article } from '../../components';
import {
  blog1, blog2, blog3, blog4, blog5,
} from './import';
import './blog.css';

const Blog = () => (
  <div className="gpt3_blog section_padding" id="blog">
    <div className="gpt3_blog-header">
      <h1 className="gradient_text">
        A lot is happening,
        We are blogging about it.
      </h1>
    </div>
    <div className="gpt3_blog-container">
      <div className="gpt3_blog-container_groupA">
        <Article
          imageUrl={blog1}
          date="Sep 26, 2021"
          title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
      </div>
      <div className="gpt3_blog-container_groupB">
        <Article
          imageUrl={blog2}
          date="Sep 26, 2021"
          title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
        <Article
          imageUrl={blog3}
          date="Sep 26, 2021"
          title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
        <Article
          imageUrl={blog4}
          date="Sep 26, 2021"
          title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
        <Article
          imageUrl={blog5}
          date="Sep 26, 2021"
          title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
      </div>
    </div>
  </div>
);

export default Blog;
