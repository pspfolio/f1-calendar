import React from 'react'
import GrandPrixCard from '../GrandPrixCard'

import './GrandPrixCards.css'

const GPCard = ({data}) => (
  <div>
    <ul className='card-list'>
      {
        data.map((item) => {
          return <GrandPrixCard item={item} />
        })
      }
    </ul>
  </div>
)

export default GPCard
