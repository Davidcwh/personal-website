import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

const IndexPage = () => {
  return (
    <Layout>
      <div>
        <h1>Hello</h1>
        <h2>I'm David, a full-stack developer living in Singapore</h2>
        <p><Link to="/contact">Contact me.</Link></p>
      </div>
    </Layout>
  )
}

export default IndexPage;