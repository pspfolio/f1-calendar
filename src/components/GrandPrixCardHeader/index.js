import React from 'react'

import './GrandPrixCardHeader.css'

const GrandPrixCardHeader = ({ country, racename, fastestLap }) => (
  <div className='card-header'>
    <div className={country + ' flag'}></div>
    <h3 className='card-title'>{racename}</h3>
  </div>
)

export default GrandPrixCardHeader;
