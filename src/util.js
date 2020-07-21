import React from 'react';

import CustomCard from './components/CustomCard';
import CustomLink from './components/CustomLink';
import CustomItem from './components/CustomItem';

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

const getTags = (tags) => {
    return tags.map(tag => {
        return <div className={`ui ${tag.color} label`} >{tag.text}</div>
    })
}

const getExperiences = (experiences) => {
    return experiences.map(experience => {
        return (
          <CustomItem
            image={require(`${experience.image}`)}
            company={experience.company}
            position={experience.position}
            startDate={experience.startDate}
            endDate={experience.endDate}
        />
        )
      })
}

export { getCards, getTags, getExperiences };