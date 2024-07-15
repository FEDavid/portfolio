import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import frontMatter from 'front-matter';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const context = require.context('../../public/posts', false, /\.md$/);
        const postFiles = context.keys();

        const postsData = await Promise.all(
          postFiles.map(async (file) => {
            const filePath = `/posts/${file.replace(/^\.\//, '')}`;
            const response = await fetch(filePath, { cache: 'no-store' });

            if (!response.ok) {
              throw new Error(`Failed to fetch ${filePath}`);
            }

            const text = await response.text();
            const parsed = frontMatter(text);

            // Format the date
            const formattedDate = new Date(parsed.attributes.dateCreated).toLocaleDateString(undefined, {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            });

            return {
              content: parsed.body,
              metadata: {
                ...parsed.attributes,
                dateCreated: formattedDate // Update formatted date
              },
              fileName: file.replace(/^\.\//, '').replace('.md', '')
            };
          })
        );

        console.log('Fetched posts data:', postsData); // Log the fetched posts data

        setPosts(postsData);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className='text-white grid custom_pattern_blue'>
      <div className='px-5 w-full md:w-[60%] md:justify-self-center'>
        <h1 className='text-5xl text-[--custom_lime] font-bold mb-5'>
          <span className='text-white font-extralight'>@</span>Blog
        </h1>
        {posts.map((post, index) => (
          <div key={index} className='post mb-5 bg-[--custom_blue_light] rounded-lg'>
            <div className='post_metadata p-5 bg-[--custom_lime] rounded-t-lg flex justify-between text-[--custom_blue] items-center'>
              <p className='text-2xl font-bold'>{post.metadata.title || post.fileName}</p>
              <div>
                <p className='text-right'>{post.metadata.author ? "By " + post.metadata.author : ""}</p>
                <p className='text-right whitespace-nowrap'>{post.metadata.dateCreated && post.metadata.dateCreated !== 'Invalid Date' ? "on " + post.metadata.dateCreated : ""}</p>
              </div>
            </div>
            <div className='p-5'>
              <div className='mb-5 max-h-96 overflow-hidden'>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
              </div>
              {post.content.length > 96 && (
                <div class="text-center mt-4 flex items-center">
                  <div class="bg-[--custom_lime] h-[1px] grow rounded-lg"></div>
                  <Link
                    className='text-[--custom_blue] bg-[--custom_lime] py-1 px-5 rounded-full transition-opacity hover:opacity-80'
                    to={`/posts/${post.fileName}`}
                  >
                    Read more - {post.metadata.title || post.fileName}
                  </Link>
                  <div class="bg-[--custom_lime] h-[1px] grow rounded-lg"></div>
                </div>

              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
