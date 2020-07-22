import React from 'react';
import { getTags } from '../util'

const CustomTagGroup = ({ tags, size }) => {
    const processedTags = getTags(tags);

    return (
        <div className={`ui labels ${size}`}>
            {processedTags}
        </div>
    )
}

export default CustomTagGroup;