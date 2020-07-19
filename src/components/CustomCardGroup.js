import React from 'react';
import { Card } from 'semantic-ui-react';

import { getCards } from '../util';

const CustomCardGroup = ({projects}) => {
    const cards = getCards(projects);

    return (
        <Card.Group stackable>
            {cards}
        </Card.Group>
    )
}

export default CustomCardGroup;