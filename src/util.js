import React from 'react';

import CustomCard from './components/CustomCard';
import CustomLink from './components/CustomLink';

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
            <CustomLink
                iconName="github"
                link={links['github']}
                label="Github"
            />
        )
    }

    if(links['website']) {
        linksArray.push(
            <CustomLink
                iconName="external alternater"
                link={links['website']}
                label="Website"
            />
        )
    }

    if(links['learnMore']) {
        linksArray.push(
            <CustomLink
                iconName="file outline"
                link={links['learnMore']}
                label="Learn More"
            />
        )
    }

    return linksArray
}

export { getCards };