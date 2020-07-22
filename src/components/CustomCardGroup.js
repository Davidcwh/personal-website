import React from 'react';
import { Card } from 'semantic-ui-react';

import { getCards } from '../util';

const CustomCardGroup = ({ cards }) => {
    const processedCards = getCards(cards);

    return (
        <Card.Group stackable>
            {processedCards}
        </Card.Group>
    )
}

export default CustomCardGroup;