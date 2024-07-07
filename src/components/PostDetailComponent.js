// src/pages/PostDetailComponent.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { marked } from 'marked';
import { Link } from 'react-router-dom';

const PostDetail = () => {
    const { filename } = useParams(); // Get the filename from the URL parameter
    const [content, setContent] = useState('');

    useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch(`/posts/${filename}.md`);
            const text = await response.text();
            const htmlContent = marked(text);
            setContent(htmlContent);
        };

        fetchPost();
    }, [filename]);

    return (
        <div className='text-white post p-5 m-5 mt-0 bg-[--custom_blue_light] rounded-lg'>
            <h1 className='font-extrabold'>{filename || "Post"}</h1>
            <div className='mb-5' dangerouslySetInnerHTML={{ __html: content }} />
            {/* Breadcrumbs */}
            <div className='px-5 py-2 bg-[--custom_blue] rounded-full'>
                <Link className='text-[--custom_lime] transition-opacity hover:opacity-80' to='/'>Home</Link>
                <span> / </span>
                <Link className='text-[--custom_lime] transition-opacity hover:opacity-80' to='/blog'>Blog</Link>
                <span> / </span>
                <span>{filename || "Post"}</span>
            </div>
        </div>
    );
};

export default PostDetail;
