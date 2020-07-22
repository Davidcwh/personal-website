import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Head from '../components/Head';
import errorStyles from '../styles/404.module.scss';

const NotFound = () => {
    return (
        <Layout>
            <Head title="Page Not Found"/>
            <div className={errorStyles.frame}>
                <h1>Page Not Found</h1>
                <p>
                    <Link to="/">
                        Head back home
                    </Link>
                </p>
            </div>
        </Layout>
    )
}

export default NotFound;