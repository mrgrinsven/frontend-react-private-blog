import React from 'react';
import {useParams} from 'react-router-dom';

import './BlogPost.css'
import posts from '../../data/posts.json';

const BlogPost = () => {
    const {blogId} = useParams()

    return (
        <>
            <div className='blog-post-container'>
                <h2 className='blog-title'>
                    {posts.find(post => post.id === blogId).title}
                </h2>
                <h3>
                    {posts.find(post => post.id === blogId).date}
                </h3>
                <p>
                    {posts.find(post => post.id === blogId).content}
                </p>


            </div>


        </>
    );
};

export default BlogPost;