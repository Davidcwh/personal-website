import React from 'react';
import { Icon } from 'semantic-ui-react';

import Layout from '../components/Layout';
import Head from '../components/Head';
import CustomLink from '../components/CustomLink';

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact"/>
            <h1>Contact Me</h1>
            <hr/>
            <p>
                <CustomLink
                    iconName="linkedin"
                    label="Add me on Linkedin"
                    link="https://www.linkedin.com/in/david-chia-4b854a191/"
                />
            </p>
            <p>
                <CustomLink
                    iconName="mail"
                    label="Send me an email"
                    link="mailto:davidchia@u.nus.edu"
                />
            </p>
            <p>
                <CustomLink
                    iconName="telegram"
                    label="Drop a message via Telegram"
                    link="https://t.me/davidcwh"
                />
            </p>
            <p>
                <CustomLink
                    iconName="github"
                    label="Explore my Github"
                    link="https://github.com/Davidcwh"
                />
            </p>
        </Layout>
    )
}

export default ContactPage;