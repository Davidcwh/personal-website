import React from 'react';

import CustomCard from './components/CustomCard';
import CustomLink from './components/CustomLink';
import CustomItem from './components/CustomItem';
import CustomTag from './components/CustomTag';

const getCards = (projects) => {
    return projects.map(({
        image,
        title,
        techStack,
        description,
        links
    }) => {
        return <CustomCard 
            key={title}
            image={image ? require(`${image}`) : null} 
            title={title} 
            description={description}
            meta={techStack}
            links={links ? getLinks(links) : null}
            />
    });
}

const getLinks = (links) => {
    const linksArray = [];

    if(links['github']) {
        linksArray.push(
            <CustomLink
                key={links['github']}
                iconName="github"
                link={links['github']}
                label="Github"
            />
        )
    }

    if(links['website']) {
        linksArray.push(
            <CustomLink
                key={links['website']}
                iconName="external alternate"
                link={links['website']}
                label="Website"
            />
        )
    }

    if(links['learnMore']) {
        linksArray.push(
            <CustomLink
                key={links['learnMore']}
                iconName="file outline"
                link={links['learnMore']}
                label="Learn More"
            />
        )
    }

    return linksArray
}

const getTags = (tags) => {
    return tags.map(({ color, text }) => {
        return <CustomTag key={text} color={color} text={text} />
    })
}

const getExperiences = (experiences) => {
    return experiences.map(experience => {
        return (
          <CustomItem
            key={experience.company + experience.position}
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