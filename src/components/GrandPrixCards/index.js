import React from 'react'
import GrandPrixCard from '../GrandPrixCard'

import './GrandPrixCards.css'

const GPCard = ({data}) => (
  <div className="card-container">
    <ul className='card-list'>
      {
        data.map((item) => {
          return <GrandPrixCard item={item} key={item.round} />
        })
      }
    </ul>
  </div>
)

export default GPCard
