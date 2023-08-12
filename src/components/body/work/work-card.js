/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import "./work-card.css";

function WorkCard({item}) {
  return (
    <div className='work-card'>
    <img src={item.companyLogo} className='work-logo'/>
    <div className='work-info'>
      <label className='company-name'>{item.company}</label>
      <div className='work-dates'>
        <label>{item.dateJoined}</label>
        <br></br>
        <label>{item.dateEnd}</label>
      </div>
      <div className='work-desc'>
         <p>{item.work}</p>
      </div>
     </div>
    </div>
  )
}

export default WorkCard;