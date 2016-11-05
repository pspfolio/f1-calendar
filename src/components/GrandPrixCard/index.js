import React from 'react'
import GrandPrixCardHeader from '../GrandPrixCardHeader'
import GrandPrixCardFooter from '../GrandPrixCardFooter'

import './GrandPrixCard.css'

const GrandPrixCard = ({item}) => (
  <li key={item.round} className='card'>
    <GrandPrixCardHeader country={item.country} racename={item.racename} />
    <GrandPrixCardFooter locality={item.locality} country={item.country} date={item.date} />
  </li>
)

export default GrandPrixCard;
