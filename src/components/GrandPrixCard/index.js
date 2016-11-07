import React from 'react'
import { Link } from 'react-router'
import GrandPrixCardHeader from '../GrandPrixCardHeader'
import GrandPrixCardFooter from '../GrandPrixCardFooter'

import './GrandPrixCard.css'

const GrandPrixCard = ({item}) => (
  <Link className='card-link' to={`grandprix/${item.round}`}>
    <li className='card'>
      <GrandPrixCardHeader country={item.country} racename={item.racename} />
      <GrandPrixCardFooter locality={item.locality} country={item.country} date={item.date} />
    </li>
  </Link>
)

export default GrandPrixCard;
