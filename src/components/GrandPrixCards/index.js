import React from 'react'
import GrandPrixCard from '../GrandPrixCard'

import './GrandPrixCards.css'

const GPCard = ({data}) => (
  <div>
    <ul className='card-list'>
      {
        data.map((item) => {
          return <GrandPrixCard item={item} key={item.round} />
        })
      }
    </ul>
  </div>
)

/*
<GrandPrixCardHeader country={item.circuit.Location.country} racename={item.raceName} />
<GrandPrixCardFooter locality={item.circuit.Location.locality} country={item.circuit.Location.country} date={item.date} />
*/

export default GPCard
