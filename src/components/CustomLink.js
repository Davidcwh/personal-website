import React from 'react';
import { Icon } from 'semantic-ui-react';

import CustomLinkStyles from '../styles/CustomLink.module.scss';

const CustomLink = ({ iconName, label, link }) => {
    return (
        <div className={CustomLinkStyles.frame}>
            <a className={CustomLinkStyles.link} href={link} target="_blank">
                <Icon name={iconName} />
                {label}
            </a>
        </div>
    )
}

export default CustomLink;