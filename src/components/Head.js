import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import favicon from '../media/favicon.ico';

const Head = ({ title }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <Helmet title={`${title} | ${data.site.siteMetadata.title}`}>
            <link rel="icon" href={favicon}/>
        </Helmet>
    )
}

export default Head;