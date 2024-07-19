import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
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
    <div className="overflow-x-hidden text-white grid">
      <div className="w-full md:w-[60%] md:justify-self-center px-4 md:px-10">
        <h1 className="text-5xl text-[--custom_lime] font-bold my-4 pb-4 leading-8">
          <span className="text-white font-extralight">@</span>Blog
        </h1>
        <div className="grid gap-4 mb-4 w-full">
          {posts.map((post, index) => (
            <div key={index} className="post bg-[--custom_blue_medium] rounded-lg border-2 border-[--custom_blue_light] overflow-hidden">
              <div className="post_metadata p-5 bg-[--custom_blue_light] border-b-4 border-[--custom_lime]">
                <p className="text-2xl font-bold text-white">{post.metadata.title || post.fileName}</p>
                <div className="mt-5 text-[--custom_lime] text-sm text-right">
                  <p className="whitespace-nowrap"><span className="font-bold">{post.metadata.author ? "By " + post.metadata.author : ""}</span>&nbsp;{post.metadata.dateCreated && post.metadata.dateCreated !== 'Invalid Date' ? "on " + post.metadata.dateCreated : ""}</p>
                </div>
              </div>
              <div className="max-h-96 overflow-hidden p-5 relative">
                <div className="h-full w-full absolute bg-gradient-to-b from-transparent from-0% via-transparent via-80% to-[--custom_blue_medium] to-100%"></div>
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
                  {post.content}
                </ReactMarkdown>
              </div>
              {post.content.length > 96 && (
                <div className="p-5 text-center flex items-center">
                  <div className="bg-[--custom_lime] h-[1px] grow rounded-lg"></div>
                  <Link
                    className="text-[--custom_blue] bg-[--custom_lime] py-1 px-5 rounded-full transition-opacity hover:opacity-80"
                    to={`/posts/${post.fileName}`}
                  >
                    Read more
                  </Link>
                  <div className="bg-[--custom_lime] h-[1px] grow rounded-lg"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
