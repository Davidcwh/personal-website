import React from 'react';

import homeStyles from '../styles/home.module.scss';

const CustomItem = ({ image, company, position, startDate, endDate }) => {
    return (
        <div className="item">
            <div className={homeStyles.companyImage}><img src={image} alt={company}/></div>
            <div className="content">
              <p><b>{company}</b> | {position}</p>
              <i>{startDate} - {endDate}</i>
            </div>
        </div>
    )
}

export default CustomItem;