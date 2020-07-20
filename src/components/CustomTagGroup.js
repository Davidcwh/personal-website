import React from 'react';
import { getTags } from '../util'

const CustomTagGroup = ({ tags }) => {
    console.dir(tags);
    const processedTags = getTags(tags);

    return (
        <div className="ui labels mini">
            {processedTags}
        </div>
    )
}

export default CustomTagGroup;