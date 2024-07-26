import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import frontMatter from 'front-matter';

const Sitemap = () => {

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

                        return {
                            metadata: parsed.attributes,
                            fileName: file.replace(/^\.\//, '').replace('.md', '')
                        };
                    })
                );

                setPosts(postsData);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div className="text-white p-8">
            {/* Main pages */}
            <p className='mb-2 text-[--custom_lime] font-semibold text-2xl'>Main pages</p>
            <ul className='mb-8'>
                <li className='mb-2 hover:opacity-75 transition-opacity'>
                    <span className='font-bold text-[--custom_lime] me-1'>-</span><Link to="/">Home</Link>
                </li>
                <li className='mb-2 hover:opacity-75 transition-opacity'>
                    <span className='font-bold text-[--custom_lime] me-1'>-</span><Link to="/blog">Blog</Link>
                </li>
                <li className='mb-2 hover:opacity-75 transition-opacity'>
                    <span className='font-bold text-[--custom_lime] me-1'>-</span><Link to="/sitemap">Sitemap</Link>
                </li>
            </ul>
            {/* Portfolio pages */}
            <p className='mb-2 text-[--custom_lime] font-semibold text-2xl'>Portfolio pages</p>
            <ul className='mb-8'>
                <li className='mb-2 hover:opacity-75 transition-opacity'>
                    <span className='font-bold text-[--custom_lime] me-1'>-</span><a href='https://flask-weather.david-mould.dev/' target='blank'>Flask Weather Web Application</a>
                </li>
                <li className='mb-2 hover:opacity-75 transition-opacity'>
                    <span className='font-bold text-[--custom_lime] me-1'>-</span><a href='https://david-mould.dev/PHP_ticket-system/login.php' target='blank'>PHP Ticket system Web Application</a>
                </li>
            </ul>
            {/* Blog posts */}
            <p className='mb-2 text-[--custom_lime] font-semibold text-2xl'>Blog posts</p>
            <ul className='mb-8'>
                {posts.map((post, index) => (
                    <li key={index} className='mb-2 hover:opacity-75 transition-opacity'>
                        <span className='font-bold text-[--custom_lime] me-1'>-</span><Link to={`/posts/${post.fileName}`}>{post.metadata.title || post.fileName}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sitemap;
