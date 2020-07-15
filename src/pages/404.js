import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Head from '../components/Head';

const NotFound = () => {
    return (
        <Layout>
            <Head title="Oof"/>
            <h1>Oof, Page Not Found</h1>
            <p>
                <Link to="/">
                    Head home
                </Link>
            </p>
        </Layout>
    )
}

export default NotFound;