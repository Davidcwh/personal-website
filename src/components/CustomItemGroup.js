import React from 'react';
import {  Item } from 'semantic-ui-react';

import CustomItem from './CustomItem';

const CustomItemGroup = ({ edges }) => (
  <Item.Group divided>
    {edges.map(edge => {
        return (
            <CustomItem
                slug={edge.node.slug}
                title={edge.node.title}
                date={edge.node.publishedDate}
            />
        )
    })}
  </Item.Group>
)

export default CustomItemGroup;