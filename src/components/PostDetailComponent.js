import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import frontMatter from 'front-matter';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';

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
    <div className='grid'>
      <div className='text-white post md:m-5 mt-0 md:rounded-lg justify-self-center w-full md:w-[60%]'>
        <div className='post_metadata p-5 bg-[--custom_blue_light] md:rounded-t-lg border-b-4 border-[--custom_lime]'>
          <p className='text-2xl font-bold text-white'>{metadata.title || filename || "Post"}</p>
          <div className='mt-5 ms-10 text-[--custom_lime]'>
            <p className='text-right text-sm font-bold'>{metadata.author ? "By " + metadata.author : ""}</p>
            <p className='text-right text-sm whitespace-nowrap'>{metadata.dateCreated && metadata.dateCreated !== 'Invalid Date' ? "on " + metadata.dateCreated : ""}</p>
          </div>
        </div>
        <div className='p-5 pt-6 bg-[--custom_blue_medium] mb-5 md:rounded-b-lg'>
          <div className='mb-5 grid gap-2'>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || '')
                  return !inline && match ? (
                    <SyntaxHighlighter
                      children={String(children).replace(/\n$/, '')}
                      style={github}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    />
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  )
                }
              }}
            >
              {content}
            </ReactMarkdown>
          </div>
          {/* Breadcrumbs */}
          <div className='px-6 py-3 bg-[--custom_blue] rounded-full'>
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
