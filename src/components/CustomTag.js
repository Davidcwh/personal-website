import React from 'react';

import '../styles/CustomTag.css';

const CustomTag = ({ color, text }) => {
    return (
        <div className={`ui ${color} label nonSelect`} >{text}</div>
    )
}

export default CustomTag;