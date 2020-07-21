import React from 'react';
import CustomAccordion from '../components/CustomAccordion';

import Layout from '../components/Layout';
import Head from '../components/Head';
import Title from '../components/Title';
import homeStyles from '../styles/home.module.scss';
import { getExperiences } from '../util';

const IndexPage = () => {
  const experiences = getExperiences(require('../content/experience.json').experience)

  return (
    <Layout isHome={true}>
      <Head title="About Me"/>
      <Title styles={homeStyles}/>
      <hr/>
      <div className={homeStyles.aboutText}>
        <p>Currently a second year Computer Science undergraduate at National University of Singapore. Beyond being a highly movitated and independent learner, I'm passionate about applying my skills and knowledge to solving real life problems.</p>
        <p>In addition to showcasing my personal projects, this website is an outlet for me to document and reflect on the skills, concepts and technologies I have learned in my journey of being a fullstack software engineer.</p>
        
        <hr/>

        <h2>Technical Skills</h2>
        <p><b>Languages:</b> Javascript, Java, Python, C</p>
        <p><b>Web Development:</b> NodeJS, ExpressJS, ReactJs, Redux, Gatsby</p>
        <p><b>Mobile Development:</b> Android Studio (Java), Firebase</p>
        <p><b>Others:</b> Continous Integration/Continous Delivery, Agile Development, Git</p>

        <br/>

        <h2>Experience</h2>
        <div className="ui divided unstackable items">
          {experiences}
        </div>
        
        <br/>

        <h2>Resume</h2>
        <CustomAccordion title="Resume" content={<iframe src="https://drive.google.com/file/d/1LX7YGTBX3h_FDlB6rIxiBouFF7x4yobk/preview" width="1000" height="1200"></iframe>}/>
        
      </div>
     
    </Layout>
  )
}

export default IndexPage;