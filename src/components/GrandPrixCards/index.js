import React from 'react'
import './GrandPrixCards.css'

const GPCard = ({data}) => (
  <div>
    <ul>
      {
        data.map((item) => {
          return <div key={item.round} className='card'>
            <div className={item.circuit.Location.country + ' flag'}></div>
            <h3 className='card-title'>{item.raceName}</h3>
            <div className='card-footer'>
              <span className='location'>
                {`
                  ${item.circuit.Location.locality},
                  ${item.circuit.Location.country}
                `}
              </span>
              <span className='date'>
                {item.date}
              </span>
            </div>
          </div>
        })
      }
    </ul>
  </div>
)

export default GPCard
