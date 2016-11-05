import React from 'react'
import GrandPrixCardHeader from '../GrandPrixCardHeader'
import GrandPrixCardFooter from '../GrandPrixCardFooter'

import './GrandPrixCard.css'

const GrandPrixCard = ({item}) => (
  <li key={item.round} className='card'>
    <GrandPrixCardHeader country={item.circuit.Location.country} racename={item.raceName} />
    <GrandPrixCardFooter locality={item.circuit.Location.locality} country={item.circuit.Location.country} date={item.date} />
  </li>
)

export default GrandPrixCard;
