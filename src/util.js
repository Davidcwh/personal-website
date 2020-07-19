import React from 'react';
import { Icon } from 'semantic-ui-react'
import CustomCard from './components/CustomCard';

const getCards = (projects) => {
    return projects.map(({
        image,
        title,
        techStack,
        description,
        links
    }) => {
        return <CustomCard 
            image={require(`${image}`)} 
            title={title} 
            description={description}
            meta={techStack}
            links={getLinks(links)}
            />
    });
}

const getLinks = (links) => {
    const linksArray = [];

    if(links['github']) {
        linksArray.push(
            <a href={links['github']}>
                <Icon name='github' />
                Github
            </a>
        )
    }

    if(links['website']) {
        linksArray.push(
            <a href={links['website']}>
                <Icon name='mouse pointer' />
                Website
            </a>
        )
    }

    if(links['blogPost']) {
        linksArray.push(
            <a href={links['blogPost']}>
                <Icon name='file outline' />
                Blog Post
            </a>
        )
    }

    return linksArray
}

export { getCards };