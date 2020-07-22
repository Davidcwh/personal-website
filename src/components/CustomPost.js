import React from 'react';
import { Link } from 'gatsby';

import blogStyles from '../styles/blog.module.scss';

const CustomPost = ({ slug, title, date, excerpt }) => {
    return (
        <div className="item">
            <Link className={blogStyles.post} to={`/blog/${slug}`}>
                <div className="content">
                    <h2>{title}</h2>

                    <p>{date}</p>

                    <div>{excerpt}</div>
                </div>
            </Link>
        </div>
    )
}

export default CustomPost;