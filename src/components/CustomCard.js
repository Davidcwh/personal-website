import React from 'react'
import { Card } from 'semantic-ui-react'

import CustomTagGroup from '../components/CustomTagGroup';
import CustomCardStyles from '../styles/CustomCard.module.scss';

const CustomCard = ({image, title, meta, description, links}) => {
  const linksComponent = links ? (
    <Card.Content extra>
        <div className={CustomCardStyles.cardLinks}>
          <Card.Group stackable>
            {links}
          </Card.Group> 
        </div>
      </Card.Content>
  ) : null;

  return (
    <Card fluid={!image} className={CustomCardStyles.cardFrame}>
      <Card.Content>
        <Card.Header headerFont>
          {image ? <img src={image} className={CustomCardStyles.cardImage}/> : null}
          <div className="headerFont">{title}</div>
        </Card.Header>

        <Card.Description>
          <Card.Meta >
            <CustomTagGroup tags={meta} size={image ? "mini" : null}/>
          </Card.Meta>
          {description}
        </Card.Description>
      </Card.Content>

      {linksComponent}
    </Card>
  )
}

export default CustomCard