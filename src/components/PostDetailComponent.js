import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import frontMatter from 'front-matter';
import remarkGfm from 'remark-gfm';

const PostDetail = () => {
  const { filename } = useParams(); // Get the filename from the URL parameter
  const [content, setContent] = useState('');
  const [metadata, setMetadata] = useState({ title: '', dateCreated: '', author: '' });

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/posts/${filename}.md`, { cache: 'no-store' });
        const text = await response.text();

        if (!response.ok) {
          throw new Error(`Failed to fetch /posts/${filename}.md`);
        }

        console.log(`Fetched /posts/${filename}.md:`, text);  // Debugging log

        const parsed = frontMatter(text);
        setContent(parsed.body);

        // Format the date
        const formattedDate = new Date(parsed.attributes.dateCreated).toLocaleDateString(undefined, {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });

        setMetadata({
          ...parsed.attributes,
          dateCreated: formattedDate // Update formatted date
        });
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [filename]);

  return (
    <div className='grid custom_pattern_blue'>
      <div className='text-white post md:m-5 mt-0 md:rounded-lg justify-self-center w-full md:w-[60%]'>
        <div className='post_metadata p-5 bg-[--custom_lime] md:rounded-t-lg flex justify-between text-[--custom_blue] items-center'>
          <p className='text-2xl font-bold'>{metadata.title || filename || "Post"}</p>
          <div>
            <p className='text-right'>{metadata.author ? "By " + metadata.author : ""}</p>
            <p className='text-right whitespace-nowrap'>{metadata.dateCreated && metadata.dateCreated !== 'Invalid Date' ? "on " + metadata.dateCreated : ""}</p>
          </div>
        </div>
        <div className='p-5 pt-6 bg-[--custom_blue_light] md:rounded-b-lg'>
          <div className='mb-5 grid gap-2'>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
          </div>
          {/* Breadcrumbs */}
          <div className='px-5 py-2 bg-[--custom_blue] rounded-full'>
            <Link className='text-[--custom_lime] transition-opacity hover:opacity-80' to='/'>Home</Link>
            <span> / </span>
            <Link className='text-[--custom_lime] transition-opacity hover:opacity-80' to='/blog'>Blog</Link>
            <span> / </span>
            <span>{metadata.title || filename || "Post"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
