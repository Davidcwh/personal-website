import React from 'react';

import Layout from '../components/Layout';
import Head from '../components/Head';
import CustomCardGroup from '../components/CustomCardGroup';

const ProjectsPage = () => {
    const projects = require('../content/projects.json').projects;

    return (
        <Layout>
            <Head title="Projects"/>
            <h1>My Projects</h1>
            <CustomCardGroup cards={projects}/>
        </Layout>
    )
}

export default ProjectsPage;