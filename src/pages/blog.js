// src/pages/Blog.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { marked } from 'marked';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const context = require.context('../../public/posts', false, /\.md$/);
      const postFiles = context.keys();

      const postsData = await Promise.all(
        postFiles.map(async (file) => {
          const response = await fetch(file.replace('./', '/posts/'));
          const text = await response.text();
          const content = marked(text);
          console.log(content);
          return { content, fileName: file.replace('./', '').replace('.md', '') };
        })
      );

      setPosts(postsData);
    };

    fetchPosts();
  }, []);

  return (
    <div className='text-white grid'>
      <div className='px-5 w-full md:w-[60%] md:justify-self-center md:pt-5'>
        <h1 className='text-3xl text-[--custom_lime] font-extrabold mb-5'><span className='text-white font-medium'>@</span>Blog</h1>
        {posts.map((post, index) => (
        <div key={index} className='post p-5 mb-5 bg-[--custom_blue_light] rounded-lg'>
          <div className='mb-5'dangerouslySetInnerHTML={{ __html: post.content }} />
          <Link className='text-[--custom_blue] bg-[--custom_lime] py-1 px-5 rounded-full transition-opacity hover:opacity-80' to={`/post/${post.fileName}`}>Open post - {post.fileName}</Link>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Blog;
