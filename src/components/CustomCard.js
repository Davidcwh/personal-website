import React from 'react'
import { Card, Grid } from 'semantic-ui-react'

import CustomCardStyles from '../styles/CustomCard.module.scss';

const CustomCard = ({image, title, meta, description, links}) => (
  <Card className={CustomCardStyles.cardFrame}>
    <Card.Content>
      <Card.Header className={CustomCardStyles.cardTitle}>
        <img src={image} className={CustomCardStyles.cardImage}/>
        {title}
      </Card.Header>

      <Card.Description>
        <Card.Meta >
          <span>{meta}</span>
        </Card.Meta>
        <hr/>
        {description}
      </Card.Description>
    </Card.Content>

    <Card.Content extra>
      <div className={CustomCardStyles.cardLinks}>
        <Card.Group stackable>
          {links}
        </Card.Group> 
      </div>
    </Card.Content>
  </Card>
)

export default CustomCard