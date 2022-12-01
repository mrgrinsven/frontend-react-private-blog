import React from 'react';
import {Link} from 'react-router-dom';

import './Blog.css'
import posts from '../../data/posts.json';

const Blog = () => {
    function BlogPost() {
        console.log(posts);
        return (
            <ul>
                {posts.map((post) => {
                    return (
                        <li
                            key={post.id}
                        >
                            <Link
                                className='blog-link'
                                to={'/blogposts/' + post.id}
                            >
                                {post.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        );
    }

    return (
        <>
            <h1>Blog overzichtspagina</h1>
            <h2>Aantal blogposts: {posts.length}</h2>
            <div>{BlogPost()}</div>
        </>
    );
};

export default Blog;