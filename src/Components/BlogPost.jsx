// ./src/components/BlogPost.jsx
import React from 'react';

const BlogPost = ({ title, author, date, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-500 mb-4">By {author} on {date}</p>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default BlogPost;
