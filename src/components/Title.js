import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

const Title = ({ styles, isHome, preface }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    const content = isHome ? null : (
        <>
            <Link className={styles.title} to="/">
                {data.site.siteMetadata.title}
            </Link>
            <span className={styles.flicker}/>
        </>
    )

    return (
        <h1 className={styles.titleContainer}>
            {content}
        </h1>
    )
}

export default Title;