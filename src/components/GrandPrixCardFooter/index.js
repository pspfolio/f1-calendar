import React from 'react'

import './GrandPrixCardFooter.css'

const GrandPrixCardFooter = ({locality, country, date}) => (
  <div className='card-footer'>
    <span className='location'>
      <img src='../src/images/location.svg' className='icon' alt='f1 circuit location pointer' />
      {`
        ${locality},
        ${country}
      `}
    </span>
    <span className='pipe'>|</span>
    <span className='date'>
      <img src='../src/images/calendar.svg' className='icon' alt='f1 calendar raceday' />
      {date}
    </span>
    <span className='pipe'>|</span>
    <span className='race-status'>
      <img src='../src/images/checkeredflag.svg' className='icon' alt='f1 race status' />
      {
        new Date(date) < new Date() ? 'Finished' : 'Upcoming'
      }
    </span>
  </div>
)

export default GrandPrixCardFooter
