import React from 'react';
import { Link } from 'gatsby';

import style from '../styles/navigation.module.css';

const Navigation = ({ nextPath, previousPath, nextLabel, previousLabel }) => {
  const previous = previousPath ? (
    <span className={style.button}>
      <Link className={style.link} to={`/blog/${previousPath}`}>
        <span className={style.iconPrev}>←</span>
        <span className={style.buttonText}>{previousLabel}</span>
      </Link>
    </span>
  ) : null;

  const backToBlog = (
    <span className={style.button}>
      <Link className={style.link} to={`/blog/`}>
        <span className={style.buttonText}>Back to Blog</span>
      </Link>
    </span>
  );

  const next = nextPath ? (
    <span className={style.button}>
      <Link className={style.link} to={`/blog/${nextPath}`}>
        <span className={style.buttonText}>{nextLabel}</span>
        <span className={style.iconNext}>→</span>
      </Link>
    </span>
  ) : null;

  return (
    <div className={style.frame}>
      {previous}
      {backToBlog}
      {next}
    </div>
  )
}

export default Navigation;