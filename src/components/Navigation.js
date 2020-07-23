import React from 'react';
import { Link } from 'gatsby';

import style from '../styles/navigation.module.css';

const Navigation = ({ nextPath, previousPath, nextLabel, previousLabel }) =>
  previousPath || nextPath ? (
    <div className={style.frame}>
      {previousPath && (
        <span className={style.button}>
          <Link className={style.link} to={`/blog/${previousPath}`}>
            <span className={style.iconPrev}>←</span>
            <span className={style.buttonText}>{previousLabel}</span>
          </Link>
        </span>
      )}
      {<span className={style.button}>
          <Link className={style.link} to={`/blog/`}>
            <span className={style.buttonText}>Back to Blog</span>
          </Link>
        </span>}
      {nextPath && (
        <span className={style.button}>
          <Link className={style.link} to={`/blog/${nextPath}`}>
            <span className={style.buttonText}>{nextLabel}</span>
            <span className={style.iconNext}>→</span>
          </Link>
        </span>
      )}
    </div>
  ) : null

export default Navigation;