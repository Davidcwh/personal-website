import React from 'react';
import {  Item } from 'semantic-ui-react';

import CustomPost from './CustomPost';

const CustomPostGroup = ({ edges }) => (
  <Item.Group divided>
    {edges.map(edge => {
        return (
            <CustomPost
                slug={edge.node.slug}
                title={edge.node.title}
                date={edge.node.publishedDate}
            />
        )
    })}
  </Item.Group>
)

export default CustomPostGroup;