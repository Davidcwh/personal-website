import React from "react";
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/Layout';
import Head from '../components/Head';
import CustomPostGroup from '../components/CustomPostGroup';

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost (
                sort: {
                    fields:publishedDate,
                    order:DESC
                }
            ) {
                edges {
                    node {
                        title
                        slug
                        publishedDate(formatString:"MMMM Do, YYYY")
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <Head title="Blog"/>
            <h1>Blog</h1>
            <CustomPostGroup edges={data.allContentfulBlogPost.edges} />  
        </Layout>
    )
}

export default BlogPage;