import React from 'react';
import { Link } from 'gatsby';

import blogStyles from '../styles/blog.module.scss';

const CustomPost = ({ slug, title, date }) => {
    return (
        <div className="item">
            <Link className={blogStyles.post} to={`/blog/${slug}`}>
                <div className="content">
                    <h2 className="header">{title}</h2>

                    <p>{date}</p>

                    <div className="">
                        this is a post excerpt.
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default CustomPost;